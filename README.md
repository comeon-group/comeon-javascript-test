![comeon-javascript-test-site](example.png)
# comeon-javascript-test

Applicant's test for Javascript coders.

## Assignment Overview

The assignment is to use Javascript to tie together existing HTML and data to create a minimal, working casino website.

Basic HTML, CSS, images and JSON data is provided, however, feel free to impress by changing and enhancing any of these parts for an even better experience!

Your mission is to provide the Javascript code that makes the parts work as described, below.
**Feel free to use any other openly available library for validation, templating, dependency injection, etc.**

## Assignment Criteria

We want to see how you approach and solve a problem, as well as look at code style and quality.
Do take your time to do it right, rather than fast.
Extra effort to improve on the "website" will be noted. :)

While the test is primarily focused on Javascript, by all means use or change the HTML or CSS when that makes sense. We expect the app to be functional across various devices a.k.a responsive.

Be prepared to discuss your choices and code when delivered. We would also expect you to answer on how to extend the application to include more features and functionality.

These parts needs all to be completed for the assignment to be complete:

### Login functionality

* Connect the login form to the /login ajax call.
* On valid username/password, transition to the games list screen.
* On invalid username/password, provide feedback and allow to try again.

### Log out functionality

* Connect the log out button to the /logout ajax call.
* On valid log out, transition to login screen with empty input fields.

### Games list screen

* Requires user to be logged in
* List all games from the /games ajax call.
* List categories from /categories ajax call.
* Provide functionality for filtering by typing.
* Provide functionality to filter by category.
* Make it possible to start a game by clicking on the play icon.

### Game play screen

* Requires user to be logged in
* Load the selected game via the provided API
* Provide a way to go back to the Games list screen

### Setup mock api
```javascript
npm install -g json-server
```

```javascript
json-server --watch mock/mock-data.json --port 3001 --middlewares mock/mock-api.js
```

Update: Use json-server version other than latest or alpha for example 0.17.3 or lower.

## API
There are four methods on the API: login, logout, games, and categories.

### Login
Path: /login

Will give you player information.
It is possible to login with three accounts:

```
username: rebecka
password: secret

username: eric
password: dad

username: stoffe
password: rock
```

##### Request
```javascript
fetch('http://localhost:3001/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'rebecka',
                password: 'secret'
            })
        }
);
```

##### Response
```javascript
{
	status: 'success',
	player: {
            name: 'Rebecka Awesome',
            avatar: 'images/avatar/rebecka.jpg',
            event: 'Last seen gambling on Starburst.'            
    }
}
```

### Log out
Path: /logout

Use the current player's username.

##### Request
```javascript
fetch('http://localhost:3001/logout', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'rebecka'
            })
        }
);
```

### Games and Categories
These methods are located on paths /games and /categories.

Please explore the response of these methods.
```javascript
fetch('http://localhost:3001/games', { method: 'get' });
```


## Loading a game

We have written an API for loading the games. Here's a simple example of how to load a game through our API:

```javascript
comeon.game.launch('feastingfox');
```

It basically takes a game code as an in parameter.
The div with id game-launch will be replaced with an object tag that loads the game.

## More info

- Use of React is encouraged.
- Use of [jQuery](https://jquery.com/) is discouraged. 
- External libraries used in this test: [Semantic UI](http://semantic-ui.com/), [json-server](https://github.com/typicode/json-server)

## Found a bug?

Pull requests welcome, and maybe [we have a job for you](http://jobs.comeon.com/)? :)

## How to Submit the Home Assignment
We would prefer that you push the code to a git repo and send us the link, but you could also send us your code in a compressed file in an email.

## QuickSpin Games

All of the linked games and their media files and descriptions are properties of QuickSpin AB and can be found publicly on their web site at https://quickspin.com/
