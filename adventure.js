/*
“Bears” is a text adventure game based around the user running into a bear in the wilderness and 
having to make decisions that could mean life or death for the user. 
The user will be presented with 3 choices at each decision step for a total of 2 decision steps. 
The user will simply type in the option they choose out of the 3 choices they are given. 
After each choice is made a text output will be given that will continue into the next step until the end of the game.

Nouns: game, user, bear, decisions, life, death, choices, steps, option, output
Verbs: based, make, mean, presented, type, choose, given, made, end

Defining diagram:
Inputs: Choice1: C1, C2, C3	Choice2:C1, C2, C3
Processing: if Choice1 = C1 output and end
Else If Choice1 = C2 output and move to Choice2
Else If Choice1 = C3 output and end
Else
If Choice2 = C1 output and end
Else If Choice2 = C2 output and end
Else If Choice2 = C3 output and end
*/

/*
Pseuduocode for the program:

begin

create function firstChoice()
init var choice 1 = prompt("Prompt description")

if (choice1 === "run") then
output ("response")
loop while (choice1 === "run") 
execute firstChoice(

else if choice1 === "hide" then
output ("response")

else if choice1 === "stand my ground" then
output ("response")

else output("Please choose one of the three options")
loop while ((choice1 !== "run")&&(choice1 !== "hide")&&(choice1 !== "stand my ground"))
execute firstChoice()

return choice1

firstChoice()



create function secondChoice()

if (choice1 === "hide")

init var choice2 = prompt("Prompt description")

if (choice2 = "escape by myself") then
output ("response")
loop while (choice2 === "escape by myself")
execute firstChoice()

else if (choice2 === "escape with the others") then
output ("response")

else if (choice2 === "stay in the cage") then
output ("response")

else output("Please choose one of the three options")
loop while ((choice2 !== "escape by myself")&&(choice2 !== "escape with the others")&&(choice2 !== "stay in the cage"))
execute secondChoice()

secondChoice()

end
*/

/*
Variables choice1, choice2

Test plan 1
      Input values: run
      Expected results: "The bear has taken advantage of your weakness and has devoured you. Try again." and the function loops
      Actual result: time = "The bear has taken advantage of your weakness and has devoured you. Try again." and  the function loops
      
      
    Test Plan 2
    
      Input values: hide
      Expected results: "The bear has discovered your whereabouts and has knocked you out to drag you back to it's den and 
      make you it's prisoner." and moves to the next function
      Actual result: time = "The bear has discovered your whereabouts and has knocked you out to drag you back to it's den and 
      make you it's prisoner." and moves to the next function
    
    
    Test Plan 3
    
      Input values: stand my ground
      Expected results: "You plant your feet and stare in the bears direction. 
                         Knowing the right thing to do is to intimidate the bear, 
                         you raise your arms above your head and begin yelling at the bear.
                         frightened by the yelling, the bear runs the other way. Great job."
      Actual result: "You plant your feet and stare in the bears direction. 
                      Knowing the right thing to do is to intimidate the bear, 
                      you raise your arms above your head and begin yelling at the bear.
                      frightened by the yelling, the bear runs the other way. Great job."

*/

// This function is the first decision construct
function firstChoice()
{
  choice1 = prompt(String("You're walking through the woods on your weekly Sunday stroll,"
                         +" when you stumble across a bear walking across the path."
                         +" The bear stops in its tracks and glares at you. You can either " 
                         +"run, hide, or stand your ground. What do you decide to do?"
                         +" Options to choose from: run, hide, or stand my ground"));
                            
  if (choice1 === "run")
  {
    alert("The bear has taken advantage of your weakness and has devoured you. Try again.");    
    // Restarts the game if they choose the run option
    while (choice1 === "run")
    {
      firstChoice();
    }
  }
    
  else if (choice1 === "hide")
  {
    alert("The bear has discovered your whereabouts and has knocked you out to "
         +"drag you back to it's den and make you it's prisoner.");
  }
  
  else if (choice1 === "stand my ground")
  {
    alert("You plant your feet and stare in the bears direction. "
         +"Knowing the right thing to do is to intimidate the bear, "
         +"you raise your arms above your head and begin yelling at the bear."
         +" Frightened by the yelling, the bear runs the other way. Great job.");
  }
   
  else    
  {
    alert("Please choose one of the three options. Try again.");
    // Restarts the function to reprompt for a correct response
    while ((choice1 !== "run")&&(choice1 !== "hide")&&(choice1 !== "stand my ground"))
    {
      firstChoice();
    }
  }
  
  return choice1;  
}
firstChoice();

// This function is for the second decision construct
function secondChoice()
{
  if (choice1 === "hide")
  {
    var choice2 = prompt(String("You awake in a large cold cavern to the sounds of whispering voices. The smell around you is a putrid one."
                       +" The people around you are battered and dirty. You seem to be locked in some sort of cage."
                       +" You can see the bear napping near the front of the cave and the people gesture to not wake him."
                       +" How is a bear capable of keeping hostages you wonder. The thought boggles your mind but you begin "
                       +"to think of what to do next. You notice a small gap near the side of the cage that you could possibly"
                       +" make bigger and be able to squeeze through. What do you decide to do?"
                       +" Options to choose from: escape by myself, escape with the others, or stay in the cage."));
                       
    if (choice2 === "escape by myself")
    {
      alert("You begin to pry the bar open as quietly as possible. The people in the cage with you "
           +"start to become frantic and gesture you to stop. You don't care, all you want is to escape. "
           +"One last push on the bar opens it enough for you to squeeze through. You start inching your way"
           +" out of the cage and into the cavern. You begin to quietly walk towards the exit but just as you are"
           +" nearing the bear, your fellow hostages begin yelling to wake the bear. The bear awakens and sees you out"
           +" and sees you out of the cage. The bear was no longer hungry after your little escape stunt. Try again.");
      // Restarts the game because the person has died    
      while (choice2 === "escape by myself")
      {
        firstChoice();
      }        
    }
  
    else if (choice2 === "escape with the others")
    {
      alert("You start to convince the other people in the cage that they don't need to stand for this "
           +"because they're smart humans and the bear is just a stupid bear. They all nod in agreement"
           +" and begin to pry the gap open. After the gap is widened, you take the lead and everybody"
           +" quietly follows you out of the cage. As you approach the bear you gesture to everyone to be"
           +" extremely quiet. You silently walk towards the front of the bear and flick him on the nose."
           +" Using the moment of confusion to your advantage, you begin to run for your life while the bear"
           +" is busy with the others you threw under the bus. Good job on escaping, you evil, evil human being.");
    }
  
    else if (choice2 === "stay in the cage")
    {
      alert("Too frightened to leave the cage, you decide to wait it out and see where things go."
           +" Bad move. The bear eventually wakes up and forces you to take care of its family. "
           +"Out of fear of being eaten, you comply. Congratulations, you're now the family nanny.");
    }
  
    else
    {
      alert("Please choose one of the three options. Try again.");
      // Restarts the function to reprompt for a correct response
      while ((choice2 !== "escape by myself")&&(choice2 !== "escape with the others")&&(choice2 !== "stay in the cage"))
      {
        secondChoice();
      }
    }      
  }
}
secondChoice();
   