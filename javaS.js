const nameeOrEmail = document.getElementById('nameeOrEmail')
const password = document.getElementById('password')
const loginform = document.getElementById('loginform')
const error1 = document.getElementById('vError1')
const error2 = document.getElementById('vError2')

loginform.addEventListener('submit', (e) => {
  console.log("hello");
  let messages = []

  if (nameeOrEmail.value === '' || nameeOrEmail.value == null) {
    messages.push('Name is required')
  }
  var ch = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  var mail = document.getElementById('nameeOrEmail').value;
  var valid = ch.test(mail);
    if (valid != true) {
       messages.push('It is not correct email');
    }
    else {
        messages.push('');
    }

  if (messages.length > 0) {
   e.preventDefault()
    error1.innerText = messages.join(', ')
    messages.resetForm;
  }
})


loginform.addEventListener('submit', (e) => {
  console.log("hello");
  let messages = []
  if (password.value.length <= 7) {
    messages.push('Password must be longer than 7 characters')
  }
  if (password.value === 'password') {
    messages.push('You password is easy, please make it more difficult')
  }
  else {
    // messages.clear;
    messages.push('')
  }

  if (messages.length > 0) {
   e.preventDefault()
    error2.innerText = messages.join(', ')
  }
})







































     //
     //
     //
     //
     //
     // let form = document.querySelector('.form'),
     //     formInputs = document.querySelectorAll('.check'),
     //     inputEmail = document.querySelector('.userName'),
     //
     //
     //
     // function validateEmail(email) {
     //     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     //     return re.test(String(email).toLowerCase());
     // }
     //
     // function validateCountry(country) {
     //     let re = new RegExp('.co$');
     //     return re.test(String(country).toLowerCase());
     // }
     //
     // function validatePhone(phone) {
     //     let re = /^[0-9\s]*$/;
     //     return re.test(String(phone));
     // }
     //
     // form.onsubmit = function () {
     //     let emailVal = inputEmail.value,
     //         phoneVal = inputPhone.value,
     //         emptyInputs = Array.from(formInputs).filter(input => input.value === '');
     //
     //     formInputs.forEach(function (input) {
     //         if (input.value === '') {
     //             input.classList.add('error');
     //
     //         } else {
     //             input.classList.remove('error');
     //         }
     //     });
     //
     //     if (emptyInputs.length !== 0) {
     //         console.log('inputs not filled');
     //         return false;
     //     }
     //
     //     if(!validateEmail(emailVal)) {
     //         console.log('email not valid');
     //         inputEmail.classList.add('error');
     //         return false;
     //     } else {
     //         inputEmail.classList.remove('error');
     //     }
     //
     //     if (validateCountry(emailVal)) {
     //         console.log('email from Columbia');
     //         inputEmail.classList.add('error');
     //         return false;
     //     } else {
     //         inputEmail.classList.remove('error');
     //     }
     // }
























































































































































     // let wbtn = document.getElementById('formSignIn__button');

     // function checker() {
       //   item = true;
       //   if (document.getElementById("nnu").value == "") {
         //     item = false;
         //     document.getElementById("vError").classList.remove("to-hide");
         //   }
         //   else { item = true;
           //     if (!document.getElementById("vError").classList.contains("to-hide"))
           //     document.getElementById("vError").classList.add("to-hide");
           //   }  return item;
           // }

           // wbtn.onclick = function(){
             //     console.log("Hello sdf");
             //   if (checker()) {
               //     // window.location.reload ()
               //   }
               // }
















     //
     // const form = document.getElementById('form');
     // const email = document.getElementById('nnuu');
     // const password = document.getElementById('password');
     //
     // form.addEventListener('submit', e => {
     // 	e.preventDefault();
     //
     // 	checkInputs();
     // });
     //
     // function checkInputs() {
     // 	const emailValue = email.value.trim();
     // 	const passwordValue = password.value.trim();
     //
     //
     // 	if(emailValue === '') {
     // 		setErrorFor(email, 'Email cannot be blank');
     // 	} else if (!isEmail(emailValue)) {
     // 		setErrorFor(email, 'Not a valid email');
     // 	} else {
     // 		setSuccessFor(email);
     // 	}
     //
     // 	if(passwordValue === '') {
     // 		setErrorFor(password, 'Password cannot be blank');
     // 	} else {
     // 		setSuccessFor(password);
     // 	}
     //
     // }
     //
     // function setErrorFor(input, message) {
     // 	const formControl = input.parentElement;
     // 	const small = formControl.querySelector('small');
     // 	formControl.className = 'form-control error';
     // 	small.innerText = message;
     // }
     //
     // function setSuccessFor(input) {
     // 	const formControl = input.parentElement;
     // 	formControl.className = 'form-control success';
     // }
     //
     // function isEmail(email) {
     // 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
     // }
