console.log('Hello World');
//let name = 'Lamia';
//console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a space or hyphen (-)
// Are case-sensitive

//let firstName = 'Lamia';
let lastName = 'Ahmed';

//console.log(firstName + " " + lastName);

const interestRate = 0.3;
//nterestRate = 1;
console.log(interestRate);

// Primitives/Value Types
let name = 'Lamia' // String Literal
let age = 23; // Number Literal
let isApproved = false; // Boolean Literal
let firstName = undefined;
let selectedColor = null;

// Reference Types are objects, array and function
let person = {
    name:'Lamia',
    age: 23
};

// Dot Notation
person.name = 'Mizan';

// Bracket Notation
person['name'] = 'Nabila';
let selection = 'name';
person[selection] = 'Nusrat';

console.log(person.name);

// Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors.length);

// Functions
function greet(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName);
}

greet('Lamia', 'Ahmed');
greet('Mizanur', 'Rahman');

// Calculate a value
function square(number) {
    return number * number;
}

console.log(square(2));

// Promises
let p = new Promise((resolve, reject) => {
    let sum = 1 + 1;
    if (sum == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p.then ((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})

// Callback
const userLeft = false;
const userWatchingCatMeme = false;
/*
function watchTutorialCallback(Callback,errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        })
    } else {
        Callback('Thumbs up and Subscribe')
    }
}

watchTutorialCallback((message) => {
    console.log('Success: ' + message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})
*/
// Converting Callback into Promises

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })    
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})

const recordVideoOne = new Promise ((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise ((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise ((resolve, reject) => {
    resolve('Video 3 Recorded')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) =>{
    console.log(messages)
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) =>{
    console.log(message)
})

/*
// Callback
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPosts(post, Callback) {
    setTimeout(() => {
        posts.push(post);
        Callback();
    }, 2000);
}

createPosts({ title: 'Post Three', body: 'This is post three' }, getPosts);
*/

// Promises
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPosts(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve('Succes');
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });    
}

/*
createPosts({ title: 'Post Three', body: 'This is post three' })
    .then(getPosts)
    .catch(error => console.log(error));
*/

// Async / Await
async function init() {
    await createPosts({ title: 'Post Three', body: 'This is post three' });

    getPosts();
}

init();

// Async / Await with fetch

async function fetchUsers() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await result.json();

    console.log(data);
}

fetchUsers();

// Promise.all
const promise1 = Promise.resolve('Hello Lamia');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'goodby'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())

Promise.all([
    promise1,
    promise2,
    promise3,
    promise4
]).then((messages) =>{
    console.log(messages)
})