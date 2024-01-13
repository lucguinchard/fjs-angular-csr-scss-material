import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { BlogComponent } from './page/blog/blog.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'Blog page',
  },
];