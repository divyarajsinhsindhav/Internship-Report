import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ExternalLink, Calendar, Target, CheckCircle, Building2, Code2, GraduationCap, Briefcase, User, Building, FileText, Download, Clock, MapPin, Star, Laptop } from 'lucide-react';
import projectsData from '../data/projects.json';
import techData from '../data/tech.json';
import weeksData from '../data/weeks.json';
import overviewData from '../data/overview.json';
import documentsData from '../data/documents.json';
import companyData from '../data/about_company.json';
import myWorkData from '../data/my_work.json';

const ContentArea = ({ activeSection }) => {
  const isWeekSection = activeSection.startsWith('Week');
  let content = null;

  if (isWeekSection) {
    const weekNumber = parseInt(activeSection.replace('Week ', ''));
    const weekData = weeksData.find(w => w.week === weekNumber);
    content = weekData ? (
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-slate-500 mb-2 font-medium">
          <Calendar size={20} className="text-blue-600" />
          <span>{weekData.startDate} to {weekData.endDate}</span>
        </div>
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm leading-relaxed text-lg">
          <h3 className="text-xl font-bold mb-4 text-slate-900 border-b border-slate-100 pb-4">Progress Report</h3>
          <p className="text-slate-700">{weekData.content}</p>
        </div>
      </div>
    ) : <p className="text-slate-500">No data available for this week.</p>;
  } else if (activeSection === 'Project') {
    content = (
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {projectsData.map((project, idx) => (
          <div key={idx} className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
            <span className="inline-block bg-blue-50 text-blue-700 text-xs md:text-sm px-3 py-1.5 rounded-full font-bold mb-4 self-start border border-blue-100">{project.Technology}</span>
            <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{project['project description']}</p>
            <a href={project.githublink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 px-5 py-3 rounded-xl transition-all shadow-sm w-max">
              <Globe size={16} /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    );
  } else if (activeSection === 'Technology') {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {techData.map((tech, idx) => (
          <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all">
            <div className="text-blue-600 mb-4 bg-blue-50 w-14 h-14 flex items-center justify-center rounded-2xl border border-blue-100">
              <Code2 size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{tech.title}</h3>
            <p className="text-slate-600 text-base leading-relaxed">{tech.description}</p>
          </div>
        ))}
      </div>
    );
  } else if (activeSection === 'Overview') {
    content = (
      <div className="space-y-8">
        {/* Main Header Block */}
        <div className="bg-white border border-slate-200 border-t-4 border-t-blue-600 p-8 md:p-10 rounded-2xl shadow-sm relative group">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
               <Building2 size={20} />
            </div>
            <span className="text-sm font-bold text-blue-700 tracking-wider uppercase">{overviewData.companyName}</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-snug">{overviewData.title}</h2>
          <p className="text-slate-600 text-base md:text-lg max-w-4xl leading-relaxed">
            {overviewData.description}
          </p>
        </div>
        
        {/* Detail Section */}
        <div className="flex flex-col gap-6">
          
          {/* Project Info Block */}
          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
            <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Project Scope</h3>
            <h4 className="text-2xl font-bold text-slate-900 mb-3">{overviewData.projectTitle}</h4>
            <p className="text-slate-600 text-base leading-relaxed max-w-5xl">
              {overviewData.projectDescription}
            </p>
          </div>

          {/* Key Details Grid */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="px-8 py-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Key References</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {overviewData.details.map((detail, idx) => {
                const labelUpper = detail.label.toUpperCase();
                const Icon = labelUpper.includes('INTERNAL') ? GraduationCap : 
                             labelUpper.includes('EXTERNAL') || labelUpper.includes('MANAGER') ? Briefcase : 
                             labelUpper.includes('STUDENT') ? User : Building;
                             
                return (
                  <div key={idx} className="p-6 lg:p-8 flex flex-col gap-3 hover:bg-slate-50/50 transition-colors">
                    <div className="flex items-center text-slate-400">
                       <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{detail.label}</p>
                      <p className="text-sm font-semibold text-slate-900 leading-snug">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (activeSection === 'Documents') {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {documentsData.map((doc, idx) => {
          const isComplete = doc.status === 'Completed' || doc.status === 'Verified';
          return (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-indigo-50 text-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center border border-indigo-100">
                  <FileText size={24} />
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${isComplete ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'} flex items-center gap-1`}>
                  {isComplete ? <CheckCircle size={14} /> : <Clock size={14} />} {doc.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{doc.title}</h3>
              <div className="text-slate-500 text-sm font-medium flex gap-3 mb-6 flex-grow">
                <span>{doc.type}</span>
                <span>•</span>
                <span>{doc.date}</span>
              </div>
              <a href={doc.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl border border-slate-200 transition-colors">
                <ExternalLink size={16} /> See Document
              </a>
            </div>
          );
        })}
      </div>
    );
  } else if (activeSection === 'About Company') {
    content = (
      <div className="flex flex-col gap-6">
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-[2rem] shadow-sm flex flex-col xl:flex-row gap-10 items-start">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 text-white shadow-md">
               <Building2 size={32} />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{companyData.name}</h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
                {companyData.description}
              </p>
            </div>
          </div>
          
          <div className="w-full xl:w-80 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col gap-5 flex-shrink-0">
             <div className="flex gap-3 items-center">
                <Calendar className="text-slate-400" size={20}/>
                <div>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Founded</p>
                   <p className="text-slate-800 font-semibold">{companyData.founded}</p>
                </div>
             </div>
             <div className="flex gap-3 items-center">
                <Target className="text-slate-400" size={20}/>
                <div>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Industry</p>
                   <p className="text-slate-800 font-semibold">{companyData.industry}</p>
                </div>
             </div>
             <div className="flex gap-3 items-center">
                <MapPin className="text-slate-400" size={20}/>
                <div>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Headquarters</p>
                   <p className="text-slate-800 font-semibold">{companyData.headquarters}</p>
                </div>
             </div>
             <div className="flex gap-3 items-center">
                <Globe className="text-slate-400" size={20}/>
                <div>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Website</p>
                   <a href={companyData.website} target="_blank" rel="noreferrer" className="text-blue-600 font-semibold hover:underline">Visit Site</a>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm">
            <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><Star className="text-amber-500" size={22} fill="currentColor"/> Core Values</h4>
            <div className="flex flex-col gap-4">
               {companyData.coreValues.map((value, idx) => (
                 <div key={idx} className="flex gap-3 items-center p-4 border border-slate-100 rounded-xl bg-slate-50">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-slate-700 font-medium">{value}</span>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm">
            <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><Laptop className="text-indigo-500" size={22}/> Key Products & Solutions</h4>
            <div className="flex flex-col gap-4">
               {companyData.products && companyData.products.map((product, idx) => (
                 <div key={idx} className="p-4 border border-slate-100 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                    <h5 className="font-bold text-slate-800 mb-1">{product.name}</h5>
                    <p className="text-sm text-slate-600 leading-relaxed">{product.description}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (activeSection === 'My Work') {
    content = (
      <div className="flex flex-col gap-6">
        {myWorkData.map((work, idx) => (
          <div key={idx} className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-blue-50 text-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center border border-blue-100 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
               <Laptop size={28} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{work.taskName}</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">{work.description}</p>
              
              <div className="flex flex-wrap gap-2">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 self-center">Skills Applied:</span>
                 {work.toolsUsed.map((tool, tidx) => (
                    <span key={tidx} className="bg-slate-100 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-semibold">{tool}</span>
                 ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col items-center justify-center p-12 text-center rounded-3xl bg-slate-50 border border-slate-200">
        <p className="text-slate-600 max-w-md">Additional content for '{activeSection}' will be provided soon.</p>
      </div>
    );
  }
  return (
    <main className="col-span-12 md:col-span-9 h-full overflow-y-auto p-6 md:p-10 lg:p-12 relative bg-white">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="max-w-7xl mx-auto pb-20"
        >
          <div className="mb-6 md:mb-10 border-b border-slate-200 pb-4 flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              {activeSection}
            </h2>
          </div>
          {content}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default ContentArea;
