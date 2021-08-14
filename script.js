var DOB = document.querySelector('.birth-date');

var NUM = document.querySelector(".lucky-num");

var btn = document.querySelector(".check");

var error = document.querySelector('.error');

var opt = document.querySelector('.output');

var closeNotice = document.querySelector("#close");

closeNotice.addEventListener('click' , () => {
  document.querySelector('.notice').style.display = "none";
})

btn.addEventListener('click', () => {
    
    clearError();
  
    opt.style.display = "none";

    var dob = DOB.value;

    var num = NUM.value;

    console.log(num,dob);

    if(dob && num && num>0)
    {
    }
    else
    {
      showError();
      return;
    }

    dob = dob.replaceAll("-");

    var sum = 0;

    for(var n in dob)
    {
        sum+=Number(n);
    }

    num = Math.abs(Number(num));

    if(sum%num==0)
      opt.innerHTML = ("Hurrah 🥳 ! Your DOB is lucky");
    else
      opt.innerHTML = ("No , It's not lucky enough ! 😭☹");
  
   opt.style.display = "block";

});

function showError(){
  error.style.display = "block";
}

function clearError(){
  error.style.display = "none";
}
