import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

 const navItems = [
  { name: "Home", to: "/" },
  { name: "Skills", to: "/skills" },
  { name: "Education", to: "/education" },
  { name: "Projects", to: "/projects" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

  return (
    <nav className="bg-white border-b border-gray-200 h-16 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-500 text-white font-bold">
            AA
          </div>

          <div>
            <p className="text-xs text-gray-500">PORTFOLIO</p>
            <h1 className="text-sm font-semibold text-gray-900">
              Altamash Ali
            </h1>
          </div>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
  {navItems.map((item, i) => (
    <li key={i}>
     <NavLink
  to={item.to}
  className={({ isActive }) =>
    `group relative inline-block font-medium transition-colors duration-300 ${
      isActive ? "text-black" : "text-gray-700 hover:text-black"
    }`
  }
>
  {({ isActive }) => (
    <>
      {item.name}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-500 transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </>
  )}
</NavLink>
    </li>
  ))}
</ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow">
          <ul
            className="flex flex-col p-4 gap-2"
            onClick={() => setIsOpen(false)}
          >
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.to}
                  className="block py-2 text-gray-700 hover:text-emerald-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;