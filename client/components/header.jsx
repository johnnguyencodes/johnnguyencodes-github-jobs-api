import React from 'react';

export default function Header({ onResetView, onColorSchemeClick }) {
  return (
    <>
      <header className="header row d-flex justify-content-between m-0">
        <a className="app-logo ml-5 pt-4" href="/#" onClick={onResetView}>
          <h1 className="font-weight-bold text-white">devjobs</h1>
        </a>
        <div className="pt-4 mr-5 mt-2">
          <button
            onClick={onColorSchemeClick}
            className="btn btn-primary color-scheme-button light-hidden"
          >
            <i className="fas fa-sun"></i> Light
          </button>
          <button
            onClick={onColorSchemeClick}
            className="btn btn-primary color-scheme-button dark-hidden"
          >
            <i className="fas fa-moon"></i> Dark
          </button>
        </div>
      </header>
    </>
  );
}
