const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const page5 = document.getElementById("page5");
const page6 = document.getElementById("page6");
const pages = document.querySelectorAll(".pages");

const buttonHolder = document.getElementById("buttonHolder");

const story1 = document.getElementById("story1");
const story2 = document.getElementById("story2");
const story3 = document.getElementById("story3");
const story4 = document.getElementById("story4");
const story5 = document.getElementById("story5");
const story6 = document.getElementById("story6");
const stories = document.querySelectorAll(".stories");

const inputtedAnswers = document.querySelectorAll(".inputtedAnswers");

const needsToFinishQuizAll = document.querySelectorAll(".needsToFinishQuizAll");

const submitButtons = document.querySelectorAll(".submitButtons");

let quizIncomplete = false;

//Functions to display the various pages
function openMadLibs1() {
  buttonHolder.style.display = "none";
  page1.style.display = "block";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "none";
  page5.style.display = "none";
  page6.style.display = "none";
}

function openMadLibs2() {
  buttonHolder.style.display = "none";
  page1.style.display = "none";
  page2.style.display = "block";
  page3.style.display = "none";
  page4.style.display = "none";
  page5.style.display = "none";
  page6.style.display = "none";  
}


function openMadLibs3() {
  buttonHolder.style.display = "none";
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "block";
  page4.style.display = "none";
  page5.style.display = "none";
  page6.style.display = "none";
}


function openMadLibs4() {
  buttonHolder.style.display = "none";
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "block";
  page5.style.display = "none";
  page6.style.display = "none";
}


function openMadLibs5() {
  buttonHolder.style.display = "none";
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "none";
  page5.style.display = "block";
  page6.style.display = "none";
}

function openMadLibs6() {
  buttonHolder.style.display = "none";
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "none";
  page5.style.display = "none";
  page6.style.display = "block";
}

function homeScreen() {
  buttonHolder.style.display = "block";
  hide(pages);
  hide(needsToFinishQuizAll);
  clearText(stories);
  showBlock(inputtedAnswers);
  resetInputs();
  submitButtons.forEach(element => {
    element.style.display = "inline-block";
  });
}


//Functions to put inputs into the stories
function organizeStoryResponses1() {
  let inputs = document.querySelectorAll(".responses1");
  let inputArray = [];
  createAndCheckArray(inputs,inputArray); //procedure called to push inputs into array & check if array is undefined
  if (quizIncomplete){
    return;
  }
  updateConsole("1", inputArray);
  story1.innerHTML = "My favorite season is " +inputArray[0] + ". I love that I have some time off from school to " +inputArray[1] + " with my friends instead of " +inputArray[2] + " at a desk all day. My favorite thing to do is " + inputArray[3] + " while I'm at the beach. This summer I really wanted to go to " + inputArray[4] + " with all of my friends but my parent, " + inputArray[5] + ", told me I had to babysit my pet " + inputArray[6] + " instead which is so not " + inputArray[7] + ". My parent said that when I go to  the beach, I need to pack a beach " + inputArray[8] + ". They also said that I needed to bring extra sunscreen because my " + inputArray[9] + " always gets really, really sunburned. I can't wait for a/an " + inputArray[10] + " summer!";
  hide(needsToFinishQuizAll);
  hide(submitButtons);
  hide(inputtedAnswers);
}


function organizeStoryResponses2() {
  let inputs = document.querySelectorAll(".responses2");
  let inputArray = [];
  createAndCheckArray(inputs,inputArray); //procedure called to push inputs into array & check if array is undefined
  if (quizIncomplete){
    return;
  }
  updateConsole("2", inputArray);
  story2.innerHTML = "I am a/an " + inputArray[0] + " sports player. I have won the championship for " + inputArray[1] + " " + inputArray[2] + " time(s). Yesterday, I went to practice with my team, and I did really " + inputArray[3] + ". At practice, my coach  " + inputArray[4] + " told me that I needed to clean up my " + inputArray[5] + " I brought to help me play better. After practice, my " + inputArray[6] + " started hurting so I put a " + inputArray[7] + " on it. I hope it heals quickly! My friend " + inputArray[8] + " is worried because I’m the most " + inputArray[9] + " player on the team, and we need to " + inputArray[10] + " at our game against " + inputArray[11] + " next week. I'm feeling really " + inputArray[12] + " because my coach said I have to play really well this week! " + inputArray[13] + " is also putting a lot of pressure on me and is making me practice really hard. Wish me luck at my next game!";
  hide(needsToFinishQuizAll);
  hide(submitButtons);
  hide(inputtedAnswers);
}

function organizeStoryResponses3() {
  let inputs = document.querySelectorAll(".responses3");
  let inputArray = [];
  createAndCheckArray(inputs,inputArray);
  if (quizIncomplete){
    return;
  }
  updateConsole("3", inputArray);
  story3.innerHTML = "My favorite singer is " + inputArray[0] + ". They sing so " + inputArray[1] + "! I listen to " + inputArray[2] + " of their songs every day! I also know everything about them. For example, I know they have a " + inputArray[3] + " for a pet and " + inputArray[0] + " is " + inputArray[4] + " years old. I am a/an " + inputArray[5] + " musician; I play the " + inputArray[6] + ". " + inputArray[0] + " actually wants me to play back up for them at their concert next week! I’m so " + inputArray[7] + " to go, and I am bringing a/an " + inputArray[8] + " as my good luck charm. My friend, " + inputArray[9] + ", has been telling me everyday that I need to practice for the concert next week, but I would rather " + inputArray[10] + " with my friends. I hope I play " + inputArray[11] + " for " + inputArray[0] + "'s concert even though I haven’t been practicing.";
  hide(needsToFinishQuizAll);
  hide(submitButtons);
  hide(inputtedAnswers);
}



