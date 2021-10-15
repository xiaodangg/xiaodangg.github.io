import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './pages/demo/heroes/heroes.component';
import { DashboardComponent } from './pages/demo/dashboard/dashboard.component';
import { HeroDetailComponent } from './pages/demo/detail/hero-detail/hero-detail.component';
import { DemoSassComponent } from './pages/demo2/demo-sass/demo-sass.component';
import { NewDemoComponent } from './pages/demo/new-demo/new-demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'sass', component: DemoSassComponent },
  { path: 'newdemo', component: NewDemoComponent }
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
