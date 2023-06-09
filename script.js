class Hero {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
    this.canFly = false;
    this.shield = false;
  }

  attacked(damage) {
    if (this.canFly) {
      let chance = Math.random();
      if (chance > 0.5) {
        console.log(this.name + " flew away.");
        damage = 0;
      }
    }
    if (this.shield) {
      damage *= 0.8;
      console.log((this.name + " defence with shield!"));
    }
    this.hp -= damage;
    console.log(
      this.name +
        " has been attacked. HP reduced by " +
        this.damage +
        " . HP remaining: " +
        this.hp +
        "."
    );
  }
}

class Billy extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.shield = true;
  }
  attack(otherHero) {
    let damage = 10;
    console.log(this.name + " attacked with damage:" + damage + ".");
    otherHero.attacked(damage);
  }
}

class Adewale extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
  }
  attack(otherHero) {
    let damage = 15;
    console.log(this.name + " attacked with damage: " + damage);
    otherHero.attacked(damage);
  }
}

class Conan extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
    this.shield = true;
  }
  attack(otherHero) {
    let damage = 20;
    console.log(this.name + " attacked with damage: " + damage);
    otherHero.attacked(damage);
  }
}

class Fight {
  constructor(hero1, hero2) {
    this.hero1 = hero1;
    this.hero2 = hero2;
    this.turn = 0;
  }
  performAttack() {
    if (this.turn === 0) {
      this.hero1.attack(this.hero2);
    } else {
      this.hero2.attack(this.hero1);
    }
  }
  changeTurn() {
    this.turn = 1 - this.turn;
  }
  findWinner() {
    if (this.hero1.hp > 0) {
      fightDetails.innerHTML += (this.hero1.name + " won <br> with " + this.hero1.hp + " HP left!");
    } else if (this.hero2.hp > 0) {
      fightDetails.innerHTML += (this.hero2.name + " won <br> with " + this.hero2.hp + " HP left!");
    } else {
      console.log("no hero left alive");
    }
  }

  go = function () {
    do {
      this.performAttack();
      this.changeTurn();
    } while (this.hero1.hp > 0 && this.hero2.hp > 0);

    this.findWinner();
  };
}

let billy = new Billy("Billy the Kid", 120);
let adewale = new Adewale("Adewale", 130);
let conan = new Conan("Conan", 110);

let epicFight = new Fight(adewale, conan);

let startFight = document.querySelector(".btn");
let heroContainer = document.querySelector(".hero-container");
let fightDetails = document.querySelector('.fight-details');

function startFightFunction() {
  heroContainer.classList.add('d-none');
  startFight.classList.add('d-none');
  fightDetails.classList.add('d-block');
  epicFight.go();
}

// function heroContainerFunction() {
  // heroContainer.style.display = "block";
// }

startFight.addEventListener("click", startFightFunction);
// startFight.addEventListener("click", heroContainerFunction);

/*
index1.html

click on START FIGHT ->
-> ascundem containerul de eroi
-> afisam un box gol (unde vom insera detaliile luptei)

click on START FIGHT -> 
-> addEventListener

syntax: element.addEventListener('click', functionName)

element: butonul START FIGHT
let startFight = document.querySelector('.btn')

startFight.addEventListener('click', startFightFunction)

function startFightFunction() {
  -> ascundem eroii

  element: containerul de eroi
  let heroesContainer = document.querySelector('.hero-container');

  heroesContainer.classList.add('display-none-class-name');
}
*/
