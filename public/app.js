var questionsArray =[
    {
        question:"Question 1. Find the sum of 111 + 222 + 333 ?   ",
        Answer:"B. 666",
        options:
        [
            "A. 700",
            "B. 666",
            "C. 10",
            "D.100",
        ] 
    },
         
    {
        question:"Question 2. Simplify: 26 + 32 - 12 ?           ",
        
        Answer:"D. 46",
        options:
        [
            "A. 0",
            " B. 32",
            "C. 56",
            "D. 46",
        ] 
    },

    {
        question:"Question 3. Subtract 457 from 832 ?              ",
        Answer:"A. 375",
        options:
        [
            "A. 375",
            "B. 57",
            "C. 376",
            "D. 970",
        ] 
    },

    {
        question:"Question 4. 90 ÷ 10 ?                             ",
        Answer:"B. 10",
        options:
        [
            "A. 9",        
            "B. 10",
            "C. 900",
            "D. 1",
        ] 
    },

    {
        question:"Question 5. Solve : 24 + 4 ÷ 4 ?                 ",
        Answer:"A. 25",
        options:
        [
            "A. 25",
            "B. 6",
            "C. 28",
            "D. 7",
        ] 
    },
]

//show ques
function showQuestion(e) {
    var questionElement = document.getElementById("questionElement")
    questionElement.innerHTML= questionsArray[e].question;


// show opt

var optionElement = document.getElementsByClassName("optionElement");
for(var i=0 ; i<optionElement.length ; i++){
optionElement[i].innerHTML= questionsArray[e].options[i]

}

}
 var questionCount = 0;

 function nextQuestion(){
     questionCount++;
     showQuestion(questionCount);
     removeActive()
 } 

 function putActive(e){
    removeActive()
   e.classList.add("active")
   
 }

 function removeActive(){
     var active=document.getElementsByClassName("active")
     for(var i=0 ; i<active.length ; i++){
      active[i].classList.remove("active")
     }
 }