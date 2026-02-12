const a = () => {
    b();
    console.log("Hello World");
}
const b = () => {
    c();
    console.log("How Are You?");
}
const c = () => {
    console.log("How's It Going?");
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