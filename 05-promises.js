// -------------------------------------------------------------
//
// ПРОМИСЫ
//
// -------------------------------------------------------------

// const appDiv = document.getElementById('app');

// function getPeople() {
// 	fetch('https://swapi.dev/api/people/')
// 		.then((response) =>  response.json())
// 		.then((data) => {
// 			console.log(data);
// 			const primaryCharacters = data.count;
// 			document.querySelector('#characters').textContent = primaryCharacters;
// 		})

// }

// getPeople();

// appDiv.innerHTML = `
//   <p>⭐️ There are <strong id="characters">--</strong> primary characters in Star Wars</p>
// `;

// ----------------------------------------------

// const appDiv = document.getElementById('app');

// function getPeople() {
// 	fetch('https://swapi.dev/api/people111/')
// 		.then((response) => {
// 			console.log(response);

// 			if (!response.ok) {
// 				throw new Error("Error making request")
// 			}

// 			return response.json();
// 		})
// 		.then((data) => {
// 			console.log(data);
// 			document.querySelector('#characters').textContent = data.count;

// 		})
// 		.catch((error) => {
// 			console.log(error);
// 			document.querySelector('#text').textContent = "Could not get data"
// 		});
// }

// getPeople();

// appDiv.innerHTML = `
//   <p id="text">⭐️ There are <strong id="characters">--</strong> primary characters in Star Wars</p>
// `;

// ---------------------------------------------------------

// const appDiv = document.getElementById('app');

// function getPeople() {
// 	fetch('https://swapi.dev/api/people/')
// 		.then((response) => {
// 			if (!response.ok) {
// 				throw Error('Unsuccessful response');
// 			}
// 			return response.json();
// 		})
// 		.then((data) => {
// 			console.log(data);
// 			document.getElementById('characters').textContent = data.count;
// 		})
// 		.catch((err) => {
// 			console.log('Error fetching data: ', err);
// 			document.querySelector('p').innerHTML = 'Error fetching data';
// 		}).finally(()=>{
// 			document.querySelector('#loading').remove();
// 		});
// }

// getPeople();

// appDiv.innerHTML = `
//   <span id="loading">Loading...</span>
//   <p>⭐️ There are <strong id="characters">--</strong> primary characters in Star Wars</p>
// `;

// -----------------------------------------------------------------

// const appDiv = document.getElementById('app');

// async function getStarships() {

// 	const response = await fetch('https://swapi.dev/api/starships/')
// 	const data = await response.json();

// 	console.log(data);
// 	document.getElementById('starships').textContent = data.count;
// }

// getStarships();

// appDiv.innerHTML = `
//   <p>🛳️ There are <strong id="starships">--</strong> starships in Star Wars</p>
// `;

// --------------------------------------------------------

// const appDiv = document.getElementById('app');

// // https://swapi.dev/api/films
// async function getFilms() {
// 	try {
// 		const response = await fetch('https://swapi.dev/api/films');
// 		if (!response.ok) throw new Error('Error making request');
// 		const data = await response.json();
// 		document.querySelector('#films').textContent = data.count;
// 	} catch (error) {
// 		console.log(error);
// 		document.querySelector('#text').textContent = error;
// 	} finally {
// 		document.querySelector('#loading').remove();
// 	}
// }

// getFilms();

// appDiv.innerHTML = `
//   <span id="loading">Loading...</span>
//   <p id="text">🍿 There are <strong id="films">--</strong>  Star Wars films</p>
// `;
