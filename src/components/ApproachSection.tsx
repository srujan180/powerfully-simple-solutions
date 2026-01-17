import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const approaches = [
  {
    number: "01",
    title: "Understand First",
    description: "Before writing a single formula, I make sure I understand the actual problem. What's the real pain point? Who will use this? What does success look like?",
  },
  {
    number: "02",
    title: "Keep It Simple",
    description: "The best solution is often the simplest one. I avoid unnecessary complexity and focus on what genuinely adds value. If a feature doesn't serve a clear purpose, it doesn't belong.",
  },
  {
    number: "03",
    title: "Think Long-Term",
    description: "I build solutions that are easy to maintain and extend. Clean formulas, logical naming, proper documentation—because someone will need to update this later.",
  },
  {
    number: "04",
    title: "Design for Users",
    description: "I think like a business user, not just a developer. The app should be intuitive enough that people want to use it, not something they avoid or work around.",
  },
];

export const ApproachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="approach" className="section-padding bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-foreground mb-4">My Approach</h2>
          <p className="text-body max-w-2xl mx-auto">
            How I think about building solutions that actually work and last.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 p-6 rounded-xl bg-card shadow-card border border-border/50"
            >
              <div className="flex-shrink-0">
                <span className="text-4xl font-bold text-primary/20">{approach.number}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{approach.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{approach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
