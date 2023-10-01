fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        const userContainer = document.querySelector('.user-list');
        users.forEach(user => {
            const userBlock = document.createElement('div');
            userBlock.classList.add('user-block');
            userBlock.innerHTML = `
    <p>ID: ${user.id}, Name: ${user.name}</p>
    <button class="details-button" data-user-id="${user.id}">User-Info- Details</button>
  `;
            userContainer.appendChild(userBlock);
        });
    })


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('details-button')) {
        const userId = event.target.getAttribute('data-user-id');
        window.location.href = `./Html/user-details.html?userId=${userId}`;
    }
});