import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { ComponentsModule } from "src/app/components/components.module";
import { GeneralService } from "src/app/services/genService.service";
import { WelcomeComponent } from "../welcome/welcome.component";
import { FirsComponent } from "./firs.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  exports: [RouterModule],
  declarations: [
    WelcomeComponent,
    FirsComponent,

  ],
  providers:[
    GeneralService
  ]
})

export class FirsModule {}
