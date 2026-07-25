import { NavLink } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  FiHome,
  FiMap,
  FiTarget,
  FiUser,
} from "react-icons/fi";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const links = [
    {
      name: "Today",
      path: "/",
      icon: <FiHome size={20} />,
    },
    {
      name: "Journey",
      path: "/journey",
      icon: <FiMap size={20} />,
    },
    {
      name: "Roadmap",
      path: "/roadmap",
      icon: <FiTarget size={20} />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FiUser size={20} />,
    },
  ];

  return (
    <>
      {/* Icon Rail */}
      <aside className="fixed left-0 top-0 z-50 h-screen w-20 bg-white border-r border-slate-200 flex flex-col">

        <div className="flex flex-col items-center pt-5 pb-6 border-b border-slate-200">

          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-slate-100 transition mb-5"
          >
            <HiOutlineBars3 size={24} />
          </button>

          <div className="
            w-12
            h-12
            rounded-2xl
            bg-linear-to-br 
            bg-indigo-600
            to-violet-600
            text-white 
            flex 
            items-center 
            justify-center 
            font-bold
            text-lg
            shadow-md
            "
          >
            DP
          </div>

        </div>

        <nav className="flex-1 pt-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex justify-center items-center h-14 transition ${
                  isActive
                    ? "text-indigo-600"
                    : "text-slate-600 hover:text-indigo-600"
                }`
              }
            >
              {link.icon}
            </NavLink>
          ))}
        </nav>

      </aside>

      {/* Overlay Sidebar */}
      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          h-screen
          w-80
          bg-white
          border-r
          border-slate-200
          shadow-xl
          transition-transform
          duration-300
          ease-in-out
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        <div className="flex items-center gap-5 p-7 border-b border-slate-200">

          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-lg hover:bg-slate-100 transition"
          >
            <HiOutlineBars3 size={24} />
          </button>

          <div>

            <h1 className="text-2xl font-bold text-indigo-600">
              DevPath
            </h1>

            <p className="text-sm text-slate-500">
              Your learning companion
            </p>

          </div>

        </div>

        <nav className="px-5 py-6 space-y-2">

          {links.map((link) => (

            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-3.5 rounded-xl transition ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700 font-semibold"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>

          ))}

        </nav>

      </aside>
    </>
  );
}

export default Sidebar;