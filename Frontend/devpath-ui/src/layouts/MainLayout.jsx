import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";

function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex bg-slate-100">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <main
        className="
          flex-1
          p-10
          transition-all
          duration-300
          ease-in-out
        "
      >
        {children}
      </main>
    </div>
  );
}

export default MainLayout;