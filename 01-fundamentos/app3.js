'use strict';
const fs = require('fs');

const data = fs.readFileSync('README.md','utf-8');

const reactCount = data.trim().split(/\s+/)
  .filter(word=>/React/ig.test(word)).flatMap(line=>line.match(/React/ig) || []).length;

const reactCount2 = data.match(/react/ig||[]).length


console.log('Palabras;',reactCount,reactCount2);
