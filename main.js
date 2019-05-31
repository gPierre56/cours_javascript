var hobbit = function(name) {
  this.name = name;
};

hobbit.prototype.courir = function() {
  console.log('spriiiiint');
};

hobbit.prototype.donnerTaille = function () {
  return 0.80;
};

hobbit.prototype.nombreDepoils = 5000;
var monObjet = new hobbit('sam');

console.log(monObjet.name);
monObjet.courir();
console.log(monObjet.nombreDepoils);

// 2eme façon
var nain = {
    name: 'gimli',
    raler : function() {
      console.log('saleté d\'elfes');
    }
};
nain.raler();
nain.taper = function functionName() {
  console.log('et ma hache !');
};

nain.taper();

const unObjetVide = {};

unObjetVide.voler = () => {
  console.log('i can fly');
};


unObjetVide.voler();
// les guillemets sont importants
var objetParse = JSON.parse('{ "name": "Hei"}');
console.log(objetParse.name);

var monSecondObjet = new hobbit('frodon');
console.log(monSecondObjet.name);

// 3eme façon : version ES6 (ECMA 6)
class Confrerie {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

  goToAdventure() {
    console.log(`let\'s go ${this.name}!`);
  }
  get monNom(){
    return this.name + '...';
  }
  set monNom(value) {
    this.name = value;
  }
}

const maConfrerie = new Confrerie("Confrérie de l'anneau", 5);
maConfrerie.goToAdventure();
maConfrerie.monNom = 'test';
console.log(maConfrerie.monNom);

// ne fonctionne pas
let maConfrerie2 = new Confrerie('marchePas', 3);

// 4e façon de créer un objet en js
var monObjetCree = Object.create(null);
monObjetCree.direBonjour = function() {
  console.log('hello');
};
monObjetCree.direBonjour();

// ex heritage
var sousHobbit = Object.create(hobbit.prototype);
sousHobbit.courir();

class Groupe extends Confrerie{
  constructor(name, size, color) {
    super(name, size);
    this.color = color;
  }

goToAdventure() {
  super.goToAdventure();
  console.log('brulons le précieux !');
  }
}
const unGroupe = new Groupe('les petits pédestres', 2, 'bleu');
unGroupe.goToAdventure();
