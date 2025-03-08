
//Отримання доступу до елементів
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

//додається обробник події
nameInput.addEventListener('click', () => {
    const trimmedName = nameInput.value.trim();
    if (trimmedName === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = trimmedName;
    }
    nameInput.value = '';
});
