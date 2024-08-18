import { v4 as uuid } from '../plugins/uuid.plugin';


interface Person {
    id: string;
    name: string;
    birthdate: string;
}

const buildPerson= ({name,birthdate}:Person ) =>{
    return {
        id:uuid(),
         name:name,
         birthdate:birthdate   
    };
}

const obj ={name:'nombre',birthdate:'0101',id:''}
const nombre = buildPerson(obj);
console.log(nombre);