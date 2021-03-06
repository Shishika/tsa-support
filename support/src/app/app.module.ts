import { Form2Component } from './form2/form2.component';
import { SupportBreadcrumbComponent } from './shared/components/support-breadcrumb/support-breadcrumb.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PlayerComponent } from './player/player.component';
import { CoachComponent } from './coach/coach.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { OrganizationAdminsComponent } from './organization-admins/organization-admins.component';
import { PrintComponent } from './print/print.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SupportPageComponent,
    PlayerComponent,
    CoachComponent,
    TournamentsComponent,
    OrganizationAdminsComponent,
    PrintComponent,
    FormComponent,
    SupportBreadcrumbComponent,
    Form2Component
  ],
  imports:
   [BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
