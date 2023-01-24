
document.querySelector('.first').innerHTML = 'Вы не авторизованы';

const func1 = () => {

    const NAME = document.getElementById("name").value;
    document.getElementById("name").value = "";
    const PHONE = document.getElementById("phone").value;
    document.getElementById("phone").value = "";
    const EMAIL = document.getElementById("email").value;
    document.getElementById("email").value = "";

    console.log(NAME , PHONE , EMAIL)
    document.querySelector('.first').innerHTML = 'Вы авторизованы как:';
    document.querySelector('.o-name').innerHTML = NAME;
    document.querySelector('.o-name2').innerHTML = NAME;
  }



const func2 = () => {
  let ORGANISATION = 0;
  let DOC = 0;
  var DATE = document.getElementById("select-date").value;
  document.getElementById("select-date").value = "";

  let radio = document.querySelectorAll('.i-1');
  for (let i = 0; i < radio.length; i++){
    if (radio[i].checked){
      ORGANISATION = radio[i].value;
      break;
    }
  }
  console.log(ORGANISATION);

  let radio2 = document.querySelectorAll('.i-2');
  for (let j = 0; j < radio2.length; j++){
    if (radio2[j].checked){
      DOC = radio2[j].value;
      break;
    }
  }
  console.log(DOC);

  document.querySelector('.org-name').innerHTML = ORGANISATION;
  document.querySelector('.vrach').innerHTML = DOC;
  document.querySelector('.date').innerHTML = DATE;

}