import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FirsComponent } from './pages/firs/firs.component';
import { TccComponent } from './pages/tcc/tcc.component';
import { CacComponent } from './pages/cac/cac.component';
import { WelcomeRoutingModule } from './pages/welcome/welcome-routing.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { GeneralService } from './services/genService.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    GeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
