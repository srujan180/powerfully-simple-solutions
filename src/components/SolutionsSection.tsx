import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  AppWindow, 
  CheckCircle2, 
  FileCheck, 
  Timer, 
  BarChart3, 
  ArrowRight 
} from "lucide-react";

const solutions = [
  {
    icon: AppWindow,
    title: "Internal Business Apps",
    description: "Custom apps for inventory tracking, project management, team requests, and more. Built for your specific workflow.",
  },
  {
    icon: CheckCircle2,
    title: "Approval Workflows",
    description: "Multi-level approvals, escalations, and notifications. Keep things moving without chasing people for signatures.",
  },
  {
    icon: FileCheck,
    title: "Data-Driven Forms",
    description: "Smart forms that adapt based on user input, validate data, and connect directly to your data sources.",
  },
  {
    icon: Timer,
    title: "Task Automation",
    description: "Reduce manual data entry, automate notifications, sync data between systems, and eliminate repetitive work.",
  },
  {
    icon: BarChart3,
    title: "Simple Dashboards",
    description: "Clear visibility into your data with focused dashboards that show what matters, without the complexity.",
  },
];

export const SolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-foreground mb-4">What I Can Build</h2>
          <p className="text-body max-w-2xl mx-auto">
            Solutions designed to solve real problems and make work easier for everyone involved.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300"
            >
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <solution.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
