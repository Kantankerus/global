var win;

//if (typeof window !== "undefined") {
//    win = window;
//} else if (typeof global !== "undefined") {
//    win = global;
//} else if (typeof self !== "undefined"){
//    win = self;
//} else {
    win = {
        location: {
            hostname: "fred"
        },
        setTimeout: false,
    };
//}

module.exports = win;
