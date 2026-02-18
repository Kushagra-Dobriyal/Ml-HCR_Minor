"use client";

import { useState } from "react";
import SideBar from "@/components/common/sidebar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (

    <div className="flex w-full h-screen pt-16 overflow-hidden">
      
      {/* Sidebar Container */}
      <aside
        className={`relative flex-shrink-0 border-r border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 transition-all duration-300 ease-in-out z-10
          ${isCollapsed ? "w-[80px]" : "w-[250px]"}`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-6 z-50 flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 hover:bg-neutral-100 focus:outline-none shadow-sm cursor-pointer"
        >
          {isCollapsed ? <FaChevronRight size={10} /> : <FaChevronLeft size={10} />}
        </button>

        {/* Sidebar Content */}
        <div className="h-full w-full overflow-hidden">
          <SideBar isCollapsed={isCollapsed} />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-full overflow-y-auto p-6 bg-neutral-50 dark:bg-neutral-900 scroll-smooth">
        {children}
      </main>
    </div>
  );
}