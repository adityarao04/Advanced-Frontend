const sampler = (callback, count = 1) => {
    let index = 0;

    return (...args) => {
        index++;
        if (index === count) {
            callback(...args);
            index = 0;
        }




    }
}



function hello() {
    console.log("RUn Hello");
}



const sample = sampler(hello, 4);

sample();
sample();
sample();
sample(); // will run this time and set to zero again
sample();
sample();
sample();
sample(); // will run this time and set to zero again