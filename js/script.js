
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
