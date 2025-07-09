// src/components/Sidebar.jsx
const Sidebar = () => {
  return (
    <div className="w-60 bg-gray-900 text-white h-screen p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-8">🎵 Spotify 2.0</h1>
      <nav className="flex flex-col gap-4 text-lg">
        <button className="hover:text-green-500">Home</button>
        <button className="hover:text-green-500">Search</button>
        <button className="hover:text-green-500">Your Library</button>
        <button className="hover:text-green-500">Liked Songs</button>
      </nav>
    </div>
  );
};

export default Sidebar;
