export interface User {
  id: number;
  fullName: string;
  alias: string;
  email: string;
  roles?: Array<string>;
}

let sampleUsers: Array<User>;

function createSampleUsers() {
  const randomNames: Array<string> = [
'Daine Mccracken',
'Krystle Seidell',
'Latasha Tafolla',
'Deanna Stansberry',
'Shanae Hallinan',
'Natalie Patricio',
'Rossie Sylvest',
'Gertude Rappa',
'Karine Spagnola',
'Rosanna Guillemette',
'Jenniffer Deaner',
'Alyce Lipe',
'Darcy Kyger',
'Karie Fancher',
'Spencer Fadden',
'Zita Zwilling',
'Loise Napoli',
'Lida Mijangos',
'Anabel Capra',
'Jannet Tusing',
'Gerda Ornelas',
'Jarrett Schuch',
'Nu Hippert',
'Shasta Duck',
'Meri Condon',
'Chara Daigle',
'Sona Austell',
'Roberto Osmond',
'Jamie Tinnin',
'Mallie Halliday',
'Marcellus Reigle',
'Dino Rather',
'Ellan Viramontes',
'Chantay Stickland',
'Elijah Ogrady',
'Tomeka Okada',
'Evelin Entrekin',
'Rogelio Hindle',
'Marquerite Stolte',
'Jacqualine League',
'Tami Carstens',
'Etsuko Queener',
'Andria Kivett',
'Helene Heckart',
'Jeanene Molnar',
'Shenna Leventhal',
'Angle Munro',
'Thomasina Stfleur',
'Nicolasa Shropshire',
'Cami Spain',
'Angela Farraj',
'Priscilla Drinkard',
'Alida Marley',
'Ayanna Mease',
'Tiffani Sillman',
'Ann Koff',
'Latoria Mazzella',
'Corinna Maurin',
'Alethea Frisby',
'Merle Dinkel',
'Angelika Correa',
'Eric Kettle',
'Edison Saling',
'Malcolm Alamo',
'Lelia Lacour',
'Alease Goldberger',
'Laure Wygant',
'Ignacia Beaty',
'Corazon Burnside',
'Marya Rizzo',
'Rhea Sparano',
'Hilario Coram',
'Lasonya Hanger',
'Annamae Veltri',
'Jerrod Lauber',
'Mia Chico',
'Paul Sherrard',
'Shizue Swanson',
'Clare Ammon',
'Ronda Tweedy',
'Noelia Greeno',
'Remona Spiller',
'Pearl Spaulding',
'Lenny Saunder',
'Keva Gargano',
'Naida Guffey',
'Asley Asencio',
'Celina Brey',
'Emory Stich',
'Ivan Lamphear',
'Lizbeth Teets',
'Shalonda Mitschke',
'Audrie Guerrero',
'Nancee Semmes',
'Leo Lauderdale',
'Kallie Burling',
'Charlsie Mcatee',
'Shamika Kaur',
'Leonora Konkel',
'Carlie Ragin'
];

  sampleUsers = []

  let id: number = 1;

  for (let name of randomNames) {
    const names: Array<string> = name.split(' ');
    let randomNumber: String = '' + Math.floor(Math.random() * 111111);
    while (randomNumber.length < 7) {
      randomNumber = '0' + randomNumber;
    }
    const alias = 'u' + randomNumber;
    const email = (names[0].slice(0, 1) + names[1]).toLowerCase() + '@company.org';

    sampleUsers.push(<User> {alias, email, fullName: name, id: id++});
  }
}

createSampleUsers();

export class UserService {
  get(id: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(sampleUsers.find(x => x.id === id));
       }, 200)
      }
    )
  }
}
