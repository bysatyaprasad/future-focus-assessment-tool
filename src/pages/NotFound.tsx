
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Compass, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-app-purple/5 via-white to-app-blue/10 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col items-center"
        >
          <div className="relative mb-4">
            <motion.div
              animate={{ 
                rotate: [0, 10, 0, -10, 0],
              }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <Compass className="h-24 w-24 text-app-purple opacity-70" />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
              404
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-gray-600 mb-8">
            It seems you've wandered off the career path! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="bg-app-yellow/30 p-4 rounded-lg mb-8">
            <p className="text-gray-700">
              Ready to get back on track with your career exploration?
            </p>
          </div>
          
          <Button asChild className="bg-gradient-to-r from-app-purple to-app-purple-dark text-white px-6 py-2 rounded-full">
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Back to Homepage
            </Link>
          </Button>
        </motion.div>
        
        <p className="mt-8 text-sm text-gray-500">
          Future Skills School: Discover your perfect career path
        </p>
      </div>
    </div>
  );
};

export default NotFound;
