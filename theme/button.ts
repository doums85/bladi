import { CustomFlowbiteTheme } from 'flowbite-react';

const button: CustomFlowbiteTheme['button'] = {
  color: {
    primary:
      'bg-gradient-to-r from-yellow-500 to-yellow-300 hover:bg-gradient-to-br text-white font-semibold rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50',
  },
};

//  'bg-gradient-to-r from-yellow-500 to-yellow-300 hover:bg-gradient-to-br text-white font-semibold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50',
export default button;
