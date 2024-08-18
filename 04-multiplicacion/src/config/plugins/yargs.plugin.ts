import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

export const yarg = yargs(process.argv)
.option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe:'Es la base de la tabla de multiplicar'
}).option('l',{
    alias:'limit',
    type:'number',
    default:10,
    describe:'Multiplication table limit'
}).option('s',{
    alias:'show',
    type:'boolean',
    default:false,
    describe:'Show the multiplication table in console'
})
.check((argv, options) => {
    if(argv.b && isNaN(argv.b)){
        throw 'La base tiene que ser un número';
    }
    if(argv.b < 1){
        throw 'La base tiene que ser mayor a 0';
    }
    return true;    
})
.parseSync();