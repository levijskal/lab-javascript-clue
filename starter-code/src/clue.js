
var mrGreen = {
first_Name:   'Jacob',
last_Name:    'Green',
color:        'green',
description:  'He has a lot of connections',
age:          45,
image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
occupation:   'Entrepreneur'
}

var drOrchid = {
frst_name:   'Doctor',
lst_name:    'Orchid',
color:        'white',
description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
age:          26,
image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
ocupation:   'Scientist'
}

var profPlum = {
first_name:   'Victor',
last_name:    'Plum',
color:        'purple',
description:  'Billionare video game designer',
age:          22,
image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg,',
occupation:   'Designer'
}

var missScarlet = {
first_name:   'Kasandra',
last_name:    'Scarlet',
color:        'red',
description:  'She is an A-list movie star with a dark past',
age:          31,
image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
occupation:   'Actor'
}

var mrsPeacock = {
first_name:   'Eleanor',
last_name:    'Peacock',
color:        'blue',
description:  'She is from a wealthy family and uses her status and money to earn popularity',
age:          36,
image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
occupation:   'Socialité'
}

var mrMustard = {
first_name:   'Jack',
last_name:    'Mustard',
color:        'yellow',
description:  'He is a former football player who tries to get by on his former glory',
age:          62,
image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
occupation:   'Retired Football player'
}



//Weapons

var Weapons = [

{name: 'rope', weight: 10},
{name: 'knife', weight: 8},
{name: 'candlestick', weight: 2},
{name: 'dumbbell', weight: 30},
{name: 'poison', weight: 2},
{name: 'axe', weight: 15},
{name: 'bat', weight: 13},
{name: 'trophy', weight: 25},
{name: 'pistol', weight: 20}

]

//Rooms

var rooms = [
  {roomName: "Dinning Room"},
  {roomName: "Conservatory"},
  {roomName: "Kitchen"},
  {roomName: "Study"},
  {roomName: "Library"},
  {roomName: "Billiard Room"},
  {roomName: "Lounge"},
  {roomName: "Ballroom"},
  {roomName: "Hall"},
  {roomName: "Spa"},
  {roomName: "Living Room"},
  {roomName: "Observatory"},
  {roomName: "Theater"},
  {roomName: "Guest House"},
  {roomName: "Patio"},
  ]

// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];


var characters = {}

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard)

roomsArray.push(rooms)
weaponsArray.push(Weapons)

function randomSelector(items) {
    var newArray = Math.floor(Math.random()* items.length)
    return items[newArray];
  }

  function pickMistery() {
    var misteryEnvelope = [
      randomSelector(charactersArray),
      randomSelector(weaponsArray),
      randomSelector(roomsArray)
    ]
    return misteryEnvelope
  }

  function revealMistery(misteryEnvelope) {
    var simple = `${misteryEnvelope[0].first_name} ${misteryEnvelope[0].last_name} killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${misteryEnvelope[2].roomNames}!!!!`
    return simple;
  }
revealMistery();