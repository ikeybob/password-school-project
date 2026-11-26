
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
        alert("Invalid. You must only use authorized characters")
        return
      }
      check = false
      //this resets the check for each character
      }
  }
  else{
    //this triggers if length is invalid
    check = false
    alert("Invalid. Your password must be between 8 and 24 characters")
  }
}

function passwordStrength(p) {
  let points = 0
  let pa = []
  let allUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let allUpArray = []
  for(i=0;1<p.length;i++){
    pa.push(p[i])
  }
  for (i=0;i<allUpper.length;i++) {
        allUpArray.push(all[i])
      }
}
  
