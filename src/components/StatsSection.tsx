import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
  { number: "100K+", label: "Happy Users", color: "from-blue-500 to-cyan-500" },
  { number: "99.9%", label: "Uptime", color: "from-green-500 to-emerald-500" },
  { number: "50+", label: "Countries", color: "from-purple-500 to-violet-500" },
  { number: "24/7", label: "Support", color: "from-pink-500 to-rose-500" }];


  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden" data-id="v3st4ri57" data-path="src/components/StatsSection.tsx">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" data-id="gfg5520h5" data-path="src/components/StatsSection.tsx">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" data-id="z36s3mzrq" data-path="src/components/StatsSection.tsx"></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" data-id="yt940f2hy" data-path="src/components/StatsSection.tsx">
          <defs data-id="uy3lrz0dz" data-path="src/components/StatsSection.tsx">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse" data-id="qpkqmo9vu" data-path="src/components/StatsSection.tsx">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" data-id="fwwu1z8xz" data-path="src/components/StatsSection.tsx" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" data-id="e03kzrmp6" data-path="src/components/StatsSection.tsx" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-id="u5vd7amk7" data-path="src/components/StatsSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16" data-id="jzs4kkls7" data-path="src/components/StatsSection.tsx">

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-id="i55yiqfdd" data-path="src/components/StatsSection.tsx">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto" data-id="d7iy5kxpi" data-path="src/components/StatsSection.tsx">
            Join the growing community of users who trust our platform for their daily needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-id="hr863ptfk" data-path="src/components/StatsSection.tsx">
          {stats.map((stat, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="text-center" data-id="ulw69j03l" data-path="src/components/StatsSection.tsx">

              <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300" data-id="yobzscumy" data-path="src/components/StatsSection.tsx">

                <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3, type: "spring", bounce: 0.5 }}
                viewport={{ once: true }}
                className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`} data-id="jr9kekq7g" data-path="src/components/StatsSection.tsx">

                  {stat.number}
                </motion.div>
                <p className="text-white/80 text-lg font-medium" data-id="4x85izatk" data-path="src/components/StatsSection.tsx">{stat.label}</p>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default StatsSection;