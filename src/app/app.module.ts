import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from './app.module.material';

import { SidepanelService } from './services/sidepanel.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidepanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [
    SidepanelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
