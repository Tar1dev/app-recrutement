const postsTemplate = document.querySelector("[data-posts-template]");
const offersCardContainer = document.querySelector("[offers-cards-container]");
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", e => {
    const value = e.target.value;
    posts.forEach(post => {
        const isVisible = post.title.includes(value) || post.body.includes(value);
        post.element.classList.toggle("d-none", !isVisible);
    });
});

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => {
    posts = data.map(post => {
        const card = postsTemplate.content.cloneNode(true).children[0];
        const title = card.querySelector(".card-title");
        const body = card.querySelector(".card-text");
        title.textContent = post.title;
        body.textContent = post.body;
        offersCardContainer.append(card);
        return {title: post.title, body: post.body, element: card};
    });
})
.catch(err => console.log(err));
