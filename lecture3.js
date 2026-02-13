// const a = () => {
//     setTimeout(() => {
//         console.log("Function 1");
//     },10000);
//     setTimeout(() => {
//         console.log("Function 2");
//     },0);
//     b();
//     console.log("Heyyy!");
// }
// const b = () => {
//     console.log("How Are You?");
// }
// a();
const a = () => {
}
const b = () => {
    setTimeout(() => {
        console.log("Function 1");
    },0);
    console.log("~b ~ b:");

    Promise.resolve().then(() => {
        console.log("Function 2");
    });
    Promise.resolve().then(() => {
        console.log("Function 3");
    });
};
a();
b();

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