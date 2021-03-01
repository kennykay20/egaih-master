import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirsComponent } from "./firs.component";

const routes: Routes = [
  {
    path: '',
    component: FirsComponent,
    children:[
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

export class FirsRoutingModule {}
