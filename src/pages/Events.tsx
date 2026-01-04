import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Layout } from "@/components/layout/Layout";

const upcomingEvents = [
  {
    title: "Inaugural Ceremony",
    type: "Ceremony",
    date: "January 8, 2026 (Thursday)",
    time: "3:00 PM - 4:00 PM",
    location: "MVGRCE Campus",
    description: "Join us for the grand inauguration of the MVGRCE MUN Hub. Witness the beginning of a new chapter in diplomatic excellence.",
    status: "upcoming",
  },
];

const pastEvents = [
  {
    title: "Mock Session: Security Council",
    type: "Mock Conference",
    date: "December 10, 2024",
    description: "Simulated UN Security Council session addressing the Ukraine crisis with 30 participating delegates.",
    participants: 30,
    image: "/placeholder.svg" // Replace with actual image
  },
  {
    title: "MUN Orientation 2024",
    type: "Workshop",
    date: "August 25, 2024",
    description: "Introduction to Model United Nations for freshers, covering basics of diplomacy and committee procedures.",
    participants: 85,
    image: "/placeholder.svg" // Replace with actual image
  },
];

const trainingModules = [
  {
    title: "Rules of Procedure",
    description: "Master parliamentary procedures, motions, and committee protocols essential for MUN success.",
  },
  {
    title: "Research & Position Papers",
    description: "Learn systematic research methods and craft compelling position papers on international issues.",
  },
  {
    title: "Public Speaking",
    description: "Develop confidence in delivering speeches, managing stage presence, and engaging audiences.",
  },
  {
    title: "Negotiation & Lobbying",
    description: "Practice bloc formation, resolution drafting, and consensus-building techniques.",
  },
];

export default function Events() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container-wide mx-auto px-4 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-bold mb-6"
          >
            Events & <span className="text-accent">Activities</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Discover our conferences, workshops, and training sessions designed to transform
            you into a skilled diplomat and leader.
          </motion.p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-4">
              Upcoming <span className="text-accent">Events</span>
            </h2>
            <div className="w-16 h-1 bg-accent" />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection key={event.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-xl overflow-hidden shadow-lg border border-border h-full"
                >
                  <div className="bg-accent/10 px-6 py-3 border-b border-border">
                    <span className="text-accent font-semibold text-sm uppercase tracking-wide">
                      {event.type}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                      {event.title}
                    </h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="h-4 w-4 text-accent" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Training Sessions */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-4">
              Training <span className="text-accent">Modules</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive training programs to prepare you for MUN success.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingModules.map((module, index) => (
              <AnimatedSection key={module.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-card rounded-xl p-6 h-full shadow-md border border-border text-center"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent font-heading font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {module.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Timeline (Commented out for now) */}
      {/* 
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground font-bold mb-4">
              Past <span className="text-accent">Events</span>
            </h2>
            <div className="w-16 h-1 bg-accent" />
          </AnimatedSection>

          <div className="space-y-6">
            {pastEvents.map((event, index) => (
              <AnimatedSection key={event.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="bg-card rounded-xl overflow-hidden shadow-md border border-border flex flex-col md:flex-row"
                >
                  <div className="md:w-64 lg:w-80 h-48 md:h-auto relative">
                     <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover absolute inset-0"
                     />
                     <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-sm font-semibold rounded-md">
                        {event.date}
                     </div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-center">
                    <span className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">
                        {event.type}
                    </span>
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Users className="h-4 w-4 text-accent" />
                      <span className="font-medium">{event.participants} Participants</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      */}
    </Layout>
  );
}
