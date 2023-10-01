const userId = new URLSearchParams(window.location.search).get('userId');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(value => value.json())
    .then(posts => {
        const postContainer = document.querySelector('.user-posts');
        posts.forEach(post => {
            const postBlock = document.createElement('div');
            postBlock.classList.add('post-block');
            postBlock.innerHTML = `
    <p>ID: ${post.id}</p>
    <p>Title: ${post.title}</p>
    <button class="post-details-button" data-post-id="${post.id}">Details</button>
  `;
            postContainer.appendChild(postBlock);
        });
    })

document.addEventListener('click', function (event) {

    if (event.target.classList.contains('post-details-button')) {
        const postId = event.target.getAttribute('data-post-id');
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(value => value.json())
            .then(post => {
                const postDetails = document.querySelector('.post-details');
                postDetails.innerHTML = `
        <h1>Comments</h1>
    <div class="post-info">
      <p>ID: ${post.id}</p>
      <p>Title: ${post.title}</p>
      <p>Body: ${post.body}</p>

    </div>
  `;
            })

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(value => value.json())
            .then(comments => {
                const commentsContainer = document.querySelector('.comments');
                commentsContainer.innerHTML = '';
                comments.forEach(comment => {
                    const commentBlock = document.createElement('div');
                    commentBlock.classList.add('comment-block');
                    commentBlock.innerHTML = `
    <p>ID: ${comment.id}</p>
    <p>Name: ${comment.name}</p>
    <p>Email: ${comment.email}</p>
    <p>Body: ${comment.body}</p>
  `;
                    commentsContainer.appendChild(commentBlock);
                });
            })
    }
});
document.getElementById("backPost").addEventListener('click', function () {
    window.location.href = "../index.html";
});