
function redirect(){
  //this is a function to take the user to a different page based on their selection
  let form_choice = document.querySelector("input[name='password_option']:checked") 
  // ^ this is taking the value from the users choice in the html form
  if (form_choice.value == "check"){
    window.location.href = "html/checker.html"
  }
  if (form_choice.value == "generate"){
    window.location.href = "html/generator.html"
  }
  if (form_choice.value == "quit"){
    //decide on function of quit
  }
  //error handling
  if (form_choice == null){
    alert("You must select an option.")
  }
}
function back(){
  //function to take user back to index
  window.location.href = "../index.html"
}

function passwordValid(p) {
  //creating function to check validity of password
    
  let all = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%^&*()-_=+"
    let check = false
    let allArray = []  
      for (i=0;i<all.length;i++) {
        allArray.push(all[i])
      }
    let passwordLetters = []
      for (i=0;i<p.length;i++) {
        passwordLetters.push(p[i])
      }
  //array of valid characters + array of the password entered created
  if (p.length>=8 && p.length <= 24){
    //initial check of valid length
    for (i=0;i<p.length;i++){
      for (n=0;n<allArray.length;n++) {
        //this checks every password character against every valid character to see if there is a match
        if(p[i] == allArray[n]){
          check = true
          }
      }
      if(check == false) {
        console.log("invalid")
      }
      check = false
      //this resets the check for each character
      }
  }
  else{
    //this triggers if length is invalid
    check = false
    console.log("invalid")
  }
}
  
