import React from 'react';

export default function Header({ onResetView, onColorSchemeClick }) {
  return (
    <>
      <header className="header row d-flex justify-content-between m-0">
        <a className="app-logo" href="/#" onClick={onResetView}>
          <h1 className="font-weight-bold text-white ml-5 pt-4">devjobs</h1>
        </a>
        <div className="pt-4 mr-5">
          <button
            onClick={onColorSchemeClick}
            className="btn btn-primary color-scheme-button light-hidden"
          >
            <i className="fas fa-sun"></i> Toggle Light Mode
          </button>
          <button
            onClick={onColorSchemeClick}
            className="btn btn-primary color-scheme-button dark-hidden"
          >
            <i className="fas fa-moon"></i> Toggle Dark Mode
          </button>
        </div>
      </header>
    </>
  );
}
