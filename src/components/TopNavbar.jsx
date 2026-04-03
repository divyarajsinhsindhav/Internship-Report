import { motion } from 'framer-motion';
import { Layers, Briefcase, Code2, FileText, MonitorCheck } from 'lucide-react';

const TopNavbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'Overview', icon: <Layers size={18} /> },
    { id: 'Project', icon: <Briefcase size={18} /> },
    { id: 'Technology', icon: <Code2 size={18} /> },
    { id: 'Documents', icon: <FileText size={18} /> },
    { id: 'My Work', icon: <MonitorCheck size={18} /> },
  ];

  return (
    <nav className="flex-none bg-white border-b border-slate-200 shadow-sm relative z-50">
      <div className="w-full px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-4 lg:py-5 space-y-4 lg:space-y-0">
          <div className="flex flex-col">
            <p className="text-base font-extrabold text-slate-800 tracking-tight">
              Internship Portfolio
            </p>
            <h1 className="text-2xl md:text-3xl text-blue-600 font-semibold tracking-wide">Divyarajsinh Sindhav</h1>
          </div>
          
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`relative flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex-grow sm:flex-grow-0 ${
                  activeSection === item.id
                    ? 'text-blue-700 bg-blue-50 shadow-sm border border-blue-200/50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent'
                }`}
              >
                {item.icon}
                <span className="hidden sm:block md:hidden xl:block">{item.id}</span>
                <span className="block sm:hidden xl:hidden">{item.id}</span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 rounded-full border border-blue-300 pointer-events-none"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default TopNavbar;
