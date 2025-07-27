const readline = require('readline-sync');

const hasTorch = true;
const hasMapPieceOne = true;
console.log("You awake in the middle of a dark forest on a patch of solid dirt.  Your head throbs in pain and you have no memories before now.   Besides you lies a torch and a piece of torn paper.");
console.log("You pick up the torch and the torn paper. The paper seems to be a map, but it's incomplete.");
console.log("You use the torch to light your way, but you know it won't last long, so you must act quickly.");
console.log("You see two paths: one leads deeper through the forest, the other leads to the village far away.");
console.log("The forest path is dark and treacherous as you would truly be treading through the unknown, while the village path seems safer, but remember, you know nothing of the village ahead.");
const choice = readline.question("Do you go through the 'Dark Forest', searching for the rest of the map but risking your torch running out of light, or do you go to the 'Unknown Village', hoping to find help there?");

if (choice === "Dark Forest" && hasTorch) {
  console.log("Although you have no memory of how you got here, you figure that exploring the Dark Forest is your best option since you are already there.");
  console.log("As you begin to venture deeper into the Dark Forest, you stop to take a closer look at your torn map piece.");
  console.log("With the dim light of your torch now illuminating the map piece, you can read the title scrawled across the top: 'Safe Path to the Village.'");
  console.log("You see a scribbled picture seeming to be the Dark Forest, and then a path leading out of it, cut off by the tear of the paper.");
  console.log("Right outside of the forest, you see a small picture of a rock with eyes, and a small description that reads: 'eye rok bad, hide by'");
  console.log("You realize that the map is warning you about a creature in on the way to the village.  Maybe with more of the map you will understand how to get to the village safely.");
  console.log("NEW QUEST: Find the rest of the map to safely navitgate to the Unknown Village.");
  console.log("That's odd, normally you don't see words float in front of your eyes setting you on a quest.  But then again, you can't seem to remember a whole lot right now, so you figure this must be normal here.");
  console.log("Well, with this clear direction given to you by the magical quest map, you decide to find the rest of the map pieces.");
  console.log("You have a couple of options: Go further in the same direction you have been heading into a seemingly endless forest, turn left to go to a small rock formation, or turn right to follow some faint tracks of some humanoid origin.");
  const darkForestChoiceOne = readline.question("What is the first step in your new quest?");

  if (darkForestChoiceOne === "deeper into the forest") {
    console.log("Option Not In Demo: You decide to venture deeper into the forest, remembering that a straight line is the fastest way to get from point A to point B...");
  } else if (darkForestChoiceOne === "rock formation") {
    console.log("Option Not In Demo: You decide to head towards the rock formation, thinking it might provide a better vantage point.");
  } else if (darkForestChoiceOne === "faint tracks") {
    console.log("You choose to follow the faint tracks, curious about where they might lead.");
    console.log("As you follow the tracks, you see a shimmering light on the ground.:");
    const darkForestChoiceTwo = readline.question("Do you lean down to pick up the shimmering object?");
    if (darkForestChoiceTwo === "yes") {
      console.log("You pick up the shimmering object and see that it is a small piece of steel, clearly manmade, but not with any sort of modern tools.");
      const hasSteel = true;
      console.log("As your torch flickers, you realize that this piece of steel could be useful if you find some flint to go with it.");
      console.log("You continue to follow the tracks, hoping they will lead you to more clues about the map and the village.");
      console.log("After a while, you come across a small clearing with a lit campfire.  Someone has clearly been here recently.");
      console.log("As you begin to look around, you are suddenly grabbed from behind!");
      const tarzanChoiceOne = readline.question("'Friend?'");
      if (tarzanChoiceOne !== "Yes") {
        console.log("Only death awaits you...") {
        else if (tarzanChoice === "Yes") {
          console.log("Not available in Demo");
          }
        }
      }
    }
  }
 
} else if (choice === "Unknown Village") {
  console.log("Option Not In Demo: You decide to head towards the Unknown Village, hoping to find help and answers...");
}