import { Component, NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ProductosComponent } from "../components/productos/productos.component"
import { PlazosComponent } from "../components/plazos/plazos.component"
import { CreditosComponent } from "../components/creditos/creditos.component"

const routes : Routes = [
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: '',
    redirectTo: 'productos', pathMatch:'full'
  },
  {
    path: 'plazos',
    component: PlazosComponent
  },
  {
    path: 'creditos',
    component: CreditosComponent
  },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }