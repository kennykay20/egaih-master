import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "src/app/components/components.module";
import { HeaderComponent } from "src/app/components/header/header.component";
import { GeneralService } from "src/app/services/genService.service";
import { CacComponent } from "../cac/cac.component";
import { FirsComponent } from "../firs/firs.component";
import { TccComponent } from "../tcc/tcc.component";
import { WelcomeComponent } from "./welcome.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ComponentsModule,
  ],
  exports: [RouterModule],
  declarations: [
    WelcomeComponent,
    FirsComponent,

  ],

  providers: [
    GeneralService
  ]
})

export class WelcomeModule {}
