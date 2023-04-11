import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AuthModule} from 'src/app/auth/auth.module'
import { StoreModule } from '@ngrx/store'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule,StoreModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}