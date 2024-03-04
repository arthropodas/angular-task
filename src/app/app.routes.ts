import { Routes, provideRouter } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DetailsComponent } from './components/details/details.component';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo:'home' ,pathMatch:'full' },
    { path: 'home', component: LayoutComponent },
    { path:'details', component: DetailsComponent}
];



