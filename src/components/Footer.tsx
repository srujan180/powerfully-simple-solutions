import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <div className="font-semibold text-foreground mb-1">
              Srujan Annam
            </div>
            <div className="text-sm text-muted-foreground">
              Microsoft Power Platform Developer
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/srujan-annam18/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground"
        >
          © {new Date().getFullYear()} All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};
