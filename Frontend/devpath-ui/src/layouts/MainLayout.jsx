function MainLayout({ children }) {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-8 py-10">
        {children}
      </div>
    </main>
  );
}

export default MainLayout;