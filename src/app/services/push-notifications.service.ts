import {Injectable} from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class PushNotificationsService {

    public messaging = firebase.messaging();

    getSubscription() : Promise<any> {
      if(!navigator) return;

      return navigator.serviceWorker.getRegistrations().then(registrations => {
        const firebaseSWs = registrations.filter(sw => {
          return sw.active && sw.active.scriptURL.includes('firebase-messaging')
        });

        if (firebaseSWs.length < 1) return Promise.resolve(null);

        return firebaseSWs[0].pushManager.getSubscription();
      })
    }

    cancelPermission() : Promise<any> {
      const subscripotionPr = this.getSubscription();

      return subscripotionPr.then((pushS : PushSubscription) => {
        if (!pushS) return Promise.resolve(null);

        return pushS.unsubscribe();
      })
    }

    requestPermission() : Promise<void> {
      return this.messaging.requestPermission().then(() => {
        return this.messaging.getToken();
      });
    }
}
