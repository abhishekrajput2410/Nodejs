const a = () => {
    setTimeout(() => {
        console.log("Function 1");
    },10000);
    setTimeout(() => {
        console.log("Function 2");
    },0);
    b();
    console.log("Heyyy!");
}
const b = () => {
    console.log("How Are You?");
}
a();

// Empty Stack

// Line 1 Push To Stack
// Line 1 is Executed
// Line 1 is Popped from Stack

// Line 2 Push To Stack
// Line 2 is Executed
// Line 2 is Popped from Stack

// Line 3 Push To Stack
// Line 3 is Executed
// Line 3 is Popped from Stack