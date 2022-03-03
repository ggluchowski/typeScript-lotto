import inquirer from 'inquirer';

const chosenNumbers: Array<number> = [];
const randomNumbers: Array<number> = [];

const randomNewNumber = (): number => {
  const randomNumber: number = Math.floor(Math.random() * 49 + 1);

  return randomNumber;
};

const validateInput = (text: string): boolean => {
  const numberChosen: number = parseInt(text);

  if (numberChosen && numberChosen >= 1 && numberChosen <= 49) {

    for (const item of chosenNumbers) {
      if (numberChosen === item) return false;
    }
    return true;
  }
  else return false;
};

const validateRandomNumber = (number: number): boolean => {
  for (const item of randomNumbers) {
    if (number === item) return false;
  }
  return true;
};

do {
  const number: number = randomNewNumber();
  if (validateRandomNumber(number)) {
    randomNumbers.push(number);
  }
} while (randomNumbers.length < 6);


const startApp = async (): Promise<void> => {
  do {
    const result = await inquirer.prompt([{
      name: 'number',
      type: 'input',
      message: 'Podaj liczbe: ',
    }]);

    if (validateInput(result.number)) {
      chosenNumbers.push(parseInt(result.number));
    }
  } while (chosenNumbers.length < 6);

  let count = 0;

  for (const item of chosenNumbers) {
    for (const itemRandom of randomNumbers) {
      if(item === itemRandom){
        count++;
        break;
      }
    }
  }
  console.log('Liczby wybrane: ', chosenNumbers);
  console.log('Liczby wylosowane: ', randomNumbers);
  console.log('Trafiono ' + count + ' liczbę/y');

};

startApp();