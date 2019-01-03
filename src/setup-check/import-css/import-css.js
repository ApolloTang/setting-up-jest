import style from './import-css.css'

const text ='This text is style by ".some-class-in-import-css", and its color is red'
const container = document.createElement('div');
const textNode = document.createTextNode(text);
container.className='some-class-in-import-css';
container.appendChild(textNode)
document.body.append(container)

