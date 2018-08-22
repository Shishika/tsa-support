import { FormComponent } from './form/form.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { OrganizationAdminsComponent } from './organization-admins/organization-admins.component';
import { CoachComponent } from './coach/coach.component';
import { PlayerComponent } from './player/player.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentsComponent } from './tournaments/tournaments.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'player-or-guardian',
    component: PlayerComponent
  },
  {
    path: 'coach-or-manager',
    component: CoachComponent
  },
  {
    path: 'tournaments',
    component: TournamentsComponent
  },
  {
    path: 'organization-admins',
    component: OrganizationAdminsComponent
  },
  {
    path: 'support-page',
    component: SupportPageComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
