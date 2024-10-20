import React from 'react';

function Footer() {
      const currentYear = new Date().getFullYear(); // Get the current year
    
      return (
        <footer className="App-footer">
          <p>&copy; {currentYear} Cocktail Finder | Built by charlex</p>
        </footer>
      );
    }

export default Footer;