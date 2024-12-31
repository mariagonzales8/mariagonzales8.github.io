const randNum = () => {
    return Math.floor(Math.random() * 100);
}  

const randAdj = (randNum) => {
    if (randNum === 10 || randNum < 10) {
        return "farting ";
    } else if (randNum === 20 || randNum < 20) {
        return "cranky ";
    } else if (randNum === 30 || randNum < 30) {
        return "loud-mouth ";
    } else if (randNum === 40 || randNum < 40) {
        return "dark and mysterious "
    } else if (randNum === 50 || randNum < 50) {
        return "strange ";
    } else if (randNum === 60 || randNum < 60) {
        return "mentally unstable ";
    } else if (randNum === 70 || randNum < 70) {
        return "forgetful ";
    } else if (randNum === 80 || randNum < 80) {
        return "courageous ";
    } else if (randNum === 90 || randNum < 90) {
        return "odorous ";
    } else if (randNum === 100 || randNum < 100) {
        return "dancing ";
    }
}

let adjective = randAdj(randNum());

const randCreature = (randNum) => {
    if (randNum === 10 || randNum < 10) {
        return "cookie wraith! ";
    } else if (randNum === 20 || randNum <20) {
        return "dragon! ";
    } else if (randNum === 30 || randNum < 30) {
        return "sea snail! ";
    } else if (randNum === 40 || randNum < 40) {
        return "bunnicorn! "
    } else if (randNum === 50 || randNum < 50) {
        return "rainbow beetle! ";
    } else if (randNum === 60 || randNum < 60) {
        return "rehabilitated orc! ";
    } else if (randNum === 70 || randNum < 70) {
        return "magical chameleon! ";
    } else if (randNum === 80 || randNum < 80) {
        return "one-eyed kitten! ";
    } else if (randNum === 90 || randNum < 90) {
        return "immortal butterfly! ";
    } else if (randNum === 100 || randNum < 100) {
        return "fairy! ";
    }
}

let creature = randCreature(randNum());

const randAdvice = (randNum) => {
    if (randNum === 10 || randNum < 10) {
        return "Never turn you back on weasel hunter.";
    } else if (randNum === 20 || randNum <20) {
        return "Beware of strangers wearing ugly holiday sweaters.";
    } else if (randNum === 30 || randNum < 30) {
        return "Try to use aluminum-free deodorant.";
    } else if (randNum === 40 || randNum < 40) {
        return "Always bury your treasure in enchanted forests."
    } else if (randNum === 50 || randNum < 50) {
        return "Avoid trolls who make and sell their own jewelry.";
    } else if (randNum === 60 || randNum < 60) {
        return "Take up knitting and kite-surfing.";
    } else if (randNum === 70 || randNum < 70) {
        return "Find a unicorn and offer to sharpen her horn.";
    } else if (randNum === 80 || randNum < 80) {
        return "Seek out the singing walrus.";
    } else if (randNum === 90 || randNum < 90) {
        return "Go on a pirate adventure.";
    } else if (randNum === 100 || randNum < 100) {
        return "Take time to stop and taste the magic mushrooms.";
    }
}

let advice = randAdvice(randNum());

console.log("Interesting! You are a " + adjective + creature + advice);











