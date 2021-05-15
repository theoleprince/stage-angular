import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestRouteComponent } from './test-route/test-route.component';
import { HeaderComponent } from './header/header.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AddComponent } from './blog-categories/add/add.component';
import { AllComponent } from './blog-categories/all/all.component';
import { UpdateComponent } from './blog-categories/update/update.component';
import { DetailComponent } from './blog-categories/detail/detail.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    TestRouteComponent,
    HeaderComponent,
    RightSidebarComponent,
    LeftSideBarComponent,
    FooterComponent,
    AddComponent,
    AllComponent,
    UpdateComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    //DataTablesModule
  ],
  schemas: [
    //CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
