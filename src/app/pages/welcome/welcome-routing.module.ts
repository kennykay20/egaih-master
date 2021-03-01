import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "src/app/components/header/header.component";
import { FirsComponent } from "../firs/firs.component";
import { WelcomeComponent } from "./welcome.component";

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children:[
      {
        path: 'welcome', redirectTo: 'welcome', pathMatch: 'full'
      },
      
      {
        path: 'firs', component: FirsComponent
      },
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WelcomeRoutingModule {}
