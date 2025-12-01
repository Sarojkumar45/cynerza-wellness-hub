import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import heroImage from "@/assets/hero-ayurveda.jpg";
import productChurna from "@/assets/product-churna.jpg";
import productNeem from "@/assets/product-neem.jpg";
import productHairOil from "@/assets/product-hair-oil.jpg";
import productTulsi from "@/assets/product-tulsi.jpg";
import productBalm from "@/assets/product-balm.jpg";

const Blogs = () => {
  const blogs = [
    {
      image: productChurna,
      title: "5 Natural Ways to Improve Digestion with Ayurveda",
      date: "March 15, 2025",
      category: "Digestion",
      excerpt: "Discover time-tested Ayurvedic practices and herbs that support healthy gut function and relieve digestive discomfort naturally.",
    },
    {
      image: productNeem,
      title: "Clear Skin Naturally: Ayurvedic Secrets for Acne-Free Skin",
      date: "March 10, 2025",
      category: "Skincare",
      excerpt: "Learn how Ayurvedic herbs like neem and turmeric can purify your blood and give you radiant, clear skin from within.",
    },
    {
      image: productTulsi,
      title: "Boost Your Immunity: The Power of Tulsi (Holy Basil)",
      date: "March 5, 2025",
      category: "Immunity",
      excerpt: "Explore the incredible immune-boosting properties of tulsi and how this sacred herb can protect you from infections.",
    },
    {
      image: productHairOil,
      title: "Stop Hair Fall Naturally with Ayurvedic Hair Care",
      date: "February 28, 2025",
      category: "Hair Care",
      excerpt: "Traditional Ayurvedic hair oils with bhringraj and amla can strengthen your roots and promote healthy hair growth.",
    },
    {
      image: productBalm,
      title: "Natural Pain Relief: Ayurvedic Remedies for Joint Pain",
      date: "February 20, 2025",
      category: "Pain Relief",
      excerpt: "Say goodbye to chronic pain with Ayurvedic herbs and practices that reduce inflammation and support joint health.",
    },
    {
      image: heroImage,
      title: "Understanding Your Dosha: A Guide to Ayurvedic Body Types",
      date: "February 15, 2025",
      category: "Wellness",
      excerpt: "Discover your unique Ayurvedic constitution (Vata, Pitta, or Kapha) and learn how to balance it for optimal health.",
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
              Ayurveda Wellness Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore ancient wisdom, natural remedies, and modern insights for holistic health and wellness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.title} {...blog} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              Explore by Topic
            </h2>
            <p className="text-muted-foreground">
              Browse articles organized by wellness categories
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Digestion", "Skincare", "Immunity", "Hair Care", "Pain Relief", "Wellness", "Lifestyle", "Nutrition"].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card p-4 rounded-lg shadow-soft text-center cursor-pointer hover:shadow-hover transition-all"
              >
                <p className="font-medium text-primary">{category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
