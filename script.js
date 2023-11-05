class Human{
  constructor(name, gender){
    this.name = name;
    this.gender = gender;
  }
}

class Apartment{
  constructor(){
    this.residents = [];
  }

   addResidents(person){
    this.residents.push(person);
   }
}

class Home{
  constructor(maxApartments){
    this.maxApartments = maxApartments;
    this.apartment = [];
  }

  addApartment(apartmentExemplar){
    if (this.apartment.length < this.maxApartments) {
      this.apartment.push(apartmentExemplar);
    } else {
      console.log('Не удалось добавить апартаменты');
    }
  }
}

const firstHuman = new Human("Mark", "Male")
const secondHuman = new Human("Sofia", "Female")
const thirdHuman = new Human("Ivan", "Male")

const firstApartment = new Apartment()
const secondApartment = new Apartment()

firstApartment.addResidents(firstHuman);
firstApartment.addResidents(secondHuman);
secondApartment.addResidents(thirdHuman);

const home = new Home(5);

home.addApartment(firstApartment);
home.addApartment(secondApartment);

console.log("Жители первой квартиры:", firstApartment.residents);
console.log("Жители второй квартиры:", secondApartment.residents);
console.log("Квартир в доме:", home.apartment);