import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Users, BookOpen, Award } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Layout } from "@/components/layout/Layout";

const objectives = [
  {
    icon: Users,
    title: "Foster Global Citizenship",
    description: "Cultivate awareness of international affairs and cross-cultural understanding among engineering students.",
  },
  {
    icon: BookOpen,
    title: "Enhance Academic Excellence",
    description: "Develop research, analytical thinking, and professional writing skills through rigorous preparation.",
  },
  {
    icon: Award,
    title: "Build Leadership Capacity",
    description: "Train students to lead committees, manage crises, and drive consensus in complex scenarios.",
  },
  {
    icon: Lightbulb,
    title: "Promote Critical Thinking",
    description: "Encourage evidence-based argumentation and solution-oriented approaches to global challenges.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-28 bg-primary overflow-hidden min-h-[50svh] flex items-center justify-center">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container-wide mx-auto px-4 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-bold mb-6"
          >
            About <span className="text-accent">MVGRCE MUN</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Discover the vision, mission, and purpose behind MVGR College of Engineering's
            premier diplomatic simulation platform.
          </motion.p>
        </div>
      </section>

      {/* What is MUN */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-6">
                What is <span className="text-accent">Model United Nations?</span>
              </h2>
              <div className="w-16 h-1 bg-accent mb-8" />
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Model United Nations (MUN) is an academic simulation of the United Nations
                  where students step into the shoes of diplomats from different countries.
                  Participants research, debate, and negotiate on real-world issues from
                  climate change to international security just as actual UN delegates do.
                </p>
                <p>
                  Through MUN, students develop a comprehensive understanding of international
                  relations, diplomatic procedures, and the complexities of global governance.
                  It transforms theoretical knowledge into practical diplomatic skills.
                </p>
                <p>
                  Whether simulating the Security Council, General Assembly, or specialized
                  committees, participants gain invaluable experience in public speaking,
                  negotiation, and collaborative problem-solving.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-primary rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-2xl text-primary-foreground font-semibold">
                    Our Vision
                  </h3>
                </div>
                <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                  To establish MVGRCE MUN as a premier platform for nurturing future leaders,
                  diplomats, and changemakers who can navigate complex global challenges with
                  wisdom, empathy, and conviction.
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-2xl text-primary-foreground font-semibold">
                    Our Mission
                  </h3>
                </div>
                <p className="text-primary-foreground/80 text-lg leading-relaxed">
                  To provide engineering students with transformative experiences that bridge
                  technical education with global awareness, fostering well-rounded individuals
                  equipped for leadership in an interconnected world.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-4">
              Our <span className="text-accent">Objectives</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The core goals that drive every initiative and event at MVGRCE MUN.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <AnimatedSection key={objective.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card rounded-xl p-6 md:p-8 h-full shadow-md border border-border flex gap-5"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <objective.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      {objective.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {objective.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why MUN for Engineers */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-4">
              Why MUN for <span className="text-accent">Engineering Students?</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border max-w-4xl mx-auto">
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Engineering education excels in building technical competence, but the
                  modern professional landscape demands more. Today's engineers must communicate
                  complex ideas, collaborate across cultures, and lead multidisciplinary teams.
                </p>
                <p>
                  <strong className="text-foreground">Model United Nations bridges this gap.</strong> It provides
                  a unique platform where technical minds can develop:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 my-8">
                  {[
                    "Persuasive communication skills",
                    "Cross-cultural collaboration",
                    "Crisis management abilities",
                    "Strategic thinking capacity",
                    "Professional writing excellence",
                    "Diplomatic negotiation tactics",
                  ].map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  At MVGRCE, we believe that combining technical prowess with diplomatic
                  acumen creates engineers who don't just solve problems they lead movements,
                  drive policy, and shape the future.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
