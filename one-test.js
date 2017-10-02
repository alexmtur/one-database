import {Element as PolymerElement}
    from "./node_modules/@polymer/polymer/polymer-element.js"
import {OneDatabase} from "./one-database.js"

export class OneTest extends OneDatabase {
  static get template() {
    return `
      <b>Component new in {{user}} shadow dom !</b>
      <input type="text" value="{{user::change}}" placeholder="User me a name">
      <input type="text" value="{{mike::change}}" placeholder="Mike me a name">
      <input type="text" value="{{peter::change}}" placeholder="Peter me a name">
      <b> Name: {{mike}} </b>
      <p>Can I see the date?: {{count}}</p>
      <p>User: {{user}}, Mike: {{mike}} and Peter:{{peter}}</p>
      <slot></slot>
    `
  }

  constructor() {
    super();
  }

   static get properties() {
    // console.log('b')
    return {
      userPath: {
        type: String,
        value: 'name'
      },
      user: {
        type: String,
        value: 'Alex',
        
        oneDatabase: this.userPath
        //reference: onedatabase
      },
      isHappy: Boolean,
      mike: {
        type: String,
        value: 'Mikyyy',
        oneDatabase: 'mike' //think of a better way to put the path so it can be conf. externally
      },
      peter: {
        type: String,
        value: 'Mikyyy',
        oneDatabase: 'peter',
        // readOnly: true
      },
      count: {
        type: Number,
        readOnly: true,
        notify: true,
        value: new Date(),
        comeOn: 'my mexican brotheeer!!'
      }
      // test: {
      //   value: new OneDatabase(this.testPath, )
      // }
    }
  }

}

customElements.define('one-test', OneTest);