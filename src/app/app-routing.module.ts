import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebHomeComponent } from './web-home/web-home.component';


const routes: Routes = [
  {path: WebHomeComponent.screenID, component: WebHomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
