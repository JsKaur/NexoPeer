import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';
import { PostComponent } from './components/post/post.component';
import {SignINComponent} from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudyGoupsComponent } from './study-goups/study-goups.component';
import { NewpostComponent } from './newpost/newpost.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    {path : 'home', component:HomepageComponent},
    {path:'group',component:StudyGoupsComponent},
    {path:'profile', component:ProfileComponent},
    {path:'footer',component:FooterComponent},
    {path:'post',component:PostComponent},
    {path: 'new', component:NewpostComponent},
    {path:'sign',component:SignINComponent},
    {path:'register',component:RegisterComponent}


    
];
