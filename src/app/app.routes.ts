import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { FooterComponent } from '../components/footer/footer.component';
export const routes: Routes = [
    { path: '', component: DashboardComponent },
    {path:'footer',component:FooterComponent}
];
