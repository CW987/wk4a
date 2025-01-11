export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
// This app's purpose is to the handle the data from the form

// 1. select the form on the DOM
// 
// 2. Build an event that handles the data from the form
// event handler
// event listener


fetch("server url", { //!Server url should be replaced with your render server url
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({ formValues })
});

// The same way as we fetch the POST route, we also need to fetch the GET route, so we can display the data from the database on the DOM