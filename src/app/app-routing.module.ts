import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductosComponent } from './components/crear-productos/crear-productos.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';

const routes: Routes = [
  { path:'', component: ListarProductosComponent },
  { path:'crear-producto', component: CrearProductosComponent },
  { path:'editar-producto/:id', component: CrearProductosComponent },
  { path:'**', redirectTo:'', pathMatch:'full'}//esta linea evita que se rompa si paso url cualquiera, redirecciona a a ruta principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
