const fetchData = new Promise((resolve, reject) => {
    const success = true;
    if(success) {
        resolve("Data fetched successfully!");
        console.log("This will be logged immediately after resolve.");
    } 
    else {
        console.log("This will be logged immediately before reject.");
        reject("Failed to fetch data!"); 
    }
});

fetchData.then((message) => {
    console.log("Success:", message);
}).catch((error) => {
    console.error("Error in then:", error);
});

const login = () => {
    return Promise.resolve("Login successful!");
};
const getUserData = () => {
    return Promise.resolve("User data fetched!");
};
const getUserName = () => {
    return Promise.resolve("User name fetched!");
};

login().then(() =>{
    getUserData().then(() => {
        getUserName().then((result) => {
            console.log("Final Result:", result);
        }).catch((error) => {
            console.error("Error in getUserName:", error);
        });
    });
});


login()
.then(getUserData)
.then(getUserName)
.then(console.log)
.catch((error) => console.log("Error in promise chain:", error))
.then(console.log)


Promise.resolve(10)
.then((x) => {
    x + 1; // We get 11 here, but we are not returning it, so the next then will receive undefined.
})
.then((x) => x * 2) // Since the previous then did not return anything, x is undefined here, and this will result in NaN.
.then((x) => {
    console.log("Final value:", x);
    return x + 8; // This value is not returned, so it will be undefined in the next then..
}).catch((error) => console.error("Error in promise chain:", error));

const data = () => 10
const data1 = () => (10)
const newData = (value) => {
    if( value === 10) return 10;
};

const fetchdata = async () => { // It will return a promise and allows us to use await inside it.
    console.log("Fetching data...");
    await fetch("https://jsonplaceholder.typicode.com/posts/1") //  We use await to wait for this promise to resolve before moving on to the next line of code.
    .then(response => response.json()) // We can also use await here instead of chaining then. 
    .then(data => console.log("Fetched data:", data)) // We can also use await here instead of chaining then.
    .catch(error => console.error("Error fetching data:", error)) // We can also use try-catch block for error handling instead of catch.
    .finally(() => console.log("Data fetched successfully!"));  // The finally block will execute regardless of whether the promise was resolved or rejected.
    
};
fetchdata();