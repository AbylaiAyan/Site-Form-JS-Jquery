const nameeOrEmail = document.getElementById('nameeOrEmail')
const password = document.getElementById('password')
const userName = document.getElementById('name')
const contactNumber = document.getElementById('numberC')
const loginform = document.getElementById('loginform')
const error1 = document.getElementById('vError1')
const error2 = document.getElementById('vError2')
const error3 = document.getElementById('vError3')
const error4 = document.getElementById('vError4')

loginform.addEventListener('submit', (e) => {
  console.log("hello1");
  let messages = []

  if (nameeOrEmail.value === '' || nameeOrEmail.value == null) {
    messages.push('Name is required')
  }
  var ch = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  var mail = document.getElementById('nameeOrEmail').value;
  var valid = ch.test(mail);
    if (valid != true) {
       messages.push('email is not correct!');
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
  console.log("hello2");
  let messages = []

  if (userName.value === '' || userName.value == null) {
    messages.push('Write you name!')
  }
  else {
    messages.push('')
  }
  if (messages.length > 0) {
   e.preventDefault()
    error2.innerText = messages.join(', ')
    messages.resetForm;
  }
})

loginform.addEventListener('submit', (e) => {
  console.log("hello3");
  let messages = []
  var re = /^\d[\d\(\)\ -]{4,14}\d$/;
  var phone = document.getElementById('numberC').value;
  var valid = re.test(phone);
  if (contactNumber.value === '' || contactNumber.value == null) {
    messages.push('Write you number')
  }
  else if (valid != true) {
        messages.push('');
       messages.push('number is not correct!');
    }
    else {
        messages.push('');
    }

  if (messages.length > 0) {
   e.preventDefault()
    error3.innerText = messages.join(' ')
    messages.resetForm;
  }
})

loginform.addEventListener('submit', (e) => {
  console.log("hello4");
  let messages = []
  if (password.value.length <= 7) {
    messages.push('Password must be longer than 7 characters')
  }
  else if (password.value === 'password') {
    messages.push('You password is easy, please make it more difficult')
  }
  else {
    // messages.clear;
    messages.push('')
  }

  if (messages.length > 0) {
   e.preventDefault()
    error4.innerText = messages.join(', ')
  }
})









// console.log("Hello");
// $(document).ready(function(){
//            $("#loginform").validate({
//
//              rules:{
//                 name:{
//                   required: true,
//                   minlength: 4,
//                   maxlength: 16,
//                 },
//                 password:{
//                   required: true,
//                   minlength: 6,
//                   maxlength: 16,
//                 },
//              },
//              messages:{
//                name:{
//                  required: "Это поле обязательно для заполнения",
//                  minlength: "Логин должен быть минимум 4 символа",
//                  maxlength: "Максимальное число символов - 16",
//              },
//                password:{
//                required: "Это поле обязательно для заполнения",
//                minlength: "Пароль должен быть минимум 6 символа",
//                maxlength: "Пароль должен быть максимум 16 символов",
//                },
//              }
//           });
//
// });
