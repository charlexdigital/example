import React from 'react';

function Header() {
  return (
    <header className="App-header">
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Happy Mate - Aussie delights in one place" width={200} />
    </header>
  );
}

export default Header;