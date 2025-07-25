// -------------------------------------------------------------
//
// PROMISES
//
// -------------------------------------------------------------

// 5.1. (53:15) (Getting data from a remote server API):

// #1:

// const appDiv = document.getElementById('app')

// function getPeople(){
//     fetch('https://jsonplaceholder.typicode.com/todos/11')
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             const userTitle = data.title;
//             document.querySelector('#text').textContent = userTitle;
//         })
// }

// getPeople()

// appDiv.innerHTML = `<p>* This text: "<strong id="text"></strong>" was obtained from the site jsonplaceholder.</p>`

// --------------------------------------------

// #2:

// const appDiv = document.getElementById('app');

// function getText(){
//     fetch('https://jsonplaceholder.typicode.com/todos/56')
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             const toText = data.title;
//             document.getElementById('text').textContent = toText;
//         })
// }

// getText()

// appDiv.innerHTML = `<p>This text: "<strong id="text"></strong>" was imported from the jsonplaceholder site.</p>`

// -----------------------------------------

// #3:

// const appDiv = document.getElementById('app')

// function toText(){
//     fetch('https://jsonplaceholder.typicode.com/todos/66')
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             const thisText = data.title;
//             document.getElementById('mytext').textContent = thisText;
//         })
// }

// toText()

// function myText(){
//     return `<p>This text: "<strong id="mytext"></strong>" was imported from the jsonplaceholder site.</p>`
// }

// appDiv.innerHTML = myText();

//==================================================

// 5.2. (1:02:03) (Working with errors):

// const appDiv = document.getElementById('app')

// function getText(){
//     fetch('https://jsonplaceholder.typicode.com/todos/11t')
//         .then((response) => {
//             console.log(response)
            
//             if(!response.ok){
//                 throw new Error("Error making request")
//             }

//             return response.json();

//         })
//         .then((data) => {
//             console.log(data);
//             document.querySelector('#text').textContent = data.title;
//         })
//         .catch((error) => {
//             console.log(error);
//             document.querySelector('#textError').textContent = 'Could not get data';
//         })
// }

// getText()

// appDiv.innerHTML = `<p id="textError">This text: <strong id="text"></strong> from the other site.</p>`

//==================================================

// 5.3. (1:10:10) (method finally()):

// const appDiv = document.getElementById('app')

// function getText(){
//     fetch('https://jsonplaceholder.typicode.com/todos/30')
//         .then(response => {
//             if(!response.ok){
//                 throw new Error('Unsuccessful response');
//             }
//             return response.json();
//         })
//         .then(json => {
//             console.log(json);
//             document.getElementById('text').textContent = json.title;
//         })
//         .catch(err => {
//             console.log('Error fetching data: ', err);
//             document.querySelector('p').textContent = 'Error fetching data';
//         }).finally(() => {
//             document.querySelector('#loading').remove();
//         })
// }

// getText()

// appDiv.innerHTML = `
//     <span id="loading">Loading...</span>
//     <p>* There are <strong id="text">--</strong> other parts. </p>
// `;

// const appDiv = document.getElementById('app');

// function getText(){
//     fetch('https://jsonplaceholder.typicode.com/todos/10')
//         .then(response => {
//             if(!response.ok){
//                 throw new Error('Unsuccessfully response')
//             }
//             return response.json();
//         })
//         .then(json => {
//             console.log(json);
//             document.querySelector('#text').textContent = json.title;
//         })
//         .catch(err => {
//             console.log('Error fetching data: ', err);
//             document.querySelector('p').textContent = 'Error fetching data';
//         }).finally(() => {
//             document.querySelector('#loading').remove()
//         })        
// }

// getText()

// appDiv.innerHTML = `
//     <span id="loading">Loading...</span>
//     <p>*This text <strong id="text"></strong> other any text.</p>
// `;

//==================================================

// 5.4. (1:16:10) (async/await):

// const appDiv = document.getElementById('app');

// async function getText() {    
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/10');
//     const data = await response.json();
//     console.log(data);
//     document.querySelector('#toText').textContent = data.title;
// }

// getText()

// appDiv.innerHTML = `
//     <p>*Our text: <strong id='toText'></strong> is the something text.</p>
// `;

//==================================================

// 5.5. (1:23:05) (async/await с catch и finally):

// const appDiv = document.getElementById('app');

// async function getText() {
//         try {
//                 const response = await fetch('https://jsonplaceholder.typicode.com/todos/10');
//                 if(!response.ok) throw new Error('Error making request');                
//                 const data = await response.json();
//                 console.log(data);
//                 document.querySelector('#text').textContent = data.title;
//         } catch (error){
//                 console.log(error);
//                 document.querySelector('p').textContent = 'Unsuccessfully response';
//         } finally {
//                 document.querySelector('#loading').remove(); 
//         }
// }

// getText()

// appDiv.innerHTML = `
//         <span id='loading'>Loading...</span>
//         <p>The text: <strong id='text'>--</strong> other code.</p>
// `;