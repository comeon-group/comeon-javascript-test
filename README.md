![comeon-javascript-test-site](http://b5fa2dae67bf7ee0b0e5-e0d56d540e31d5f2f9430984d20d712d.r41.cf3.rackcdn.com/comeon-javascript-test_2.PNG)
# comeon-javascript-test

Applicant's test for Javascript coders.

## Assignment Overview

The assignment is to use Javascript to tie together existing HTML and data to create a minimal, working casino website.

Basic HTML, CSS, images and JSON data is provided, however, feel free to impress by changing and enhancing any of these parts for an even better experience!

Your mission is to provide the Javascript code that makes the parts work as described, below.
The data is provided via jQuery’s [$.ajax()](http://api.jquery.com/jquery.ajax/) call, and **feel free to use any other openly available library for validation, templating, dependency injection, etc.**

## Assignment Criteria

We want to see how you approach and solve a problem, as well as look at code style and quality.
Do take your time to do it right, rather than fast.
Extra effort to improve on the "website" will be noted. :)

While the test is primarily focused on Javascript, by all means use or change the HTML or CSS when that makes sense.

Be prepared to discuss your choices and code when delivered.

These parts needs all to be completed for the assignment to be complete:

### Login functionality

* Connect the login form to the /login ajax call.
* On valid username/password, transition to the games list screen.
* On invalid username/password, provide feedback and allow to try again.

### Log out functionality

* Connect the log out button to the /logout ajax call.
* On valid log out, transition to login screen with empty input fields.

### Games list screen

* List all games from the /games ajax call.
* List categories from /categories ajax call.
* Provide functionality for filtering by typing.
* Provide functionality to filter by category.
* Make it possible to start a game by clicking on the play icon.

### Game play screen

* Load the selected game via the provided API
* Provide a way to go back to the Games list screen

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

#####Request
```javascript
$.ajax({
	url: '/login',
	type : 'POST',
	data: {
		username: 'rebecka',
		password: 'secret'
	}
});
```

#####Response
```javascript
{
	status: 'success',
	player: {
            name: 'Rebecka Awesome',
            avatar: 'images/avatar/rebecka.jpg',
            event: 'Last seen gambling on Starburst.',
            password: 'secret'
    }
}
```

### Log out
Path: /logout

Use the current player's username.
#####Request
```javascript
$.ajax({
	url: '/logout',
	type : 'POST',
	data: {
		username: 'rebecka',
	}
});
```

### Games and Categories
These methods are located on paths /games and /categories.

Please explore the response of these methods.

The API is implemented in mock/mock-api.js.

## Loading a game

We have written an API for loading the games. Here's a simple example of how to load a game through our API:

```javascript
comeon.game.launch('starburst');
```

It basically takes a game code as an in parameter.
The div with id game-launch will be replaced with an object tag that loads the game.

## More info

External libraries used in this test: [jQuery](http://jquery.com/), [jquery-mockjax](https://github.com/jakerella/jquery-mockjax),
[SWFObject](https://code.google.com/p/swfobject/), [Semantic UI](http://semantic-ui.com/)

## Found a bug?

Pull requests welcome, and maybe [we have a job for you](http://jobs.comeon.com/)? :)
