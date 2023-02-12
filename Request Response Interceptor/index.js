const originalFetch = window.fetch;

window.requestInterceptor = (args) => {
    // perform some action
    console.log("inside requestInterceptor", args);

    return args;
}


window.responseInterceptor = (response) => {
    // perform some actions
    console.log("inside responseInterceptor", response);


    return response.json();
}
window.fetch = async(...args) => {
    const updatedRequest = requestInterceptor(args);


    const response = await originalFetch(...updatedRequest);


    const updatedResponse = responseInterceptor(response);

    return updatedResponse;
};


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response))