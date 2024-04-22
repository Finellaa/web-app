// Layout.js
import React from 'react';

function Layout({ children }) {
  return (
    <div className="container">
      <header>
        <h1>My GitHub Portfolio</h1>
        {/* Add navigation or other header elements */}
      </header>
      <main>{children}</main>
      <footer>
        {/* Add footer content */}
      </footer>
    </div>
  );
}

export default Layout;
