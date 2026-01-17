import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Layers, 
  Workflow, 
  Code2, 
  Database, 
  Server, 
  Cog, 
  Brain, 
  Palette 
} from "lucide-react";

const skills = [
  {
    icon: Layers,
    title: "Microsoft Power Apps",
    description: "Canvas apps with custom galleries, forms, and components. Deep understanding of delegation and performance optimization.",
  },
  {
    icon: Workflow,
    title: "Power Automate",
    description: "Building flows that handle approvals, data sync, notifications, and complex business logic with proper error handling.",
  },
  {
    icon: Code2,
    title: "Power Platform Logic",
    description: "Expressions, conditions, variables, and control flow. I write formulas that are readable and maintainable.",
  },
  {
    icon: Database,
    title: "SharePoint Integration",
    description: "Lists, libraries, and seamless integration with Power Platform. Managing data where your team already works.",
  },
  {
    icon: Server,
    title: "Dataverse Basics",
    description: "Understanding data modeling, relationships, and when to use Dataverse over SharePoint for your solutions.",
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Identifying manual workflows and transforming them into efficient automated processes that save hours.",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    description: "Logical thinking and breaking down complex requirements into manageable, buildable solutions.",
  },
  {
    icon: Palette,
    title: "Clean App Design",
    description: "Intuitive layouts, consistent styling, and user experiences that don't require training manuals.",
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-body max-w-2xl mx-auto">
            The tools and capabilities I bring to every project. 
            Real-world focused, not just theory.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group p-6 rounded-xl bg-card shadow-card border border-border/50 hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                <skill.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
