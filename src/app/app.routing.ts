import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './dashboard';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { HomePageComponent } from './home-page/home-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestportComponent } from './testport/testport.component';
import { BalancesComponent } from './balances/balances.component';
import { DepositComponent } from './deposit/deposit.component';
import { BuycoinsComponent } from './buycoins/buycoins.component';


const appRoutes: Routes = [
    { path: '', component: HomePageComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'Home', component: HomePageComponent },
    { path: 'deposit', component: DepositComponent },
    { path: 'portfolio', component:PortfolioComponent},
    { path: 'portfolio-new', component:TestportComponent},
    { path: 'balances', component:BalancesComponent},
    { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard]  },
    { path: 'buycoins', component:BuycoinsComponent},
  

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);