"use strict";
// // const {emailTemplate} = require('./js-foundation/01-template');
// // require('./js-foundation/02-destructuring')
// // console.log(emailTemplate);
// const {getUserById} = require('./js-foundation/03-callbacks');
// // console.log('hello world');
Object.defineProperty(exports, "__esModule", { value: true });
// const userId=2; 
// getUserById(userId,(error,user)=>{
//     if(error ){
//         throw new Error('User not found with id',userId);
//     }
//     console.log(user);
// });
const _06_promises_1 = require("./js-foundation/06-promises");
const { buildLogger } = require('./plugins/logger.plugin');
const logger = buildLogger('app.js');
(0, _06_promises_1.getPokemonById)(1).then((pokemon) => {
    logger.log(`Pokemon name: ${pokemon}`);
});
logger.log('alo');
logger.error('loi');
