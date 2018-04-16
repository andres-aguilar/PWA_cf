import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import {AuthService} from './auth.service';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

import * as firebase from 'firebase/app';

import {IList} from '../structures/lists';

@Injectable()
export class ListService {
  public uid: string;
  public listCollection: AngularFirestoreCollection<IList>;
  public lists : Observable<IList[]>;

  constructor(public afs: AngularFirestore, private auth: AuthService) {
    this.auth.getUser().subscribe(user => {
      this.uid = user.uid;

      if (this.uid) { this.setCollection(); }
    });
  }

  setCollection() {
    this.listCollection = this.afs.collection('users').doc(this.uid).collection<IList>('lists');

    this.lists = this.listCollection.snapshotChanges().map(actions => {
      return actions.map(item => {
        const data = item.payload.doc.data() as IList;
        const id = item.payload.doc.id;

        return {...data, id};
      });
    });
  }

  add(list: IList): Promise<any> {
    if (!this.listCollection) { throw Error('Set a collection before trying to add a new document'); }

    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    list.createdAt = createdAt;

    return this.listCollection.add(list);
  }
}
