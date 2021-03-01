import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {  Routes, PreloadAllModules,RouterModule } from "@angular/router";
import { FirsComponent } from "./pages/firs/firs.component";
import { WelcomeComponent } from "./pages/welcome/welcome.component";

const routes : Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'firs',
    component: FirsComponent
  },
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
