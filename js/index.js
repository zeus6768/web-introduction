const userNameInput = document.getElementById('userName');
const registerButton = document.getElementById('register');
const resetButton = document.getElementById('reset');
const guestMessages = document.getElementById('guest-messages');

registerButton.addEventListener('click', () => {
	var guest = document.createElement('p');
  var userName = userNameInput.value;
  var checkboxes = document.querySelectorAll('input[name="movie"]:checked');
	var count = checkboxes.length;
	guest.innerText = userName;
	guestMessages.appendChild(guest);
  alert(userName + '님, 저와 ' + count + '개의 취향이 같으시네요!');
});

resetButton.addEventListener('click', () => {
	userNameInput.value = "";
	document.querySelectorAll('input[name="movie"]:checked').forEach(checkbox => {
		checkbox.checked = false;
	});
})