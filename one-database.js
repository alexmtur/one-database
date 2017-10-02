import {Element as PolymerElement} from "./node_modules/@polymer/polymer/polymer-element.js"
import {datal} from "./config.js"

export class OneDatabase extends PolymerElement {

    constructor(context) {

        super();

        let properties = this.constructor.properties;
        this.prop = properties;
        this.database = firebase.database();

        Object.keys(properties).forEach( (key) => {
            console.log(properties[key])

            //Retrieve value for one-database objects
            let path = properties[key].oneDatabase;
            if(!path) return; //maybe rename property to path
            properties[key].controller = this.database.ref(path);
            properties[key].controller.on('value', (snapshot) => {
                console.log(key)
                this.set(key, snapshot.val()); //Equivalent: this.setAttribute(key, snapshot.val());
                // console.log(key + ': ' + snapshot.val());
            });

            //Skip two way data binding for read only
            // if(properties[key].readonly) return;
            // this.writeDatabase(key);
            // this prop = properties;
            //Change prototype: https://stackoverflow.com/questions/32496825/proper-way-to-dynamically-add-functions-to-es6-classes
            // OneDatabase.prototype[key + 'Changed'] = (newVal, oldVal) => { 
            this[key + 'Changed'] = (newVal, oldVal) => { 
                // console.log(arguments)
                console.log(this.att)
                if(!newVal) return;
                //check if new val has the properties defined by the config. Also check the number of instances local and globally.
                // console.log(path)
                //TODO: Put data validations!!!!!!!!!!!!!
                this.database.ref(path).set(newVal);
                // console.log(oldVal)
            };
            this._createPropertyObserver(key, (key + 'Changed'), true);
            
            // console.log(name)
            //If readonly = true;
        });
        

        //TODO: global vars, offline variables and actions.
        //Define set, push, remove, splice operations.

    }
    readDatabase(key) {

    }
    writeDatabase(key) {
        let k = key;
        this._observedPropertyChanged = (newVal, oldVal) => { 
            console.log(arguments)
            if(!newVal) return;
            //check if new val has the properties defined by the config. Also check the number of instances local and globally.
            // console.log(path)
            // this.database.ref(path).set(newVal);
            // console.log(oldVal)
        };
        this._createPropertyObserver(key, ('_observedPropertyChanged'), true);
    }

}



customElements.define('one-database', OneDatabase);