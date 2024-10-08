// App.jsx
import React from 'react';
import AppRedux from './components/Redux/AppRedux.jsx';
import { Provider } from 'react-redux';
import store from './Store/Store.js';

// Components for project overview
const Hook = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow mt-4">
      <h2 className="text-[12px] font-bold">Hook</h2>
      <p className="text-[10px]">
        This component demonstrates the use of React Hooks, enabling functional components to manage state and side effects seamlessly.
      </p>

      <h2 className="text-[12px] font-bold mt-2">How to Use It</h2>
      <p className="text-[10px]">
        Simply import and use the Hook component to manage state and lifecycle methods in your functional components.
      </p>

      <h2 className="text-[12px] font-bold mt-2">Technologies Used</h2>
      <p className="text-[10px]">
        - React <br />
        - Hooks API
      </p>

      <h2 className="text-[12px] font-bold mt-2">Achievements After Making This</h2>
      <p className="text-[10px]">
        - Improved understanding of functional components and state management.
      </p>
    </div>
  );
};

const Card = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow mt-4">
      <h2 className="text-[12px] font-bold">Card</h2>
      <p className="text-[10px]">
        This component is designed to display product information in a card format, enhancing user experience with a clean layout.
      </p>

      <h2 className="text-[12px] font-bold mt-2">How to Use It</h2>
      <p className="text-[10px]">
        Use the Card component to showcase items, providing details like images, titles, and descriptions for better engagement.
      </p>

      <h2 className="text-[12px] font-bold mt-2">Technologies Used</h2>
      <p className="text-[10px]">
        - React <br />
        - Tailwind CSS
      </p>

      <h2 className="text-[12px] font-bold mt-2">Achievements After Making This</h2>
      <p className="text-[10px]">
        - Enhanced skills in component design and responsive layout.
      </p>
    </div>
  );
};

const AppRouterDom = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow mt-4">
      <h2 className="text-[12px] font-bold">AppRouterDom</h2>
      <p className="text-[10px]">
        This component handles the routing of the application, allowing users to navigate between different pages smoothly.
      </p>

      <h2 className="text-[12px] font-bold mt-2">How to Use It</h2>
      <p className="text-[10px]">
        Integrate the AppRouterDom component to manage your application's routing structure efficiently.
      </p>

      <h2 className="text-[12px] font-bold mt-2">Technologies Used</h2>
      <p className="text-[10px]">
        - React Router
      </p>

      <h2 className="text-[12px] font-bold mt-2">Achievements After Making This</h2>
      <p className="text-[10px]">
        - Gained a better understanding of client-side routing and navigation.
      </p>
    </div>
  );
};

const UserContextProvide = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow mt-4">
      <h2 className="text-[12px] font-bold">UserContextProvide</h2>
      <p className="text-[10px]">
        This component provides user context throughout the application, enabling easy access to user data and authentication state.
      </p>

      <h2 className="text-[12px] font-bold mt-2">How to Use It</h2>
      <p className="text-[10px]">
        Wrap your components within UserContextProvide to access user information from any nested component.
      </p>

      <h2 className="text-[12px] font-bold mt-2">Technologies Used</h2>
      <p className="text-[10px]">
        - React Context API
      </p>

      <h2 className="text-[12px] font-bold mt-2">Achievements After Making This</h2>
      <p className="text-[10px]">
        - Improved state management across components without prop drilling.
      </p>
    </div>
  );
};

const ThemeProvide = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow mt-4">
      <h2 className="text-[12px] font-bold">ThemeProvide</h2>
      <p className="text-[10px]">
        This component allows the application to handle theme settings, enabling dark and light mode support.
      </p>

      <h2 className="text-[12px] font-bold mt-2">How to Use It</h2>
      <p className="text-[10px]">
        Use the ThemeProvide component to toggle between different themes and maintain consistent styling across the app.
      </p>

      <h2 className="text-[12px] font-bold mt-2">Technologies Used</h2>
      <p className="text-[10px]">
        - React Context API
      </p>

      <h2 className="text-[12px] font-bold mt-2">Achievements After Making This</h2>
      <p className="text-[10px]">
        - Enhanced user experience by providing theme customization options.
      </p>
    </div>
  );
};

// App Component
export default function App() {
  return (
    <Provider store={store}>
      <AppRedux />
      {/* Project Component Descriptions */}
      <div className="p-4">
        <Hook />
        <Card />
        <AppRouterDom />
        <UserContextProvide />
        <ThemeProvide />
      </div>
    </Provider>
  );
}
