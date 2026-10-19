function validEmail(str) {
  //your JS code here.
  const emailPattern = /^\w+(?:[.-]\w+)*@\w+(?:[.-]\w+)*\.\w{2,3}$/;

  if(emailPattern.test(str)){
    return true;
  }
  return false;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));

