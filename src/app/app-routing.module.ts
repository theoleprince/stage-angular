import { DetailComponent } from './blog-categories/detail/detail.component';
import { AllComponent } from './blog-categories/all/all.component';
import { UpdateComponent } from './blog-categories/update/update.component';
import { AddComponent } from './blog-categories/add/add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestRouteComponent } from './test-route/test-route.component';
import { AddJunieComponent } from './blog-categories-junie/add-junie/add-junie.component';
import { AllJunieComponent } from './blog-categories-junie/all-junie/all-junie.component';
import { UpdateJunieComponent } from './blog-categories-junie/update-junie/update-junie.component';
import { DetailJunieComponent } from './blog-categories-junie/detail-junie/detail-junie.component';

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
  //Route junie
  {
    path: 'blog-category/add-junie', component: AddJunieComponent,
  },
  {
    path: 'blog-category/all-junie', component: AllJunieComponent,
  },
  {
    path: 'blog-category/update-junie/:id', component: UpdateJunieComponent,
  },
  {
    path: 'blog-category/detail-junie/:id', component: DetailJunieComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
