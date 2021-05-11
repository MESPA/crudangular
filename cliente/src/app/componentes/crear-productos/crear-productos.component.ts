
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Productos } from 'src/app/model/productos';
import { ToastrService } from 'ngx-toastr';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent implements OnInit {


  //aplicando formularios reactivos ver el html
  productform :  FormGroup;
  titulo= 'Crear Productos';
  id:string | null;
  constructor(private fb : FormBuilder,
    private router:Router ,
    private toastr: ToastrService,
    private service : ProductosService ,
    private aRouter:ActivatedRoute
    )
    {
    //acceder al id reutilizando el formulario para editar productos
    this.productform =  this.fb.group({

      productos :['', Validators.required],
      categoria :['', Validators.required],
      ubicacion :['', Validators.required],
      precio :['', Validators.required]
    })

    this.id = this.aRouter.snapshot.paramMap.get('id');
   }
  ngOnInit(): void {
    this.eseditar();
  }
  agregarproductos(){

    //enviar valores a la base de datos
     const prod : Productos={
      productos :this.productform.get('productos')?.value,
      categoria :this.productform.get('categoria')?.value,
      ubicacion :this.productform.get('ubicacion')?.value,
      precio    :this.productform.get('precio')?.value
    }

    console.log(prod);
//consumir servicio de guardar
    this.service.guardarproducto(prod).subscribe(data =>{
        //uso de toastr
    this.toastr.success('El producto fue guardado con exito!', 'Producto Registrado!');
    //redireccionar paginas
    this.router.navigate(['/'])
    },error=>{
      console.log(error)
      this.productform.reset();
    })

  }

  eseditar(){
    if ( this.id !== null) {
      this.titulo = 'Editar producto';
      this.service.obtenerproductos(this.id).subscribe((data : any) =>{
        this.productform.patchValue
        ({

           productos: data.productos,
           categoria: data.categoria,
           ubicacion: data.ubicacion,
           precio: data.precio,

        })
        console.log(data)
      })
    }
  }

}
