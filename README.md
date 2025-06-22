# 📰 Post Pulse
**Post Pulse** is a modern blog post management app built with HTML, CSS, and JavaScript. It uses `json-server` to simulate a backend API, enabling full CRUD operations on blog posts. Users can view, create, edit, and delete blog posts in a clean user interface. The application was built for the Flatiron School Phase 1 Code Challenge, showcasing DOM manipulation, API integration, and event handling in JavaScript.

## 📂 Project Structure
The project directory contains: `index.html` - the main HTML file that structures the UI, `db.json` - a mock database file for `json-server`, `css/styles.css` - custom styling for the layout, `src/index.js` - all JavaScript logic including event listeners and fetch requests.

## ✅ Features
Users can view all blog post titles, click a title to see full post details, add a new blog post using a form, and see the first post displayed automatically on page load. Additional features include editing a post's title and content through an edit form, deleting a post from the UI, and persisting all changes using HTTP methods (GET, POST, PATCH, DELETE) with `json-server`.

## 🚀 Getting Started
To run the app locally, ensure Node.js is installed. Clone the repository, navigate to the project folder, and run `npm install -g json-server@0.17.4`. Start the backend with `json-server --watch db.json --port 3000`. Then open `index.html` with Live Server or using `npx live-server` to launch the frontend in your browser.

## 📡 API Endpoints
The base URL is `http://localhost:3000/posts`. Available endpoints: `GET /posts` retrieves all posts, `GET /posts/:id` fetches a single post, `POST /posts` creates a new post, `PATCH /posts/:id` updates an existing post, `DELETE /posts/:id` removes a post.

## 🧪 Sample Data Format
```json
{
  "id": 1,
  "title": "Getting Started with React",
  "author": "Sarah Johnson",
  "content": "Learn how to build UIs with React!",
  "image": "https://placehold.co/600x300?text=React"
}

🧠 Learning Objectives
The project reinforces skills in DOM manipulation, event-driven programming, fetch API usage, and working with a RESTful backend using json-server.

🧰 Technologies Used
HTML5, CSS3, JavaScript (ES6), json-server.

## 👨‍💻 Author

AAAQIL WEST  — [GitHub](https://github.com/Aaaqil-West/)
