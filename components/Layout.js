import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl">My Landing Page</h1>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2024 My Landing Page
      </footer>
    </div>
  );
}
