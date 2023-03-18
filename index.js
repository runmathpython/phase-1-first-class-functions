function receivesAFunction(cb) {
    return cb();
}
receivesAFunction(() => {return 1 + 1});

function returnsANamedFunction() {
    return aNamedFunction = () => console.log("A named function has returned.");
}

function returnsAnAnonymousFunction() {
    return () => console.log("An annoymous function has returned.");
}