const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const words = content.split(' ');

const reactWordCount = words.filter((word) => word.toLowerCase().includes('react')).length;

console.log('Palabras react: ', reactWordCount);