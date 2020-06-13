import React from 'react';
import { showLog, Person } from './util';

const programer: Person = {
  name: 'Benjamin',
  age: 45,
  abilities: {
    programming: {
      typescript: 5,
      python: 4,
    },
  },
};

const dude: Person = {
  name: 'Ben-Jammin',
  age: 25,
  abilities: {
    hiking: 3,
    ukulele: 2,
  },
};

export const Button = (props: any) => {
  showLog(programer);
  showLog(dude);
  return <button>Click Me</button>;
};
