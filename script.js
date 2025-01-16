let string = "";

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string)
      document.querySelector('input').value = string;
    }

    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    
    else{
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})

// for clear screen
function calculateResult() {
  try {
    string = eval(string);
    document.getElementById('display').value = string;
  } catch (error) {
    document.querySelector('input').value = 'Error';
  }
}

// for clear number one by one
function clearOneCharacter() {
  const inputField = document.querySelector('input');
  const currentValue = inputField.value;

  if (currentValue.length > 0) {
    const newValue = currentValue.slice(0, -1);
    inputField.value = newValue;
    string = newValue;
  }
}