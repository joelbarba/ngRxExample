import { UserEffects } from './ngStore/user.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer, metaReducer } from './ngStore/user.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ users: userReducer }, { metaReducers: [metaReducer] }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
