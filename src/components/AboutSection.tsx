import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, Zap } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const traits = [
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "I enjoy breaking down complex business challenges into clear, actionable solutions.",
    },
    {
      icon: Target,
      title: "Detail-Oriented",
      description: "Every flow, every formula, every user experience detail matters to me.",
    },
    {
      icon: Zap,
      title: "Efficiency First",
      description: "I'm always looking for ways to automate the mundane and free up time for what matters.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg text-foreground mb-6">About Me</h2>
            <div className="space-y-4 text-body">
              <p>
                I'm someone who genuinely enjoys making work easier for people. When I see 
                a repetitive task or a clunky process, my brain immediately starts thinking 
                about how it could be automated or simplified.
              </p>
              <p>
                My approach is practical: I listen first, understand the real problem, and 
                then build something that actually works for the people who'll use it. No 
                over-engineering, no unnecessary complexity—just solutions that make sense.
              </p>
              <p>
                I believe in building apps that users want to open, not avoid. That means 
                clean interfaces, logical flows, and performance that doesn't make you wait.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            {traits.map((trait, index) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex gap-4 p-6 rounded-xl bg-card shadow-card border border-border/50 hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <trait.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{trait.title}</h3>
                  <p className="text-sm text-muted-foreground">{trait.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
