import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Productos } from 'src/app/model/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  listarproductos: Productos[]=[];
  constructor(private service:ProductosService,private toastr: ToastrService) { }


  ngOnInit(): void {
    this.obtenerproductos();
  }

  //usa el metodo get
  obtenerproductos(){
    //se conecta al servicio
    this.service.getProductos().subscribe(data =>{
      console.log(data);
      this.listarproductos = data;
    },error=>{
      console.log(error)
    }
    )}

    eliminarProductos(id:any){

      this.service.eliminarProductos(id).subscribe(data => {

        this.toastr.error('El producto fue eliminado con exito','producto eliminado')
        this.obtenerproductos();
      })
    }


}
