import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

//BackOfficeModule module
import { BackOfficeModule } from './back-office/back-office.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { WorksComponent } from './pages/works/works.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { SpinnerComponent } from './layouts/spinner/spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ServicesComponent,
    AboutComponent,
    WorksComponent,
    ContactComponent,
    BlogComponent,
    ClientsComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    LoadingBarRouterModule,
    BackOfficeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
