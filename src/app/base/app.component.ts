import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {PushNotificationsService} from '../services/push-notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  public token : boolean = false;
  constructor(public afAuth: AngularFireAuth, private router: Router, public pushS : PushNotificationsService) {}

  requestPushPermissions() {
    this.pushS.requestPermission().then(console.log);
  }
  rejectPushPermissions() {}

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
