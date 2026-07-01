import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Practice } from './Practice/practice';

const routes: Routes = [
  {path:'Practice',component:Practice}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
