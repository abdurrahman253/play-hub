import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaGamepad, FaTrophy, FaUsers, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative mt-20 overflow-hidden bg-black">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '1s' }}></div>
      </div>

      {/* Gradient Border Top */}
      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        {/* Stats Bar */}
        <div className="py-8 border-b border-gray-800/50">
          <div className="grid w-11/12 grid-cols-2 gap-6 mx-auto md:grid-cols-4">
            {[
              { icon: FaGamepad, label: "Games", value: "1000+" },
              { icon: FaUsers, label: "Players", value: "50K+" },
              { icon: FaTrophy, label: "Tournaments", value: "200+" },
              { icon: FaShieldAlt, label: "Secure", value: "100%" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex flex-col items-center gap-2 p-4 transition-all duration-300 rounded-lg bg-gradient-to-br from-gray-900/50 to-transparent border border-gray-800/50 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20"
              >
                <stat.icon className="text-3xl text-orange-500" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid w-11/12 grid-cols-1 gap-12 py-16 mx-auto md:grid-cols-4">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative p-3 overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                <div className="absolute inset-0 bg-black/20"></div>
                <span className="relative text-3xl font-black text-white">P</span>
              </div>
              <h1 className="text-3xl font-black tracking-tight text-white">
                Play<span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">Hub</span>
              </h1>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-gray-400">
              Experience the next generation of gaming. Join millions of players worldwide in epic battles, strategic conquests, and endless adventures. Your gaming journey starts here.
            </p>
            
            {/* Newsletter */}
            <div className="pt-4">
              <h3 className="mb-3 text-sm font-semibold tracking-wider text-orange-500 uppercase">Stay Updated</h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-sm text-white transition-all duration-300 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-orange-500"
                />
                <button className="px-6 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-500/50">
                  Join
                </button>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-sm font-bold tracking-wider text-white uppercase">
              Quick Links
            </h2>
            <div className="flex flex-col space-y-3">
              {[
                { label: "Home" },
                { label: "Browse Games" },
                { label: "Tournaments" },
                { label: "About Us" },
                { label: "Contact" }
              ].map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="relative inline-block text-sm text-gray-400 transition-colors duration-300 group hover:text-orange-500 w-fit"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 bg-orange-500 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Support & Social */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-wider text-white uppercase">
                Support
              </h2>
              <div className="flex flex-col space-y-3">
                {["Help Center", "Privacy Policy", "Terms of Service"].map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="relative inline-block text-sm text-gray-400 transition-colors duration-300 group hover:text-orange-500 w-fit"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 bg-orange-500 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-wider text-white uppercase">
                Connect
              </h2>
              <div className="flex gap-3">
                {[
                  { Icon: FaFacebookF, href: "#" },
                  { Icon: FaTwitter, href: "#" },
                  { Icon: FaInstagram, href: "#" },
                  { Icon: FaYoutube, href: "#" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 border border-gray-800 rounded-lg bg-gray-900/50 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/50 hover:scale-110"
                  >
                    <social.Icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800/50">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()}{" "}
                <span className="font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">PlayHub</span>
                {" "}— Leveling up your gaming experience
              </p>
              <div className="flex gap-6 text-xs text-gray-500">
                <a href="#" className="transition-colors duration-300 hover:text-orange-500">Cookie Policy</a>
                <span>•</span>
                <a href="#" className="transition-colors duration-300 hover:text-orange-500">Sitemap</a>
                <span>•</span>
                <a href="#" className="transition-colors duration-300 hover:text-orange-500">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;