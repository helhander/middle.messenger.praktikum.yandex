import {sum} from './modules/sum';

const root = document.querySelector('#root');
console.log(sum(6, -1).toString());
root.textContent = sum(6, -1).toString(); 
