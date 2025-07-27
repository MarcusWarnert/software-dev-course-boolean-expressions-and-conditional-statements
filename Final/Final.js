//Final

// I think this will look very disorganized, since none of this code will necessarily go together for the app.  I will try to make everything as clear as I am able using "//".

const readline = require("readline-sync");//"Values, Data Types, and Operations": readline-sync will enable the user to converse with the app.
let geniusMPMotto = "Your weekly meal prep list done easy."//This will be displayed when the user opens the app
let openApp = "true";
if (openApp) {
    console.log(geniusMPMotto);//Not sure exactly how to display the message as soon as they open the app, but this gets the idea accrposs at least
}

const commonVetos = ["mushrooms", "broccoli", "salmon"];//"Creating Arrays"
const veto = readline.question(`What food will you veto? Some common vetos are ${commonVetos} or other`);//"Control, Structures, and LogicThe answer to this question would be excluded from the AI search for their meals, unless otherwise specified
if (veto === "mushrooms") {
    console.log("Thank you, mushrooms will not be included in your meals going forward.")
} else if (veto === "broccoli") {
    console.log("Thank you, broccoli will not be included in your meals going forward.")
} else if (veto === "salmon") {
    console.log("Thank you, salmon will not be included in your meals going forward.")
} else if (veto === "other") {
    const other = readline.question("Please indicate what other food you would like to veto.")
    if (other === "Other")//They would then enter their answer here and then their answer would be taken.
    console.log(`Thank you. ${other} will be excluded from further recipes.`)
}
console.log(veto);
//There will then be some sort of code to take their answer and run it against a spellchecker so that it could be excluded properly from recipes.
//I'm not exactly sure how to code this, but it would be some sort of loop that would ask the user if the spellcheck option was what they actually meant.
const spellCheck = readline.question("Is this the correct spelling?");//Then it would display what it thinks is the right spelling
let correctSpelling = "The word spelled correctly";
let incorrectSpellingMessage = "Please try again if that is not the correct spelling.  It is important to spell the word correctly so that we can eliminate it from further recipes.";
while (spellCheck !== correctSpelling) {
    console.log(incorrectSpellingMessage);
    spellCheck i++;
}
//At some point in the app there will need to be a list of all your recipes for the week which will have to hcange every week.
let weeklyRecipes = [`
    [Sunday, Steak and Eggs], 
    [Monday, Chicken and Waffles],
    [Tuesday, Salmon and Rice],
    [Wednesday, Sushi],
    [Thursday, Loaded Nachos],
    [Friday, Bison Burgers],
    [Saturday, Butter Chicken]`];
let question = readling.question("Do you like the order?")
if (question === yes) {
    console.log("Good. Then we will proceed.")
} else if (question === no) {
    const swapDays = readline.question("What days would you like to swap?")
    if ("Monday and Tuesday") {
        [weeklyRecipes [1,1] =  weeklyRecipes [2,1]];//"Using Arrays" Depending on what the user inputs, 
        console.log(`Monday and Tuesday have swapped recipes.`)
    } else {
        console.log("etc");//Then there would be a list of all the other possibilities, but that doesn't need to be done here as this example is enough
    }
    }
