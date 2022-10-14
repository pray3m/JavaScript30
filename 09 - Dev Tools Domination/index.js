//Data we'll work with
const dogs = [{
    name: 'Zulie',
    age: 2
},{
    name: 'Jackson',
    age: 8
}];


function makeGreen(){
    const p=document.querySelector('p');
    p.style.color='#BADA55';
    p.style.fontSize='20px';
}

// Regular console.log()
console.log(" Hello ");

// Interpolated
console.log("I am a %s string!",'👻');
console.log(`Hello i am a ${'🍾'} string!`);

// Styled
console.log('%c I am some great text.','font-size:50px;background:red;');

// Warning
console.warn('Warning!');

// Error
console.error('ERROR !');

// Info 
console.info('I like food');

//Table
console.table(dogs);

//Testing
const p=document.querySelector('p');
console.assert(p.classList.contains('ouch'),'That is wrong!');


// Viewing DOM Elements
console.log(p);
console.dir(p);

// Counting
console.count('Hi');
console.count('Bye');
console.count('Hi');
console.count('Hi');
console.count('Bye');
console.count('Bye');
console.count('Hi');
console.count('Hi');
console.count('Bye');
console.count('Bye');
console.count('Bye');
console.count('Hi');
console.count('Bye');

// Grouping Together
dogs.forEach(dog=> {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7 } years old`);
    console.groupEnd(`${dog.name}`);
})

//Timing
console.time('fetching data....');
fetch('https://api.github.com/users/anisssha')
    .then(data => data.json())
    .then(data=> {
        console.timeEnd('fetching data....');
        console.log(data);
    });