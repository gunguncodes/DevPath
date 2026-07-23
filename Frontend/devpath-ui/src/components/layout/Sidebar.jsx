import { NavLink } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  FiHome,
  FiMap,
  FiTarget,
  FiUser,
} from "react-icons/fi";

function Sidebar({ collapsed, setCollapsed }) {
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
<aside
    className={`
    ${collapsed ? "w-20" : "w-72"}
    bg-white
    border-r
    border-slate-200
    flex
    flex-col
    transition-all
    duration-300
    ease-in-out
    `}
    >

   <div
  className={`
    border-b
    border-slate-200
    p-5
    ${collapsed ? "flex justify-center" : ""}
  `}
>
  {collapsed ? (
    <button
      onClick={() => setCollapsed(!collapsed)}
      className="p-2 rounded-lg hover:bg-slate-100 transition"
    >
      <HiOutlineBars3 size={24} />
    </button>
  ) : (
    <>
      <div className="flex items-start gap-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
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
    </>
  )}
</div>

      <nav className="flex-1 px-5 py-8 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `
              flex
              items-center
              ${collapsed ? "justify-center" : "gap-3"}
              py-3
              px-4
              rounded-xl
              transition-all
              duration-300

              ${
              isActive
              ? "bg-indigo-100 text-indigo-700 font-semibold"
              : "text-slate-600 hover:bg-slate-100"
              }
              `
              }
           >
            {link.icon}
            {!collapsed && link.name}
          </NavLink>
        ))}
      </nav>

    <div className="border-t border-slate-200 p-6">
        {!collapsed && (
        <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-xs text-slate-500">
                Logged in as
            </p>

            <h3 className="font-semibold mt-1">
                Gungun
            </h3>
        </div>
        )}
    </div>
</aside>
  );
}

export default Sidebar;