import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">W.</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#new">New</a>
        <a href="#popular">Popular</a>
        <a href="#trending">Trending</a>
        <a href="#categories">Categories</a>
      </nav>
    </header>
  );
}

export default Header;
