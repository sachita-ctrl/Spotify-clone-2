// src/components/Navbar.jsx
const Navbar = () => {
  return (
    <div className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold">Welcome</h2>
      <input
        type="text"
        placeholder="Search for songs..."
        className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
      />
    </div>
  );
};

export default Navbar;
