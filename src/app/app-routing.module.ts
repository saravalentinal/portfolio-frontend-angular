import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LogInComponent } from './components/log-in/log-in.component';

const routes: Routes = [
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'log-in', component:LogInComponent},
  {path: '', redirectTo:'log-in', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
