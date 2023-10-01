const userId = new URLSearchParams(window.location.search).get('userId');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const userDetails = document.querySelector('.user-details');
        userDetails.innerHTML = `
    <div class="user-info">
      <p><b>ID:</b> ${user.id}</p>
      <p><b>&nbsp Name:</b> ${user.name}</p>
      <p><b>&nbsp Email:</b> ${user.email}</p>
      <p><b>Address:</b><br> <b>&nbsp Street</b> - ${user.address.street} <br> <b>&nbsp Suite</b> - ${user.address.suite}
                 <br><b>&nbsp City</b> - ${user.address.city}, <br><b>&nbsp Zipcode</b> - ${user.address.zipcode},<br>
              <b>&nbsp Geo:</b>  lat (${user.address.geo.lat}), lng (${user.address.geo.lng})</p>
                <p><b>Phone:</b> ${user.phone}</p>
                <p><b>Website:</b> <a href="${user.website}" target="_new">${user.website}</a></p>
                <p><b>Company:</b><br><b>&nbsp Name</b> - ${user.company.name},
                 <br><b>&nbsp CatchPhrase</b> - ${user.company.catchPhrase},<br>
                   <b>&nbsp Bs</b> -  ${user.company.bs}</p>
      </div>
  `;
    })



const postsButton = document.querySelector('.posts-button');
postsButton.addEventListener('click', () => {
    window.location.href = `post-details.html?userId=${userId}`;
});
document.getElementById("backButton").addEventListener('click', function () {
    window.location.href = "../index.html";
});