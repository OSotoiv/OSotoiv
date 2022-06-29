function countDown(num) {
    if (parseInt(num) === NaN || num < 0) {
        return console.log("Number needs to be greater than 0");
    } else {
        setTimeout(function () {
            if (num > 0) {
                console.log(num);
                countDown(num - 1);
            } else {
                return console.log("Done!");
            }
        }, 1000);
    }
}

countDown(10);
