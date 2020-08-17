import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { WorksComponent } from './pages/works/works.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'portfolio', component: WorksComponent },
  { path: 'news', component: BlogComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

