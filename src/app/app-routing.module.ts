import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FotoComponent} from "./foto/foto.component";
import {LoginComponent} from "./login/login.component";
import {CardComponent} from "./card/card.component";

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "foto", component: FotoComponent},
  {path: "card", component: CardComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
