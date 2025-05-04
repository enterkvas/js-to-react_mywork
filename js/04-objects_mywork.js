// -------------------------------------------------------------
//
// OBJECTS
//
// -------------------------------------------------------------

// 1.1. (5:08) Destructuring на основе использования свойств(ключей) объекта в качестве переменных, передаваемых в виде параметров (в фигрурных скобках) в функцию-компонент:

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

// -------------------------------------------------

// 1.2. (14:40) Destructuring с использованием оператора rest:

// function Avatar({src, alt: name, ...rest}){
//     return `
//     <img src="${src}" alt="${name}" style="border-radius: ${rest.borderRadius}; width: 200px;" />    
//     `;
// }

// const appDiv = document.getElementById('app');

// appDiv.innerHTML = Avatar({
//     src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     alt: 'Bob Jones',
//     borderRadius: '10px'
// });

// -------------------------------------------------

// 1.3. (19:04) Destructuring с использованием параметров "по умолчанию" (суть: если в объекте отсутвует какое-либо (или все сразу) из описанных свойств, то всё равно будут на странице выводиться значения "по умолчанию", переданные в параметрах объекта):

function Message({text="No message", author='Someone', time=''}){
    return `
    <header class="message">
        <strong>${author}</strong> commented ${time}
    </header>
    <p>${text}</p>
    `;
}

const appDiv = document.getElementById('app');

appDiv.innerHTML = Message({
    text: 'Called client, they reassured me the invoice would be paid by the 25th.',
    author: 'Chelsea Hagon',
    time: '3d ago'
});

// -------------------------------------------------

// 1.4. (23:33) 