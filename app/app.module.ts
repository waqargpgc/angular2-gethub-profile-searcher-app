import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { FormsModule }      from '@angular/forms';
import { AppComponent }  from './app.component';
import {profileComponent} from './components/profile.component';

@NgModule({
  imports: [ BrowserModule,HttpModule,FormsModule ],
  declarations: [ AppComponent,profileComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
