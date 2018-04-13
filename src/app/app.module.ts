import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import {routes} from './routes';

import {LoginComponent} from './login/login.component';
import {AuthService} from './services/auth.service';
import {UserService} from './services/users.service';
import {ListService} from './services/lists.service';
import {AuthGuard} from './guards/auth.guard.service';

import {ListCreatorComponent} from './lists/creator/list.creator.component';

import { AppComponent } from './base/app.component';
import { HomeComponent } from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListCreatorComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot(routes),
    TransferHttpCacheModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [AuthService, AngularFireAuth, AuthGuard, AngularFirestore, UserService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
