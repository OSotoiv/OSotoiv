function randomGame() {
    let counter = 1;
    let rand = Math.random();
    //console.log(rand);
    const id = setInterval(function () {
        if (rand < 0.75) {
            //console.log(rand)
            rand = Math.random();
            counter++;
        } else if (rand > 0.75) {
            clearInterval(id);
            //console.log(`counter is ${counter} rand is ${rand}`);
            console.log(counter);
        }
    }, 1000);

}