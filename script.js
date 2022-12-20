// element definitions
const nameSpanEl = document.querySelector(".name");

// the initial state for your application
const _state = {
  name: "",
};

// you can define custom "setter" and "getter" methods which are called, while 
// getting or setting values of our state
const handler = {
  set(obj, prop, value) {
    console.log(value);
    obj[prop] = value;

    // magic happens here: we call our render method
    render();
  },
};

// now we define our state
const state = new Proxy(_state, handler);

// in our render method we basically define, which element in our HTML 
// has which value in our state
function render() {
  nameSpanEl.textContent = state.name;
}

// we want to run render() initially
render();
