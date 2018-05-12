import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';

import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import {routes} from './routes';

import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';

import {LoginComponent} from './login/login.component';
import {AuthService} from './services/auth.service';
import {UserService} from './services/users.service';
import {ListService} from './services/lists.service';
import {TodoService} from './services/todos.service';
import {PushNotificationsService} from './services/push-notifications.service';

import {AuthGuard} from './guards/auth.guard.service';

import {ListCreatorComponent} from './lists/creator/list.creator.component';
import {ListComponent} from './lists/list.component';
import {TodoCreatorComponent} from './todos/creator/todos.creator.component';
import {TodoCardComponent} from './todos/card/todo.card.component';

import { AppComponent } from './base/app.component';
import { HomeComponent } from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListCreatorComponent,
    ListComponent,
    TodoCreatorComponent,
    TodoCardComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot(routes),
    TransferHttpCacheModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
  ],
  providers: [
    AuthService,
    AngularFireAuth,
    AuthGuard,
    AngularFirestore,
    UserService,
    ListService,
    TodoService,
    PushNotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
