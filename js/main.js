var display = document.getElementById('display');
var btns = document.querySelectorAll('.btn button'); 

for(var i = 0; i < btns.length; i++){
    var btn = btns[i];  

    btn.addEventListener('click', function(e){
        var text = e.target.innerText;

        if(text === '='){
            var result = eval(display.value);
            display.value = result;
        }
        else if(text === 'AC'){
            display.value = '';
        }
        else{
            display.value += text;
        }
    });   
}



// let form = document.getElementById('mainForm');
//     console.log(form);
// form.addEventListener('submit', function(event){
//     event.preventDefault();

//     var fName = event.target.name.value;
//     var email = event.target.email.value;
//     var subject = event.target.subject.value;
//     var password = event.target.password.value;
//     var info = event.target.textarea.value;
    
//     let informaton = {
//         FullName : fName,
//         Email : email,
//         Subject : subject,
//         Password : password,
//         Massege : info,
//     };

//     console.log(informaton);

// });




