import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { ActivityComponent } from './activity/activity.component';


const routes: Routes = [
  {path:'mac',component:WeatherComponent},
  {path:'activity',component:ActivityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
