import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './Home.css';

const getCategories = () => {
    const found = new Set();
    blogPosts.forEach(post => {
        if (post.category) found.add(post.category);
    });
    return Array.from(found);
};

const POSTS_PER_PAGE = 3;

const Home = () => {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const categories = getCategories();

    const filterByCategory = (posts, category) => {
        if (!category) return posts;
        return posts.filter(post => post.category === category);
    };

    const filteredPosts = filterByCategory(
        blogPosts
            .filter(post =>
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
                post.author.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) => new Date(b.date) - new Date(a.date)),
        selectedCategory
    );

    const latestPosts = [...blogPosts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, search]);

    return (
        <div className="home-main-grid">
            <div className="home-main-content">
                {selectedCategory && (
                    <div className="category-selected-info">
                        <span>
                            <b>{selectedCategory}</b> kategorisindeki yazılar
                        </span>
                        <button
                            className="category-clear-btn"
                            onClick={() => setSelectedCategory('')}
                        >
                            Tümünü Göster
                        </button>
                    </div>
                )}
                <ul className="blog-list">
                    {paginatedPosts.length === 0 && (
                        <li className="not-found">Sonuç bulunamadı.</li>
                    )}
                    {paginatedPosts.map(post => (
                        <li key={post.id}>
                            <div className="blog-author-row">
                                <div className="blog-list-image-wrapper">
                                    <img
                                        src={post.authorPhoto}
                                        alt={post.author}
                                        className="blog-author-photo"
                                    />
                                </div>
                                <span className="blog-author-name">{post.author}</span>
                            </div>
                            <h2>{post.title}</h2>
                            <p>{post.excerpt}</p>
                            <div className="blog-meta">
                                <span>{post.date}</span>
                            </div>
                            <Link to={`/blog/${post.id}`} className="read-more-link">Devamını Oku</Link>
                        </li>
                    ))}
                </ul>
                {totalPages > 1 && (
                    <div className="pagination">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            &#8592;
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                className={currentPage === i + 1 ? 'active' : ''}
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            &#8594;
                        </button>
                    </div>
                )}
            </div>
            <aside className="home-sidebar">
                <div className="sidebar-section">
                    <div className="searchbar-wrapper">
                        <input
                            type="text"
                            className="searchbar"
                            placeholder="Başlık, özet veya yazar ara..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <span className="searchbar-icon">
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                                <line x1="16.018" y1="16.485" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="sidebar-section">
                    <h3 className="sidebar-title">Son Yazılar</h3>
                    <ul className="sidebar-list">
                        {latestPosts.map(post => (
                            <li key={post.id}>
                                <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                <div className="sidebar-date">{post.date}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sidebar-section">
                    <h3 className="sidebar-title">Kategoriler</h3>
                    <ul className="sidebar-list categories">
                        {categories.length === 0 && <li>Henüz kategori yok</li>}
                        {categories.map(cat => (
                            <li key={cat}>
                                <button
                                    className={`category-badge${selectedCategory === cat ? ' active' : ''}`}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default Home;


