let binInp = document.getElementById("dec-inp");
let decInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

//Convert decimal to binary when user inputs in the decimal field
decInp.addEventListener("input", () =>{
  let decValue = parseInt(decInp.value);
  //Converts the decimal value to binary
  binInp.value = decValue.toString(2);
})

//Converter binario a decimal quando o usuario inserir no campo binario
binInp.addEventListener("input", () => {
  let binValue = binInp.value;
  //se o numero binario for valido converter a decimal
  if(binValidator(binValue)){
    decInp.value = parseInt(binValue, 2);
    errorMsg.textContent = "";
  }
  //Else display an error message
  else{
    errorMsg.textContent = "Please Enter a binary input";
  }

  //function to check if the binary number is valid i.e it does not contain any number other than 0 and 1
  function binValidator(num){
    for(let i = 0; i < num.length; i++){
      if(num[i]!= "0" && num[i] != "1"){
        return false;
      }
    }
    return true;
  }
})