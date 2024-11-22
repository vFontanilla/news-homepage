import React from 'react';
import Header from './components/header';
import MainArticle from './components/mainArticle';
import Sidebar from './components/sidebar';
import ArticleGrid from './components/articleGrid';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <MainArticle />
        <Sidebar />
      </div>
      <ArticleGrid />
    </div>
  );
}

export default App;
