import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>New</h3>
      <ul>
        <li>
          <strong>Hydrogen VS Electric Cars</strong>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </li>
        <li>
          <strong>The Downsides of AI Artistry</strong>
          <p>What are the possible adverse effects of on-demand AI image generation?</p>
        </li>
        <li>
          <strong>Is VC Funding Drying Up?</strong>
          <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
