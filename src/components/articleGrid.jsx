import React from 'react';

function ArticleGrid() {
  return (
    <section className="article-grid">
      <div className="grid-item">
        <img src="https://via.placeholder.com/150" alt="Retro PCs" />
        <h4>Reviving Retro PCs</h4>
        <p>What happens when old PCs are given modern upgrades?</p>
      </div>
      <div className="grid-item">
        <img src="https://via.placeholder.com/150" alt="Top 10 Laptops" />
        <h4>Top 10 Laptops of 2022</h4>
        <p>Our best picks for various needs and budgets.</p>
      </div>
      <div className="grid-item">
        <img src="https://via.placeholder.com/150" alt="Growth of Gaming" />
        <h4>The Growth of Gaming</h4>
        <p>How the pandemic has sparked fresh opportunities.</p>
      </div>
    </section>
  );
}

export default ArticleGrid;
