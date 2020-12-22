import React from 'react';

export default function Header({ onResetView }) {
  return (
    <header className="header">
      <a className="app-logo" href="/#" onClick={onResetView}><h1 className="font-weight-bold text-white ml-5 pt-4">devjobs</h1></a>
    </header>
  );
}
