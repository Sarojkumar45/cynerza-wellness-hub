import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  index?: number;
}

const BlogCard = ({ image, title, date, excerpt, category, index = 0 }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden hover:shadow-hover transition-all duration-300 h-full flex flex-col">
        <div className="relative overflow-hidden aspect-video">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
        </div>
        <CardContent className="p-6 flex-grow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <h3 className="font-heading font-semibold text-xl mb-3 text-primary group-hover:text-primary/80 transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">{excerpt}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button variant="link" className="p-0 group-hover:gap-3 transition-all">
            Read More
            <ArrowRight className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
