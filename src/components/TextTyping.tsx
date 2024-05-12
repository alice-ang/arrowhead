"use client";
import { motion } from "framer-motion";
import React from "react";

export const TextTyping = ({ text }: { text: string }) => {
  return (
    <h2>
      {text.split("").map((letter, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
};
