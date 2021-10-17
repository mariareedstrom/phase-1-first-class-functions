function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function thisFunction(){

    }
}

function returnsAnAnonymousFunction(){
    return function() {

    }
}