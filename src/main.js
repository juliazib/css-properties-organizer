import readLineSync from 'readline-sync';

const properties = [];

while (true) {
   const userInput = readLineSync.question('Digite uma propriedade CSS: ')

   if (userInput.toLowerCase() === 'sair') {
    break
   }
   properties.push(userInput)
   properties.sort()
};

if(properties.length > 0) {
    console.log(properties)
};