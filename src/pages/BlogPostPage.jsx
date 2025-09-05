import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';
import './BlogPostPage.css';

const BlogPostPage = () => {
    const { id } = useParams();
    const post = blogPosts.find((p) => p.id === Number(id));

    if (!post) return <div>Yazı bulunamadı.</div>;

    return (
        <div className="blog-post-container">
            <div className="blogpost-author-row">
                <img
                    src={post.authorPhoto}
                    alt={post.author}
                    className="blogpost-author-photo"
                />
                <span className="blogpost-author-name">{post.author}</span>
            </div>
            <h1>{post.title}</h1>
            <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
            </div>
            <div className="blog-content">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
            <Link to="/" className="back-link">Geri Dön</Link>
        </div>
    );
};

export default BlogPostPage;