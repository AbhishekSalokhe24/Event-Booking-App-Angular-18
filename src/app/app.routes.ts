import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { ContacUSComponent } from './pages/contac-us/contac-us.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'events/:id',
        component:EventsComponent
    },
    {
        path:'bookings',
        component:MyBookingsComponent
    },
    {
        path:'contact',
        component:ContacUSComponent
    }
];
