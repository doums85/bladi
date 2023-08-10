import { CustomFlowbiteTheme } from "flowbite-react";

 const navbar: CustomFlowbiteTheme['navbar']  = {
    root: {
      base: "px-2 py-2.5 border-gray-900 sm:px-4 "
    },
    link: {
      base: "text-md",
      active: {
        on: "bg-yellow-400  rounded text-text md:bg-transparent md:rounded-none",
        off: " text-gray-400 hover:bg-gray-700 hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-yellow-700 md:hover:bg-transparent md:hover:text-white"
      }
    }
  }
  
  export default navbar;