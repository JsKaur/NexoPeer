import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { FooterComponent } from '../components/footer/footer.component';
import { PostComponent } from '../components/post/post.component';
import { SignINComponent } from '../components/sign-in/sign-in.component';
export const routes: Routes = [
    { path: '', component: DashboardComponent },
    {path:'footer',component:FooterComponent},
    {path:'post',component:PostComponent},
    {path:'sign',component:SignINComponent}
    
];
