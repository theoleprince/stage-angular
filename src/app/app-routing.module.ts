import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestRouteComponent } from './test-route/test-route.component';

const routes: Routes = [
  {
    path: 'test-route', component: TestRouteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
