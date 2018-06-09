import {Injectable} from '@angular/core';

import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/rx';

import * as firebase from 'firebase';

@Injectable()
export class PushNotificationsService {

    public messaging = firebase.messaging();
    public sub: Subject<any> = new Subject();
    public notification: Observable<any> = this.sub.asObservable();

    constructor() {
      this.messaging.getToken().then(console.log);
    }

    watchMessages() {
      this.messaging.onMessage((notification) => {
        console.log(notification);
      });
    }

    getSubscription(): Promise<any> {
      if (!navigator) { return; }

      return navigator.serviceWorker.getRegistrations().then(registrations => {
        const firebaseSWs = registrations.filter(sw => {
          return sw.active && sw.active.scriptURL.includes('firebase-messaging');
        });

        if (firebaseSWs.length < 1) { return Promise.resolve(null); }

        return firebaseSWs[0].pushManager.getSubscription();
      });
    }

    cancelPermission(): Promise<any> {
      const subscriptionPr = this.getSubscription();

      return subscriptionPr.then((pushS: PushSubscription) => {
        if (!pushS) { return Promise.resolve(null); }

        return pushS.unsubscribe();
      });
    }

    requestPermission(): Promise<void> {
      return this.messaging.requestPermission().then(() => {
        return this.messaging.getToken();
      });
    }
}
