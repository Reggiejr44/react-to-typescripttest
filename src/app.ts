console.log('App.js is running!')

interface App {
    title: string;
    subtitle?: string;
    options: string[];
}

const App: App = {
    title: 'Indecision App',
    subtitle: 'Put your life into the hands of a computer!',
    options: []
};

const onFormSubmit = (e: Event) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const option = target.elements.option.value;

    if (option) {
        app.options.push(option);
        target.elements.option.value = '';
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

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);