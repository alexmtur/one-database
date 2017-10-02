

Firebase.bind(this.var, 'users/var', {offline:true, }); //if it changes gets updated. Read and write variants. Think what to do if the variable is an array, maybe directly push.
//Bind is two way, read and write one way.

Firebase.push(this.var, 'users/path');

export class FirebaseObject {
    constructor() {
        super();

    }
    config
    path
    static method? push() //get 
    update()
    toArray()
    sync, store, + config (path, online-offiline, instances, ..)
}

put options like offline or online.
choose the max number of ocurrences offline and online.

<firebase-document
            id="query"
            path="/chats/[[chatId]]"
            data="{{chat}}">
        </firebase-document>
        <app-indexeddb-mirror
            session="[[user.uid]]"
            key="{{chatId}}"
            data="{{chat}}"
            persisted-data="{{offlineChat}}">
        </app-indexeddb-mirror>