// // const {emailTemplate} = require('./js-foundation/01-template');
// // require('./js-foundation/02-destructuring')
// // console.log(emailTemplate);
// const {getUserById} = require('./js-foundation/03-callbacks');
// // console.log('hello world');

// const userId=2; 
// getUserById(userId,(error,user)=>{
//     if(error ){
//         throw new Error('User not found with id',userId);
//     }
//     console.log(user);
// });


import {getPokemonById} from './js-foundation/06-promises';

const {buildLogger} = require('./plugins/logger.plugin');

const logger = buildLogger('app.js');
getPokemonById(1).then((pokemon) => {
    logger.log(`Pokemon name: ${pokemon}`);
});

logger.log('alo');
logger.error('loi');