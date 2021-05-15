import { DetailComponent } from './blog-categories/detail/detail.component';
import { AllComponent } from './blog-categories/all/all.component';
import { UpdateComponent } from './blog-categories/update/update.component';
import { AddComponent } from './blog-categories/add/add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestRouteComponent } from './test-route/test-route.component';

const routes: Routes = [
  {
    path: 'test-route', component: TestRouteComponent,
  },
  {
    path: 'blog-category/add', component: AddComponent,
  },
  {
    path: 'blog-category/update/:id', component: UpdateComponent,
  },
  {
    path: 'blog-category/all', component: AllComponent,
  },
  {
    path: 'blog-category/detail/:id', component: DetailComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
