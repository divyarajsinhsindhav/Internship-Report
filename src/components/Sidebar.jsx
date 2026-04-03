import { Building2, LayoutDashboard, Calendar } from 'lucide-react';
import weeksData from '../data/weeks.json';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const sidebarItems = [
    { id: 'Overview', icon: <LayoutDashboard size={18} /> },
    { id: 'About Company', icon: <Building2 size={18} /> },
    ...weeksData.map(week => ({
      id: `Week ${week.week}`,
      icon: <Calendar size={18} />
    }))
  ];

  return (
    <aside className="col-span-12 md:col-span-3 bg-slate-50 border-r-0 md:border-r border-b md:border-b-0 border-slate-200 h-auto md:h-full overflow-x-auto md:overflow-y-auto scrollbar-thin">
      <div className="flex flex-row md:flex-col space-x-3 md:space-x-0 md:space-y-1 p-4 w-max md:w-full pb-4 md:pb-8">
        {sidebarItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap md:whitespace-normal duration-200 text-left ${
                isActive
                  ? 'bg-white text-blue-700 font-bold border border-slate-200 shadow-sm'
                  : 'text-slate-600 hover:bg-slate-200/60 font-medium border border-transparent'
              }`}
            >
              <div className={isActive ? 'text-blue-600' : 'text-slate-400'}>
                {item.icon}
              </div>
              {item.id}
            </button>
          );
        })}
      </div>
    </aside>
  );
};
export default Sidebar;
