


let count: number = 0;

const addOne = (): void => {
    count++;
    renderCounterApp();
};

const minusOne = (): void => {
    count--;
    renderCounterApp();
};

const reset = (): void => {
    count = 0;
    renderCounterApp();
};

const renderCounterApp = (): void => {
    const templateTwo: JSX.Element = (
        <div>
          <h1> Count: {count}</h1>
          <button onClick={addOne}> +1</button>
          <button onClick={minusOne}> -1</button>
          <button onClick={reset}> Reset</button>
        </div>
    );

    //Render template to the element
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();