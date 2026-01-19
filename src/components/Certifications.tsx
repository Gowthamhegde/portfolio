import { certifications } from "../data/resume";
import { FaCertificate, FaAward, FaExternalLinkAlt, FaShieldAlt, FaCode, FaCloud } from "react-icons/fa";
import { SiAmazon, SiHtml5, SiCss3 } from "react-icons/si";

const getCertificationIcon = (name: string) => {
  const nameLower = name.toLowerCase();
  if (nameLower.includes('aws') || nameLower.includes('amazon')) return SiAmazon;
  if (nameLower.includes('html')) return SiHtml5;
  if (nameLower.includes('css')) return SiCss3;
  if (nameLower.includes('security') || nameLower.includes('information security')) return FaShieldAlt;
  if (nameLower.includes('web development')) return FaCode;
  return FaCertificate; // default
};

const getCertificationCategory = (name: string) => {
  const nameLower = name.toLowerCase();
  if (nameLower.includes('aws') || nameLower.includes('cloud')) return {
    category: "Cloud Computing",
    gradient: "from-orange-500 to-red-600",
    color: "text-orange-400"
  };
  if (nameLower.includes('security')) return {
    category: "Cybersecurity",
    gradient: "from-red-500 to-pink-600",
    color: "text-red-400"
  };
  if (nameLower.includes('web') || nameLower.includes('html') || nameLower.includes('css')) return {
    category: "Web Development",
    gradient: "from-blue-500 to-purple-600",
    color: "text-blue-400"
  };
  return {
    category: "Professional",
    gradient: "from-green-500 to-teal-600",
    color: "text-green-400"
  };
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <FaAward className="text-2xl text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-4xl font-bold gradient-text">Certifications</h2>
              <p className="text-yellow-400 font-medium">Professional Credentials</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Validated expertise through industry-recognized certifications in cloud computing, web development, and cybersecurity
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => {
            const IconComponent = getCertificationIcon(cert.name);
            const categoryInfo = getCertificationCategory(cert.name);
            
            return (
              <div
                key={index}
                className="card p-8 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${categoryInfo.gradient} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    <div>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${categoryInfo.gradient} text-white text-sm font-semibold mb-2`}>
                        <FaCertificate className="text-xs" />
                        {categoryInfo.category}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {cert.name.includes('AWS') ? 'Amazon Web Services' : 
                         cert.name.includes('TechA') ? 'TechA Academy' : 
                         'Professional Institute'}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold ${categoryInfo.color} mb-1`}>
                      {cert.name.includes('2020') ? '2020' : '2023'}
                    </div>
                    <div className="text-green-400 text-sm font-medium">
                      ✓ Completed
                    </div>
                  </div>
                </div>

                {/* Certificate Name */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 leading-relaxed">
                  {cert.name}
                </h3>

                {/* Skills Gained */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    Skills Validated
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(cert.name.includes('AWS') ? ['AWS', 'EC2', 'Cloud Architecture'] :
                      cert.name.includes('HTML') ? ['HTML5', 'CSS3', 'Web Design'] :
                      cert.name.includes('Security') ? ['Information Security', 'Risk Assessment', 'Compliance'] :
                      ['Professional Skills']).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-800/50 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/30 hover:border-cyan-400 hover:bg-slate-800 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Certificate Button */}
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${categoryInfo.gradient} text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300`}
                >
                  <FaExternalLinkAlt />
                  <span>View Certificate</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Certification Stats */}
        <div className="card p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Certification Achievements</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Total Certifications", value: certifications.length.toString(), icon: FaCertificate, color: "text-yellow-400" },
              { label: "Cloud Computing", value: "1", icon: FaCloud, color: "text-orange-400" },
              { label: "Security", value: "1", icon: FaShieldAlt, color: "text-red-400" },
              { label: "Web Development", value: "1", icon: FaCode, color: "text-blue-400" }
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