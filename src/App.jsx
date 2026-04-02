import React, { useState } from 'react';
import TopNavbar from './components/TopNavbar';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';

function App() {
  const [activeSection, setActiveSection] = useState('Overview');

  return (
    <div className="flex-1 w-full h-full flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-200 overflow-hidden">
      <TopNavbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* This container expands to fill remaining height after the navbar */}
      <div className="flex-1 w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 h-full">
          <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          <ContentArea activeSection={activeSection} />
        </div>
      </div>
    </div>
  );
}

export default App;
