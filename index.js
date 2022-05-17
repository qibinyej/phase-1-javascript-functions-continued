function saturdayFun(event = 'roller-skate'){
    return `This Saturday, I want to ${event}!`;
}

let mondayWork = function(event = 'go to the office'){
    return `This Monday, I will ${event}.`;
}

let wrapAdjective = function(flair = "*"){
    return function(i="special") {
        return `You are ${flair}${i}${flair}!`
    };
}
