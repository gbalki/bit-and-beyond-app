# React Blog Application

This is a simple blog application built with React. It features a homepage that lists blog posts, a blog detail page for individual posts, an about page, and a contact page. The application utilizes React Router for navigation between different pages.

## Project Structure

```
react-blog-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Footer.jsx
│   │   └── NavigationMenu.jsx
│   ├── data
│   │   └── blogPosts.js
│   ├── pages
│   │   ├── About.jsx
│   │   ├── BlogDetail.jsx
│   │   ├── Contact.jsx
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── index.js
│   └── README.md
├── package.json
└── README.md
```

## Features

- **Homepage**: Displays a list of blog posts with titles, excerpts, and publication dates.
- **Blog Detail Page**: Shows the full content of a selected blog post.
- **About Page**: Provides information about the blog or the author.
- **Contact Page**: Contains contact information and social media links.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd react-blog-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Technologies Used

- React
- React Router
- JavaScript
- HTML
- CSS

## License

This project is licensed under the MIT License.