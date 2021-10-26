//Array med alla korrekta svar på radiobuttons frågor
let correctAnswersRadioBtns = [
     "24 år", "Södermalm", "Dalarna", "Min pojkvän", "Nej men jag vill SÅ gärna ha ett...", "Jobbade som reklamationshandläggare på Entercard", "Choklad", "Dokumentärer om mord", "Luktar på doftljus och scrollar Hemnet"
]; 

//Array med alla korrekta svar på checkbox frågan
let correctAnswersCheckboxBtns = [
     "Hamburgare från Barells", "Nästan allt som min pojkvän lagar", "Fish taco"
]; 

//Tom array där användarens valda radiobutton svar sparas 
let usersAnswRadioBtn = [];
//Tom array där användarens valda checkbox button svar sparas
let usersAnswCheckboxBtn = [];
//Hämtar rätta quizzet knappen
let correctQuiz = document.querySelector("#submitBtn");
//Variabel för att hålla koll på användarens poäng 
let userPoints = 0;


//Funktion som körs när man klickar på Rätta quizzet
correctQuiz.addEventListener("click", () => {

     let allRadioBtns = document.querySelectorAll(".radioBtnAnsw");
     let allCheckboxBtns = document.querySelectorAll(".checkboxBtnsAnsw");

     //Loopar igenom alla radiobuttons och kollar sedan vilka som är icheckade och sparar dess värde i arrayen usersAnswRadioBtn
     allRadioBtns.forEach((btn) => {
          if (btn.checked) {
               usersAnswRadioBtn.push(btn.value); 
          }
     });

     //Loopar igenom alla element i arrayen med användarens svar och om arrayen med dem rätta svaren innehåller elementen som finns i den så får man ett poäng per rätt svar
     usersAnswRadioBtn.forEach((answ) => {
          if (correctAnswersRadioBtns.includes(answ)){
               userPoints++;
          };
     });

     //Loopar igenom alla checkboxar och kollar sedan vilka som är icheckades och sparar dess värde i arrayen usersAnswCheckboxBtn
     allCheckboxBtns.forEach((btn) => {
          if(btn.checked) {
               usersAnswCheckboxBtn.push(btn.value);
          }
     });

     //Gör om arrayen med rätt svar för checkboxes och användarens valda checkboxes arrayen till string
     let correctAnswersCheckboxBtnsToString = correctAnswersCheckboxBtns.toString();
     let usersAnswCheckboxBtnToString = usersAnswCheckboxBtn.toString();

     //Kollar om textsträngarna är lika och om de är det så plussa det på ett poäng
     if(correctAnswersCheckboxBtnsToString == usersAnswCheckboxBtnToString){
          userPoints++;
     };

     let quizResult = document.querySelector("#quizResult");

     //Kollar hur många poäng användaren fått och utefter antalet skriver ut olika texter med olika färger. 
     if (userPoints > 7.5 && userPoints <= 10){
          quizResult.innerText = "Du fick " + userPoints + " av 10 rätt.";
          quizResult.style.color = "green";
     }else if (userPoints > 5 && userPoints < 7.5){
          quizResult.innerText = "Du fick " + userPoints + " av 10 rätt.";
          quizResult.style.color = "orange";
     }else {
          quizResult.innerText = "Du fick " + userPoints + " av 10 rätt";
          quizResult.style.color = "black";
     }
});

let retryQuizBtn = document.querySelector("#replyQuiz");

//Funktion som körs när "starta om quizzet" klickas på.
retryQuizBtn.addEventListener("click", () => {
     location.reload();
}); 

let darkModeBtn = document.querySelector("#darkModeBtn");

//Funktion som körs när man klickar på "mörkt läge" knappen
darkModeBtn.addEventListener("click", () => {
     document.querySelector("body").style.backgroundColor = "rgb(40, 44, 43)";
     document.querySelector("body").style.color = "rgb(59, 93, 165)";
     document.querySelector("#quizResult").style.backgroundColor = "white";
}); 

let lightModeBtn = document.querySelector("#lightModeBtn");

//Funktion som körs när man klickar på "ljust läge" knappen
lightModeBtn.addEventListener("click", () => {
     document.querySelector("body").style.backgroundColor = "white";
     document.querySelector("body").style.color ="black";
}); 
