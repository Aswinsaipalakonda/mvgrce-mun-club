import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Flag, Globe, AlertTriangle, Newspaper, Landmark, Gavel, Award, Briefcase, Handshake, CircleDollarSign, Users, Megaphone, Laptop, PenTool, Truck, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Layout } from "@/components/layout/Layout";
import munLogo from "@/assets/mun-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import skillSpeaking from "@/assets/skill-speaking.jpg";
import skillDiplomacy from "@/assets/skill-diplomacy.jpg";
import skillLeadership from "@/assets/skill-leadership.jpg";
import skillResearch from "@/assets/skill-research.jpg";

const skills = [
  {
    image: skillSpeaking,
    title: "Public Speaking",
    description: "Master the art of persuasive communication and confident presentation.",
  },
  {
    image: skillDiplomacy,
    title: "Diplomacy",
    description: "Learn negotiation, consensus-building, and conflict resolution.",
  },
  {
    image: skillLeadership,
    title: "Leadership",
    description: "Develop decision-making abilities and lead with conviction.",
  },
  {
    image: skillResearch,
    title: "Research & Global Awareness",
    description: "Understand complex international issues and geopolitical dynamics.",
  },
];

const committees = [
  {
    icon: Shield,
    title: "UNHRC",
    fullName: "United Nations Human Rights Council",
  },
  {
    icon: Flag,
    title: "AIPPM",
    fullName: "All India Political Party Meet",
  },
  {
    icon: Globe,
    title: "DISEC",
    fullName: "Disarmament and International Security Committee",
  },
  {
    icon: AlertTriangle,
    title: "CRISIS",
    fullName: "Continuous Crisis Committee",
  },
  {
    icon: Newspaper,
    title: "IP",
    fullName: "International Press",
  },
  {
    icon: Landmark,
    title: "ALP",
    fullName: "Andhra Pradesh Legislative Assembly",
  },
];

const teamRoles = [
  {
    icon: Gavel,
    role: "Secretary General",
  },
  {
    icon: Award,
    role: "Deputy Secretary General",
  },
  {
    icon: Briefcase,
    role: "Director General",
  },
  {
    icon: Handshake,
    role: "Internal and External Affairs",
  },
  {
    icon: Flag,
    role: "Charge D' Affaires",
  },
  {
    icon: CircleDollarSign,
    role: "Head of Finance",
  },
  {
    icon: Users,
    role: "Head of Organising Committee",
  },
  {
    icon: Megaphone,
    role: "Marketing",
  },
  {
    icon: Laptop,
    role: "USG Tech",
  },
  {
    icon: PenTool,
    role: "Design",
  },
  {
    icon: Truck,
    role: "USG Logistics",
  },
  {
    icon: Utensils,
    role: "USG Hospitality",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="MUN Conference"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-wide mx-auto px-4 md:px-8 text-center py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-primary-foreground font-bold mb-3 md:mb-4"
          >
            Model United Nations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-accent font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-4 md:mb-6"
          >
            MVGR College of Engineering
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-primary-foreground/80 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-10 font-body px-4"
          >
            Empowering future diplomats through simulation, debate, and global discourse.
            Shape tomorrow's world leaders today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
          >
            <Link to="/register">
              <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="goldOutline" size="xl" className="w-full sm:w-auto text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1.5 h-3 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* What is MUN Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <AnimatedSection className="text-center mb-10 md:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-4">
              What is <span className="text-accent">Model United Nations?</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-accent mx-auto mb-6" />
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4 md:mb-6">
                  Model United Nations (MUN) is an educational simulation where students
                  role-play as delegates of different countries and participate in simulated
                  UN committees. It provides a platform to debate real-world issues, develop
                  diplomatic skills, and understand international relations.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  At MVGRCE, our MUN club offers a transformative experience, preparing
                  engineering students to become well-rounded global citizens with enhanced
                  communication, research, and leadership capabilities.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {skills.slice(0, 4).map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    whileHover={{ scale: 1.03 }}
                    className="relative rounded-xl overflow-hidden aspect-square group"
                  >
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/70 group-hover:bg-primary/80 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center p-2 md:p-4">
                      <p className="text-primary-foreground font-heading text-sm md:text-base lg:text-lg font-semibold text-center">
                        {skill.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Conference Structure Section */}
      <section className="section-padding bg-navy text-white">
        <div className="container-wide mx-auto">
          <AnimatedSection className="text-center mb-10 md:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Proposed <span className="text-gold">Conference Structure</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gold mx-auto mb-6" />
            <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto px-4">
              As we grow, our goal is to host a large-scale MUN conference. Here are the committees we plan
              to simulate, each addressing critical issues from different perspectives.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committees.map((committee, index) => (
              <AnimatedSection key={committee.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-navy-light/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-gold/50 transition-all duration-300 h-full flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl border-2 border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold transition-colors">
                    <committee.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-gold mb-3">
                    {committee.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {committee.fullName}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <AnimatedSection className="text-center mb-10 md:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-4">
              Our <span className="text-accent">Team Structure</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
              Meet the roles that drive our MUN conference to success, ensuring precise organization and execution.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {teamRoles.map((role, index) => (
              <AnimatedSection key={role.role} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-accent/40 transition-all duration-300 flex flex-col items-center text-center h-full group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <role.icon className="w-6 h-6 md:w-7 md:h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-sm md:text-base font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {role.role}
                  </h3>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join MUN Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <AnimatedSection className="text-center mb-10 md:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-4">
              Why Join <span className="text-accent">MVGRCE MUN?</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
              Discover the transformative skills and experiences that await you in our MUN club.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-card rounded-xl overflow-hidden h-full shadow-md border border-border hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container-wide mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-bold mb-4 md:mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-primary-foreground/80 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-10 px-4">
              Join MVGRCE Model United Nations Club and embark on a journey of
              diplomatic excellence, intellectual growth, and leadership development.
            </p>
            <Link to="/register">
              <Button variant="hero" size="xl" className="group">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
