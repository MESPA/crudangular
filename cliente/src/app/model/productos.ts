export class Productos{
  id?:number;
  productos:string;
  categoria:string;
  ubicacion:string;
  precio:number;

  constructor(productos :string,categoria :string,ubicacion :string,precio :number){

    this.productos= productos;
    this.categoria= categoria;
    this.ubicacion= ubicacion;
    this.precio= precio;

  }
}