function organizeStoryResponses4() {
  let inputs = document.querySelectorAll(".responses4");
  let inputArray = [];
  createAndCheckArray(inputs,inputArray);
  if (quizIncomplete){
    return;
  }
  updateConsole("4", inputArray);
  story4.innerHTML = "I am so "+inputArray[0]+ " to go over to my friend "+inputArray[1]+ "'s house tonight for a sleepover, but before I go I need to pack all of my essential items. No one wants bad breath, so I have to bring my "+inputArray[2]+  " and "+inputArray[3]+ ". I also need to bring my coziest "+inputArray[4]+  " to sleep in. At a sleepover, I always love to " +inputArray[5]+ " and bake a "+inputArray[6]+ " snack. My favorite thing to do at a sleepover is to tell "+inputArray[7]+  " stories. One time when I was telling a scary story, a "+inputArray[8]+  " fell off of a shelf on its own! It's like there was an invisible "+inputArray[9]+ " in the room! My friends were so scared that they started " +inputArray[10]+ ". I have to leave now for the most "+inputArray[11]+ " night ever!";
  hide(needsToFinishQuizAll);
  hide(submitButtons);
  hide(inputtedAnswers);
}

function organizeStoryResponses5() {
  let inputs = document.querySelectorAll(".responses5");
  let inputArray = [];
  createAndCheckArray(inputs,inputArray);
  if (quizIncomplete){
    return;
  }
  updateConsole("5", inputArray);
  story5.innerHTML = "I LOVE the book "+ inputArray[0]+ ", and I am so " + inputArray[1]+ " that it is going to be a movie. I loved this book because there were so many " + inputArray[2]+ " moments. Because I am such a big fan, I "+ inputArray[3]+ " when the author wrote me a letter saying I was going to be in the movie. I got to be on set with " + inputArray[4]+" who is actually really " + inputArray[5]+" in person. I'm going to the premiere tonight, but I'm so " + inputArray[6]+" that I am going to trip over my own two "+ inputArray[7]+". My outfit for tonight is super, super "+ inputArray[8]+ " and it matches my "+ inputArray[9]+" earrings so well! I can't wait for everyone to come see "+ inputArray[0]+ " the movie!";
  hide(needsToFinishQuizAll);
  hide(submitButtons);
  hide(inputtedAnswers);
}

function organizeStoryResponses6() {
  let inputs = document.querySelectorAll(".responses6");
  let inputArray = []; //defines array
  createAndCheckArray(inputs,inputArray); //procedure called to push inputs into array & check if array is undefined
  if (quizIncomplete){
    return;
  }
  updateConsole("6", inputArray);
  story6.innerHTML = "Today, I went on a walk around my neighborhood called " + inputArray[0] + " Town. I saw a bunch of my friends, including " + inputArray[1] + ". We " + inputArray[2] + " around and then after " + inputArray[3] + " hour(s), I started to walk back home. On my way, I saw a/an " + inputArray[4] + " " + inputArray[5] + " which was really " + inputArray[6] + ". I took it home to show my friend but on my way I saw a/an " + inputArray[7] + "! It walked up to my " + inputArray[5] + " and they fell in love. They ran away and started to " + inputArray[8] + " together. Finally, I made my way home, when I saw a really expensive " + inputArray[9] + " and the driver waved at me! I hope I can earn enough money to buy that one day. " + inputArray[10] + ", what a/an " + inputArray[11] + " walk!";
  hide(needsToFinishQuizAll);
  hide(submitButtons);
  hide(inputtedAnswers);
}

//Function to add data to array and loop through elements to determine if any inputs are empty strings
function createAndCheckArray(inputs, inputArray) {
  inputs.forEach(input => {
    inputArray.push(input.value);
  });
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == "") {
      showBlock(needsToFinishQuizAll);
      quizIncomplete = true;
      return;
    } else {
      quizIncomplete = false;
    }
  };
}

//Logs arrays to console
function updateConsole(num, array) {
  console.log("Input Array", num, array);
  console.log("--------------");
}

//Sets input values to empty strings
function resetInputs() {
  let inputElements = document.getElementsByTagName("input");
  for (let i=0; i < inputElements.length; i++) {
    if (inputElements[i].type == "text") {
      inputElements[i].value = "";
    }
  }
}

//Functions that change the display for elements
function hide(className) {
  className.forEach(element => {
  element.style.display = 'none';
  });
}

function showBlock(className) {
  className.forEach(element => {
  element.style.display = "block";
});
}

function clearText(className) {
  className.forEach(element => {
    element.innerHTML = "";
  });
}
