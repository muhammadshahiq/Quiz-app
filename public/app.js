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
        Answer:"A. 9",
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
 var score =0;
 function nextQuestion(){
    validate(questionCount)
     questionCount++;

     validate(questionCount)
     showQuestion(questionCount);
     removeActive() 
     resultButton();
     //console.log(score)
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
 function validate(e){
    var active=document.getElementsByClassName("active")
    if(active[0].innerHTML == questionsArray[e].Answer){
        score +=10;
    sessionStorage.getItem("userScore","score")    

    }
    
 }
   

 function resultButton(){
   // removeActive()

    if(questionCount === 2){
 var nextBtn =document.getElementById("nextBtn")
 var result = document.createElement("button")
 var btnText=document.createTextNode("Result")
 result.appendChild(btnText)
nextBtn.innerHTML= result.innerHTML

nextBtn.setAttribute("onclick","resultQuiz()")
    }
   
}




     
      function resultQuiz(){
    
    
     if(score>=10){

       window.location.href = "resultquiz.html"
     
       // document.write("Your score is "+ score +"out of 50")
     



//        var pera1 = document.getElementById("pera1")
        
//        pera1.innerHTML="Congratulation you pass the quiz"
// console.log(pera1)
// pera1.innerHTML=("Your score is "+ score + " out of 50")
     
//        document.write("Your score is "+ score +"out of 50")
      
     }
     
        else
        {
            
        //   var failquiz =document.getElementById("failquiz")
          
             window.location.href = "fail.html"
        //   failquiz.innerHTML="YOU ARE FAIL PLEASE TRY AGAIN "  
        //     failquiz.innerHTML=("Your score is "+ score +"out of 50")
         } 
      }
      
    
    //    var pera1 = document.getElementById("pera1")
    //   pera1.innerHTML=("Your score is "+ score + " out of 50")
     
if(score >= 10){
    
    var pera1 = document.getElementById("pera1")
    pera1.innerHTML=("Your score is "+ score + " out of 50")

   // window.location.href = "resultquiz.html"

}
else{
    
     var failquiz =document.getElementById("failquiz")
    // failquiz.innerHTML="YOU ARE FAIL PLEASE TRY AGAIN "
    failquiz.innerHTML=("Your score is "+ score + " out of 50")
    console.log(failquiz)
  //  window.location.href = "fail.html"
        
}

sessionStorage.setItem("userscore","score")
console.log(score)
function setScore(){
    sessionStorage.getItem("userscore","score")
console.log(userScore)
}
setScore()
    function tryAgain(){
        window.location.href = "index.html"
      
    }


//         input required
//  var name = document.getElementsByClassName("name") 
//  //var button =document.getElementById("btn")
    
//  if(name.value == "" || name.value == " "){

//      alert("please Enter your name")
//      console.log(name.value)
//  }
//   else{
//     alert("google")
// //     startQuiz();
//   }

function enterName(){

var input = document.getElementById("userName");
    if(input.value == "" || input.value == " "){
        alert("User Name Required!");
    }
    else {
      //  sessionStorage.setItem("name",input.value);
        startQuiz();
    }

}







//start page
 function startQuiz(){
    window.location.href = "quiz.html"
}


