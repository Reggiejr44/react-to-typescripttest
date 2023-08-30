console.log('App.js is running!')

// JSX - JavaScript XML
//Defining JSX

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life into the hands of a computer!',
    options: []
};

//only render subtitle (and p tag) if subtitle exist - logical and Operator
//render new p tag - if options.length > 0 "here are your options" "No options"
const onFormSubmit = (e) => {
    e.preventDefault();


    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
};


const template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>{app.options.length}</p>
        <ol>
           <li>One</li>
           <li>Two</li>           
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
);

//Element selected---Where we want to put the tempplate
const appRoot = document.getElementById('app')

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
