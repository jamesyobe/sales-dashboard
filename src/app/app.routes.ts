import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { UserHelpComponent } from './modules/user-help/user-help.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { LocationComponent } from './modules/location/location.component';
import { ShopsComponent } from './modules/shops/shops.component';
import { ProductsComponent } from './modules/products/products.component';
import { SalesComponent } from './modules/sales/sales.component';
import { StatisticsComponent } from './modules/statistics/statistics.component';
import { ContactComponent } from './modules/contact/contact.component';
import { RegistrationPageComponent } from './modules/registration-page/registration-page.component';
import { TrackingComponent } from './modules/tracking/tracking.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'app/login', pathMatch: 'full'
    },
    {
        path: 'app/login',
        component: LoginPageComponent
    },
    {
        path: '',
        component: HomePageComponent,
        children: [
            {
                path: 'app/dashboard',
                component: HomePageComponent,
                canActivate: [AuthGuard],
            },

        ]
    },
    
    {
        path: 'app/location',
        component: LocationComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'app/shops',
        component: ShopsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'app/products',
        component: ProductsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'app/sales',
        component: SalesComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'app/statistics',
        component: StatisticsComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'app/contact',
        component: ContactComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'app/user-profile',
        component: UserProfileComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'app/tracking',
        component: TrackingComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'app/help',
        component: UserHelpComponent,
        // canActivate: [AuthGuard],
    },
    {
        path: 'app/register',
        component: RegistrationPageComponent,
        // canActivate: [AuthGuard],
    }
];
