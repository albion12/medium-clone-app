import {BrowserModule} from '@angular/platform-browser'
import {NgModule, isDevMode} from '@angular/core'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AuthModule} from 'src/app/auth/auth.module'
import { StoreModule } from '@ngrx/store'
import { AuthService } from './auth/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule, 
    AuthModule,
    StoreModule.forRoot({}),  
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
    logOnly: !isDevMode(), // Restrict extension to log-only mode
    autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
    traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
  }),],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}