import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { OwlModule } from 'ngx-owl-carousel';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import {MatTabsModule} from '@angular/material/tabs';
import { WebsiteComponent } from './work/website/website.component';
import { IntranetComponent } from './work/intranet/intranet.component';
import { WebAppComponent } from './work/web-app/web-app.component';
import { ReactiveFormsModule } from '@angular/forms';  
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    SkillComponent,
    WorkComponent,
    ContactComponent,
    BreadcrumbComponent,
    NotFoundComponent,
    FooterComponent,
    WebsiteComponent,
    IntranetComponent,
    WebAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OwlModule,
    HttpClientModule,
    MatTabsModule,
    LazyLoadImageModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
