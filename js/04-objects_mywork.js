// -------------------------------------------------------------
//
// OBJECTS
//
// -------------------------------------------------------------

// 1.1. (5:08) Destructuring:

// function Checkbox({id, label, defaultChecked}){
//     return `
//     <div>
//         <label for="${id}">${label}</label>
//         <input id="${id}" type="checkbox" ${defaultChecked ? 'checked' : ''} />
//     </div>
//     `;
// }

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = Checkbox({
//     id: 'checkbox', 
//     label: 'Subscribe for update',
//     defaultChecked: false
// });

// function Checkbox({id, label, defaultChecked}){
//     return `
//     <label for='${id}'>${label}</label>
//     <input id='${id}' type='checkbox' ${defaultChecked ? 'checked' : ''}>
//     `;
// }

// const app = document.getElementById('app');

// app.innerHTML = Checkbox({
//     id: 'checkbox',
//     label: 'Subscribe for update',
//     defaultChecked: false 
// })

// 1.2. (14:40) Destructuring:

function Avatar({src, alt: name, ...rest}){
    return `
    <img src="${src}" alt="${name}" style="border-radius: ${rest.borderRadius}" width="200px" />    
    `;
}

const appDiv = document.getElementById('app');

appDiv.innerHTML = Avatar({
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: 'Bob Jones',
    borderRadius: '10px'
})

// 1.3. (19:04) Destructuring: