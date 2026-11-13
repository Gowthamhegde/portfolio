import { motion } from "framer-motion";
import { profile } from "../data/resume";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import GlassCard from "./GlassCard";

export default function ContactModern() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">Let's create something amazing together</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <GlassCard>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.a
                href={`mailto:${profile.email}`}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-purple-500/10 transition-all group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50"
                >
                  <FaEnvelope className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400 text-sm group-hover:text-purple-300 transition-colors">
                  {profile.email}
                </p>
              </motion.a>

              <motion.a
                href={`tel:${profile.phone}`}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-purple-500/10 transition-all group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/50"
                >
                  <FaPhone className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-400 text-sm group-hover:text-purple-300 transition-colors">
                  {profile.phone}
                </p>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-purple-500/10 transition-all group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg shadow-pink-500/50"
                >
                  <FaMapMarkerAlt className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-400 text-sm group-hover:text-purple-300 transition-colors">
                  {profile.location}
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-400 mb-6">Connect with me on social media</p>
              <div className="flex justify-center gap-6">
                {profile.socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all"
                  >
                    <span className="text-2xl">{social.label === "GitHub" ? "💻" : "💼"}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
