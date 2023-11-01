import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkiPageComponent } from './ski-page/ski-page.component';
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'ski',component:SkiPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
