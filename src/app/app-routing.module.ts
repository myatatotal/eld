import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CardComponent} from './card/card.component';
import {CardsOthersComponent} from './cards-others/cards-others.component';
import {ContentTrialComponent} from './content-trial/content-trial.component';
import {FooterComponent} from './footer/footer.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'card', component: CardComponent },
  { path: 'cards-others', component: CardsOthersComponent },
  { path: 'content-trial', component: ContentTrialComponent },
  { path: 'app-footer', component: FooterComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
