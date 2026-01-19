import { TypeAnimation } from "react-type-animation";
import { profile } from "../data/resume";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                <span className="block">GOUTHAMA</span>
                <span className="block gradient-text">HEGDE</span>
              </h1>
            </div>

            <div className="text-xl lg:text-2xl text-cyan-300 font-medium h-16">
              <TypeAnimation
                sequence={[
                  'Cloud Architect',
                  2000,
                  'Full-Stack Developer',
                  2000,
                  'DevOps Engineer',
                  2000,
                  'AWS Specialist',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              {profile.summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary text-center"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="btn-secondary text-center"
              >
                View Projects
              </a>
              <a
                href="/gouthama_hegde_resume_final.pdf"
                download="Gouthama_Hegde_Resume.pdf"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
              </a>
            </div>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row gap-4 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <span>📧</span> {profile.email}
              </span>
              <span className="flex items-center gap-2">
                <span>📱</span> {profile.phone}
              </span>
              <span className="flex items-center gap-2">
                <span>📍</span> {profile.location}
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {profile.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
                >
                  {social.label === "GitHub" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="relative flex justify-center mt-8 lg:mt-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-2xl">
                <img 
                  src={profile.profilePicture} 
                  alt={profile.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}