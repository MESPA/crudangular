import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductosComponent } from './componentes/crear-productos/crear-productos.component';
import { ListarProductosComponent } from './componentes/listar-productos/listar-productos.component';



const routes: Routes = [
  {path: '',component : ListarProductosComponent},
 {path:'crear-productos',component:CrearProductosComponent},
 {path:'editar-productos/:id',component:CrearProductosComponent},
 {path : '**', redirectTo: '',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
