
export class OneTest extends HTMLElement {
  static milf(val) {
      this.setAttribute('name', val);
  }
   
constructor() {
    super(); // always call super() first in the ctor.

    // Attach a shadow root to the element.
    let shadowRoot = this.attachShadow({mode: 'open'});
    this.database = firebase.database();
    // let color = this.database.ref('/coddlor');
    let col = firebase.database().ref('color');
    col.on('value', (snapshot) => {
      console.log(snapshot)
      this.setAttribute('color', snapshot);
      console.log(this.getAttribute('color'))
    });

  // this.milf = function() {
  //   console.log('fuck')
  // }
    
   let text = `
      <style>:host {background-color: ${this.getAttribute('name')}}</style> <!-- look ma, scoped styles -->
      <b>Im in ${this.getAttribute('name')} shadow dom!</b>
      <input type="text" value="${this.getAttribute('name')}" placeholder="input some text">
      <slot></slot>
      <p>My fav color is: ${this.getAttribute('color')}</p>
      <input id="fname" type="text" name="txt" value="Hello">
    `;

    console.log(text)

    shadowRoot.innerHTML = text;
    // this.getElementById("fname").addEventListener("change", myFunction);

  }

  myFunction(val) {
    alert("The input value has changed. The new value is: " + val);
}

  // function sell() {

  // }

//   function createWindow(srcdoc) {
//   let p = new Promise(resolve => {
//     let f = document.createElement('iframe');
//     f.srcdoc = srcdoc || '';
//     f.onload = e => {
//       resolve(f.contentWindow);
//     };
//     document.body.appendChild(f);
//   });
//   return p;
// }

 static milf(val) {
  console.log('fuck')
      this.setAttribute('name', val);
  }
   

  // Monitor the 'name' attribute for changes.
  // static get observedAttributes() {return ['name']; }

  // Respond to attribute changes.
  // attributeChangedCallback(attr, oldValue, newValue) {
  //   if (attr == 'name') {
  //     this.textContent = `Hello, ${newValue}`;
  //   }
  // }
}

// Define the new element
customElements.define('one-test', OneTest);