const baseURL = "http://127.0.0.1:3000/posts";
const postsContainer = document.getElementById("posts");

const postDetail = {
  title: document.getElementById("detail-title"),
  author: document.getElementById("detail-author"),
  content: document.getElementById("detail-content"),
  image: document.getElementById("detail-image"),
  category: document.getElementById("detail-category"),
  tags: document.getElementById("detail-tags"),
  summary: document.getElementById("detail-summary"),
  readingTime: document.getElementById("detail-reading-time"),
};

const newPostForm = document.getElementById("new-post-form");
const editForm = document.getElementById("edit-post-form");

let currentPostId = null;

function displayPosts() {
  fetch(baseURL)
    .then((res) => res.json())
    .then((posts) => {
      postsContainer.innerHTML = "";
      posts.forEach((post) => {
        const div = document.createElement("div");
        div.textContent = post.title;
        div.classList.add("post-title");
        div.addEventListener("click", () => handlePostClick(post.id));
        postsContainer.appendChild(div);
      });
      if (posts.length) handlePostClick(posts[0].id);
    });
}

function handlePostClick(id) {
  fetch(`${baseURL}/${id}`)
    .then((res) => res.json())
    .then((post) => {
      currentPostId = post.id;
      postDetail.title.textContent = post.title;
      postDetail.author.textContent = post.author;
      postDetail.content.textContent = post.content;
      postDetail.image.src = post.image || "https://images.pexels.com/photos/2619490/pexels-photo-2619490.jpeg";
      postDetail.category.textContent = post.category || "N/A";
      postDetail.tags.textContent = (post.tags || []).join(", ");
      postDetail.summary.textContent = post.summary || "No summary";
      postDetail.readingTime.textContent = post.readingTime ? `${post.readingTime} min read` : "";
    });
}

function addNewPostListener() {
  newPostForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newPost = {
      title: document.getElementById("new-title").value,
      author: document.getElementById("new-author").value,
      content: document.getElementById("new-content").value,
      image: document.getElementById("new-image").value || "https://images.pexels.com/photos/2619490/pexels-photo-2619490.jpeg",
      category: document.getElementById("new-category").value,
      tags: document.getElementById("new-tags").value.split(",").map(tag => tag.trim()),
      summary: document.getElementById("new-summary").value,
      readingTime: parseInt(document.getElementById("new-reading-time").value, 10) || null,
    };

    fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then(() => {
        displayPosts();
        newPostForm.reset();
      });
  });
}

document.getElementById("edit-btn").addEventListener("click", () => {
  editForm.classList.remove("hidden");
  fetch(`${baseURL}/${currentPostId}`)
    .then((res) => res.json())
    .then((post) => {
      document.getElementById("edit-title").value = post.title;
      document.getElementById("edit-content").value = post.content;
    });
});

document.getElementById("cancel-edit").addEventListener("click", () => {
  editForm.classList.add("hidden");
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const updated = {
    title: document.getElementById("edit-title").value,
    content: document.getElementById("edit-content").value,
  };

  fetch(`${baseURL}/${currentPostId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updated),
  })
    .then((res) => res.json())
    .then(() => {
      editForm.classList.add("hidden");
      displayPosts();
      handlePostClick(currentPostId);
    });
});

document.getElementById("delete-btn").addEventListener("click", () => {
  fetch(`${baseURL}/${currentPostId}`, {
    method: "DELETE",
  }).then(() => {
    currentPostId = null;
    for (let key in postDetail) {
      if (key === "image") {
        postDetail.image.src = "";
      } else {
        postDetail[key].textContent = "";
      }
    }
    displayPosts();
  });
});

function main() {
  displayPosts();
  addNewPostListener();
}

document.addEventListener("DOMContentLoaded", main);
