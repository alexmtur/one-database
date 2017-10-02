import {Element as PolymerElement}
    from "./node_modules/@polymer/polymer/polymer-element.js"
import {datal} from "./config.js"

export class OneDatabase extends PolymerElement {
// export class OneDatabase extends HTMLElement {
  // constructor() {
  //   super();
  //   // alert(data);
  //   // console.log('here')
  //     // Set the configuration for your app
  // // TODO: Replace with your project's config object
  // // this.config = {
  // //   apiKey: "apiKey",
  // //   authDomain: "projectId.firebaseapp.com",
  // //   databaseURL: "https://databaseName.firebaseio.com",
  // //   storageBucket: "bucket.appspot.com"
  // // };
  // // firebase.initializeApp(config);

  // // Get a reference to the database servic
  // // e
  // // this.database = firebase.database();
  // // let color = this.database.ref('color');
  // // console.log(color);
  // }
  // static get
   // Define a string template instead of a `<template>` element.
  static get template() {
    return `<style>:host {background-color: {{color}}</style> <!-- look ma, scoped styles -->
      <b>Im in {{color}} shadow dom!</b>
      <input type="text" value="{{color::change}}" placeholder="input some text">
      <slot></slot>`
  }

  constructor() {
    super();
    console.log(datal);
    this.database = firebase.database();
    //There can be global variables, or local that may only apply to one view and are not brought all the time in memory, very expensive.
    //Variable para configurar que base de datos
    let col = firebase.database().ref('color');
    col.on('value', (snapshot) => {
      console.log(snapshot)
      this.color = snapshot.val();
    });
    //Check if its read or readwrite to add this.
    //Check it the modification is an array and is pushing. On push only add new object DONT do set, very inefficient
    this._observedPropertyChanged = (newVal) => { 
      if(!newVal) return;
      //check if new val has the properties defined by the config. Also check the number of instances local and globally.
      firebase.database().ref('color').set(newVal);
     };
    this._createPropertyObserver('color', '_observedPropertyChanged', true);
  }

  // properties, observers, etc. are identical to 2.x
  static get properties() {

    // name: {
    //   Type: String
    // },
    //Puth always namepath to change the path just in case.
    // namePath: {
    //   Type: String,
    //   value: 'name'
    // }
  }
}

customElements.define('one-database', OneDatabase);

// customElements.define('one-database', OneDatabase);