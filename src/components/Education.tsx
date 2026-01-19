import { education } from "../data/resume";
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaBook, FaStar, FaCode, FaDatabase, FaCloud } from "react-icons/fa";
import { SiPython, SiMysql, SiAmazon } from "react-icons/si";

const getCourseIcon = (course: string) => {
  const courseLower = course.toLowerCase();
  if (courseLower.includes('python')) return SiPython;
  if (courseLower.includes('java')) return FaCode;
  if (courseLower.includes('dbms') || courseLower.includes('database')) return SiMysql;
  if (courseLower.includes('aws') || courseLower.includes('cloud')) return SiAmazon;
  if (courseLower.includes('data structures')) return FaDatabase;
  if (courseLower.includes('software')) return FaCode;
  if (courseLower.includes('operating')) return FaCode;
  if (courseLower.includes('networks')) return FaCloud;
  return FaBook; // default
};

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
              <FaGraduationCap className="text-2xl text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-4xl font-bold gradient-text">Education</h2>
              <p className="text-cyan-400 font-medium">Academic Journey</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building a strong foundation in computer science through comprehensive academic programs and hands-on learning experiences
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="card p-8">
                {/* Header Section */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${index === 0 ? 'from-blue-500 to-purple-600' : 'from-green-500 to-teal-600'} rounded-xl flex items-center justify-center`}>
                      {index === 0 ? <FaUniversity className="text-2xl text-white" /> : <FaGraduationCap className="text-2xl text-white" />}
                    </div>
                    <div>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${index === 0 ? 'from-blue-500 to-purple-600' : 'from-green-500 to-teal-600'} text-white text-sm font-semibold mb-2`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        {index === 0 ? 'In Progress' : 'Completed'}
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-cyan-400 font-semibold text-lg">{edu.school}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <FaCalendarAlt />
                      <span>{edu.period}</span>
                    </div>
                    <div className={`text-lg font-bold ${index === 0 ? 'text-blue-400' : 'text-green-400'}`}>
                      {index === 0 ? 'Expected 2026' : 'First Class'}
                    </div>
                  </div>
                </div>

                {/* Coursework */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FaBook className={index === 0 ? 'text-blue-400' : 'text-green-400'} />
                    Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {edu.coursework.map((course, courseIndex) => {
                      const IconComponent = getCourseIcon(course);
                      return (
                        <div
                          key={courseIndex}
                          className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg border border-cyan-400/20 hover:border-cyan-400/50 hover:bg-slate-800 transition-all duration-300"
                        >
                          <IconComponent className="text-lg text-cyan-400" />
                          <span className="text-white font-medium text-sm">{course}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Excellence Summary */}
        <div className="mt-16 card p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Academic Excellence</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Years of Study", value: "6+", icon: FaCalendarAlt, color: "text-blue-400" },
              { label: "Programming Languages", value: "5+", icon: FaCode, color: "text-green-400" },
              { label: "Core Subjects", value: "15+", icon: FaBook, color: "text-purple-400" },
              { label: "Academic Performance", value: "Excellent", icon: FaStar, color: "text-yellow-400" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-800/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className={`text-2xl ${stat.color}`} />
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}