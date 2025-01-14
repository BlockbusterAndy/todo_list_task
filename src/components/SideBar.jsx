import { useState } from "react";
import { ClipboardList, Calendar, Star, CheckCheck } from "lucide-react";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabData = [
    { id: "all", label: "All Tasks", icon: <ClipboardList /> },
    { id: "today", label: "Today", icon: <Calendar /> },
    { id: "important", label: "Important", icon: <Star /> },
    { id: "completed", label: "Completed", icon: <CheckCheck /> },
  ];

  return (
    <aside className="bg-primaryBG-light dark:bg-primaryBG-dark w-[400px] h-screen relative" id="sidebar">
      <div className="bg-secondaryBG-light dark:bg-secondaryBG-dark mt-10 p-6 rounded-lg">
        <div className="flex flex-col items-center">
          <h2 className="text-1xl font-medium text-primaryBG-dark dark:text-primaryBG-light text-center">
            Hey, User
          </h2>
          <div className="w-full px-1 py-4 bg-primaryBG-light dark:bg-primaryBG-dark rounded-lg mt-4 flex flex-col gap-2">
            {tabData.map((tab) => (
              <p
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-medium text-lg rounded-lg flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-[#35793729] text-[#357937]"
                    : "text-primaryBG-dark dark:text-primaryBG-light"
                } cursor-pointer`}
              >
                {tab.icon} {tab.label}
              </p>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
