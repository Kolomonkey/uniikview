import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppMaterialModule} from './app-material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
