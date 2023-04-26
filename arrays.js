var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,

    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

/*Objetivo del ejercicio: Obtener el score total (pilotingScore, shootingScore)de 
las personas isForceUser (true) .
Para cumplir con el objetivo, se deben implementar los tres métodos explicados previamente. */

// SIN ARROW

const personnelPilotingScore = personnel
  .filter(function (person) {
    return person.isForceUser === true;
  })
  .map(function (person) {
    return person.pilotingScore;
  })
  .reduce(function (acc, score) {
    return acc + score;
  }, 0);

const personnelShootingScore = personnel
  .filter(function (person) {
    return person.isForceUser === true;
  })
  .map(function (person) {
    return person.shootingScore;
  })
  .reduce(function (acc, score) {
    return acc + score;
  }, 0);

const scoreFinal = personnelPilotingScore + personnelShootingScore;
console.log(scoreFinal);

// CON ARROW FUNCTIONS

const personnelPilotingScoreArrow = personnel
  .filter((person) => person.isForceUser === true)
  .map((person) => person.pilotingScore)
  .reduce((acc, score) => acc + score, 0);

const personnelShootingScoreArrow = personnel
  .filter((person) => person.isForceUser === true)
  .map((person) => person.shootingScore)
  .reduce((acc, score) => acc + score, 0);

const scoreFinalArrow = personnelPilotingScore + personnelShootingScore;
console.log(scoreFinalArrow);

// BONUS: ¿Cómo harías tu, tu propia función de Map o Filter?

let a = 0;
for (let index = 0; index < personnel.length; index++) {
  const person = personnel[index];
  if (person.isForceUser === true) {
    a += person.pilotingScore + person.shootingScore;
  }
}

console.log(a);
