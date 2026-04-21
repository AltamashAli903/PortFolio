const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
           <div>
         <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-blue-700">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-4">
          <a href="#" className="block hover:bg-blue-700 p-2 rounded">
            Dashboard
          </a>
          <a href="#" className="block hover:bg-blue-700 p-2 rounded">
            Users
          </a>
          <a href="#" className="block hover:bg-blue-700 p-2 rounded">
            Settings
          </a>
        </nav>
      </aside>
    </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Logout
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">Card 1</div>
            <div className="bg-white p-6 rounded-lg shadow">Card 2</div>
            <div className="bg-white p-6 rounded-lg shadow">Card 3</div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-200 text-center p-4">
          © 2025 Admin Panel
        </footer>
      </div>
    </div>
  );
};

export default Admin;