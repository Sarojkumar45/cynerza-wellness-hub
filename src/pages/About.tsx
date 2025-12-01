import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, BookOpen, Heart, Users } from "lucide-react";
import doctorImage from "@/assets/doctor-profile.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Purity",
      description: "100% natural ingredients with no harmful chemicals",
    },
    {
      icon: Award,
      title: "Authenticity",
      description: "Traditional Ayurvedic formulations passed down through generations",
    },
    {
      icon: BookOpen,
      title: "Tradition",
      description: "5000+ years of ancient healing wisdom",
    },
    {
      icon: Users,
      title: "Scientific Approach",
      description: "Modern research validates our time-tested formulations",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-soft">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-6">
              Our Story
            </h1>
            <p className="text-lg text-muted-foreground">
              Bringing ancient Ayurvedic wisdom to modern lives for holistic wellness and natural healing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                The Cynerza Journey
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Cynerza was born from a deep reverence for Ayurveda and a vision to make authentic natural healing accessible to everyone. Founded by practitioners passionate about holistic wellness, we bridge the gap between ancient wisdom and modern healthcare needs.
                </p>
                <p>
                  Our journey began with a simple question: How can we preserve the purity of Ayurvedic traditions while meeting the wellness challenges of contemporary life? The answer lies in our commitment to authenticity, quality, and personalized care.
                </p>
                <p>
                  Every product we create and every treatment we offer is rooted in classical Ayurvedic texts, enhanced by modern scientific research, and crafted with the highest quality natural ingredients.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={doctorImage}
                alt="Ayurvedic Doctor"
                className="rounded-lg shadow-hover w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
              Our Ayurveda Philosophy
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Ayurveda teaches that health is not merely the absence of disease, but a state of perfect balance between body, mind, and spirit. We believe in treating the individual, not just the illness, by understanding your unique constitution (Prakriti) and imbalances (Vikriti).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 md:p-12 rounded-lg shadow-soft max-w-4xl mx-auto"
          >
            <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
              Three Pillars of Ayurvedic Healing
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">1. Ahara (Diet)</h4>
                <p className="text-muted-foreground">
                  Personalized nutrition based on your constitution to nourish and balance your doshas
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">2. Vihara (Lifestyle)</h4>
                <p className="text-muted-foreground">
                  Daily routines and practices aligned with natural rhythms for optimal wellness
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">3. Aushadha (Medicine)</h4>
                <p className="text-muted-foreground">
                  Natural herbal formulations to restore balance and promote healing
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4">
              Meet Our Expert
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center bg-card p-8 md:p-12 rounded-lg shadow-soft">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={doctorImage}
                  alt="Dr. Ayush Sharma"
                  className="rounded-lg shadow-hover w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-heading text-3xl font-bold text-primary mb-2">
                  Dr. Ayush Sharma
                </h3>
                <p className="text-secondary font-medium mb-4">B.A.M.S., M.D. (Ayurveda)</p>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    With over 15 years of clinical experience, Dr. Sharma combines traditional Ayurvedic wisdom with modern diagnostic techniques to provide personalized healing solutions.
                  </p>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Certifications:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Bachelor of Ayurvedic Medicine & Surgery (B.A.M.S.)</li>
                      <li>Master's Degree in Ayurveda (M.D.)</li>
                      <li>Panchakarma Specialist</li>
                      <li>Member, National Ayurvedic Medical Association</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Specializations:</h4>
                    <p className="text-sm">
                      Digestive disorders, skin conditions, stress management, immunity enhancement, and chronic pain relief
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-card shadow-soft"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
