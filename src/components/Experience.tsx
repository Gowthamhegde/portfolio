import { experience } from "../data/resume";
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaAws, FaCloud, FaUsers, FaRocket } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-600 rounded-xl flex items-center justify-center">
              <FaBriefcase className="text-2xl text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-4xl font-bold gradient-text">Professional Experience</h2>
              <p className="text-cyan-400 font-medium">Career Journey</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hands-on experience in cloud architecture and infrastructure design, working with enterprise-level AWS services and modern DevOps practices
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="card p-8">
                {/* Header Section */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <FaCloud className="text-2xl text-white" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold mb-2">
                        <FaRocket className="text-xs" />
                        Internship
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-cyan-400 font-semibold text-lg">
                        <FaBuilding />
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <FaCalendarAlt />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <FaMapMarkerAlt />
                      <span>Hubli, Karnataka</span>
                    </div>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FaAws className="text-blue-400" />
                    Key Responsibilities & Achievements
                  </h4>
                  <div className="grid gap-3">
                    {exp.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FaUsers className="text-blue-400" />
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "EC2", "S3", "VPC", "Cloud Architecture", "Infrastructure Design", "Security Best Practices"].map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-800/50 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/30 hover:border-cyan-400 hover:bg-slate-800 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Status */}
        <div className="mt-16 text-center">
          <div className="card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for New Challenges</h3>
            <p className="text-gray-300 text-lg mb-6">
              Seeking opportunities to apply my cloud architecture expertise and contribute to innovative projects in DevOps, Cloud Engineering, or Software Development roles.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FaCloud className="text-xl text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">Cloud Engineer</h4>
                <p className="text-gray-400 text-sm">AWS, Azure, GCP</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FaRocket className="text-xl text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">DevOps Engineer</h4>
                <p className="text-gray-400 text-sm">CI/CD, Automation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FaBriefcase className="text-xl text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">Software Developer</h4>
                <p className="text-gray-400 text-sm">Full-Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}