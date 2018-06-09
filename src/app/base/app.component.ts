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
  public token: any;
  public showPanel = false;

  constructor(public afAuth: AngularFireAuth, private router: Router, public pushS : PushNotificationsService) {}

  ngOnInit() {
    this.token = this.pushS.getSubscription();
    this.pushS.watchMessages();
  }

  setToken() {
    this.token = this.pushS.getSubscription();
  }

  requestPushPermissions() {
    this.pushS.requestPermission().then(() => this.setToken()).catch(console.log);
    this.toggleNotificationWindow();
  }
  cancelPermission() {
    this.pushS.cancelPermission().then(() => this.setToken()).catch(console.log);
    this.toggleNotificationWindow();
  }

  toggleNotificationWindow() {
    this.showPanel = !this.showPanel;
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
