//task 1

var name = prompt("Как ваше имя?");
function Person(name) {
    this.name = name;
    console.log(this.name);
}
Person(name);


//task 2

function sumTo(n) {
    var sum = 0;
    for (var i=1; i<=n; i++) {
        sum = sum + i;
    }
    return sum;
}


/*task3
only fundamental? sorry if i misunderstood*/

function min(a,b){
    if(a < b) return a;
    if(a > b) return b;
}

//task 4

var cnstnt = 4;
var obj = {
    number: 9,
    cantDelete: cnstnt,
    getDouble: function (x) {
        var way = prompt("'set' or 'get'")
        if (way == 'set') {
            return x * 2;
        } else if (way== 'get') {
            return x / 3;
        } else {
            return false;
        }
    }
}
console.log(obj.number);
console.log(obj.cantDelete);
console.log(obj.getDouble(3));



//task 5

function Age(a, b) {
    return a.age - b.age;}
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(Age);
console.log(people[0]);
console.log(people[1]);
console.log(people[2]);


//task 6


function unique(strings) {
    return Array.from(new Set(strings));
}
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];
console.log( unique(strings) );