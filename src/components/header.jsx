import { AlignJustify } from "lucide-react";
import { X } from "lucide-react"; // Importing the X (close) icon
import { useState } from "react";
import W from "/news-homepage/src/images/W..svg";

const Headerpage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-white">
        <img src={W} alt="Logo" width={40} />

        <AlignJustify
          className="cursor-pointer md:hidden"
          onClick={toggleSidebar}
        />

        <div className="hidden md:flex space-x-4 mr-16">
          <button className="py-1 px-4  nav  text-left">Home</button>
          <button className="py-1 px-4 nav  text-left">New</button>
          <button className="py-1 px-4 nav  text-left">Popular</button>
          <button className="py-1 px-4 nav  text-left">Trending</button>
          <button className="py-1 px-4 nav  text-left">Categories</button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <X
            className="cursor-pointer text-[#00001A]"
            style={{ width: "40px", height: "40px" }}
            onClick={toggleSidebar}
          />
        </div>

        <div className="flex flex-col items-start space-y-4 mt-8 ml-4">
          <button className="py-1 px-4 w-full nav text-left">Home</button>
          <button className="py-1 px-4 w-full nav text-left">New</button>
          <button className="py-1 px-4 w-full nav text-left">Popular</button>
          <button className="py-1 px-4 w-full nav text-left">Trending</button>
          <button className="py-1 px-4 w-full nav text-left">Categories</button>
        </div>
      </div>
    </div>
  );
};

export default Headerpage;
