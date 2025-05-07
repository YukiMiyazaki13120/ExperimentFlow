import React from 'react';
import logo from './images/logo.png';

const Header: React.FC = () => (
  <header style={{
    backgroundColor: '#1a110b',
    color: 'white',
    padding: '1rem',
    position: 'relative', // ← ロゴの絶対位置指定のため
  }}>
    {/* 中央揃えテキスト */}
    <div style={{
      textAlign: 'center'
    }}>
      <h1 style={{ margin: 0, fontSize: '2rem' }}>Tactile Experiment</h1>
      <p style={{ margin: 0, fontSize: '1rem' }}>Human Modeling Interface Group</p>
    </div>

    {/* ロゴを右上に固定 */}
    <img
      src={logo}
      alt="Lab logo"
      style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        height: '48px'
      }}
    />
  </header>
);



export default Header;
