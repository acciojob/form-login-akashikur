function getFormvalue() {
    //Write your code here
	const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;

  // Check if the first and last name fields are not empty
  if (firstName && lastName) {
    alert(`${firstName} ${lastName}`);
  } 

}
