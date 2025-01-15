import { useState } from "react";
import PropTypes from 'prop-types';
import { ClipboardList, CheckCheck } from "lucide-react";
import WeatherCard from "./WeatherCard";
import { useDispatch, useSelector } from "react-redux";
import { setTabId } from "../redux/slices/interfaceSlice";

const SideBar = (props) => {
  const dispatch = useDispatch();
  const tabId = useSelector((state) => state.interface.tabId);
  const [activeTab, setActiveTab] = useState(tabId);

  const handleTabChange = (id) => {
    dispatch(setTabId(id));
    setActiveTab(id);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const { username, hidden } = props;
  const tabData = [
    { id: "all", label: "All Tasks", icon: <ClipboardList /> },
    { id: "completed", label: "Completed", icon: <CheckCheck /> },
  ];

  return (
    <aside
      className={`absolute z-20 w-200px bg-transparent  md:relative md:bg-primaryBG-light md:dark:bg-primaryBG-dark md:w-[400px] ${hidden ? 'hidden' : ''}`}
      id="sidebar"
    >
      <div className="bg-secondaryBG-light dark:bg-secondaryBG-dark mt-10 p-6 rounded-lg border-2 border-gray-700 md:border-none shadow-lg">
        <div className="flex flex-col items-center">
          <h2 className="text-1xl font-medium text-primaryBG-dark dark:text-primaryBG-light text-center">
            Hey, {username}
          </h2>
          <div className="w-full px-1 py-4 bg-primaryBG-light dark:bg-primaryBG-dark rounded-lg mt-4 flex flex-col gap-2">
            {tabData.map((tab) => (
              <p
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
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
          <div className="w-full px-1 py-4 rounded-lg mt-4 flex flex-col items-center justify-center gap-2">
            <button onClick={handleLogout} className="px-2 py-3 bg-slate-200 text-red-600 font-semibold text-base rounded-md w-1/2" >Logout</button>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <WeatherCard />
      </div>
    </aside>
  );
};

SideBar.propTypes = {
  username: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
};

export default SideBar;
