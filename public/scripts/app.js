'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
//Defining JSX

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life into the hands of a computer!',
    options: []
};

//only render subtitle (and p tag) if subtitle exist - logical and Operator
//render new p tag - if options.length > 0 "here are your options" "No options"
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'p',
        null,
        app.options.length
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'One'
        ),
        React.createElement(
            'li',
            null,
            'Two'
        )
    ),
    React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add Option'
        )
    )
);

//Element selected---Where we want to put the tempplate
var appRoot = document.getElementById('app');

//Render template to the element
ReactDOM.render(template, appRoot);

//Conditional Statement
// function getLocation(location) {
//     if (location) {
//         return <p>location: {location}</p>;
//     }
// }

//Ternary Operator = <h1>{user.name ? user.name : 'Anonymous'}</h1> (if you want to do 2 things)
//Logical & operator = {user.age >= 18 && <p>Age: {user.age}</p>} (if you want to 1 thing if else return nothing)
