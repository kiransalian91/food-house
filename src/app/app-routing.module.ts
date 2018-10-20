import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

import { CommonComponentsComponent } from './core/common-components/common-components.component';
import { NotificationsComponent } from './core/notifications/notifications.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'crazycolors', loadChildren: 'app/crazy-colors/crazy-colors.module#crazycolorsModule' },
  { path: 'setancreations', loadChildren: 'app/bookings/bookings.module#BookingsModule' },
  { path: 'home', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'contactus', loadChildren: 'app/financials/financials.module#FinancialsModule' },
  { path: 'khadavatheband', loadChildren: 'app/services/services.module#ServicesModule' },
  { path: 'common', component: CommonComponentsComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' } // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

