"use client"; // Ensures this is a client-side component

import React from 'react';
import { BackgroundGradient } from './ui/background-gradient';
import { motion } from 'framer-motion';

const Ai = () => {
  const tools = [
    {
      name: 'ChatGPT',
      url: 'https://chat.openai.com',
      description:
        'An AI chatbot developed by OpenAI for natural language understanding and conversations.',
      image: '/images/chatgpt.webp',
    },
    {
      name: 'DALL·E',
      url: 'https://labs.openai.com/',
      description: 'A creative AI model that generates images from textual descriptions.',
      image: '/images/dalle.webp',
    },
    {
      name: 'MidJourney',
      url: 'https://www.midjourney.com/',
      description: 'An AI tool that allows users to create artistic visuals through text prompts.',
      image: '/images/midjourney.png',
    },
    {
      name: 'ChaturJi',
      url: 'https://www.chaturji.ai/',
      description: 'Chaturji is an AI assistant that helps businesses access AIs, organize prompts, collaborate, and analyze usage.',
      image: '/images/chaturji.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">My Favorite AI Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <BackgroundGradient key={index} containerClassName="p-6 rounded-xl shadow-lg hover:shadow-xl">
            <img
              src={tool.image}
              alt={`${tool.name} logo`}
              className="w-full h-40 object-contain mb-4 rounded-md"
            />
            <h2 className="text-2xl font-semibold mb-2 text-center">{tool.name}</h2>
            <p className="text-gray-300 mb-4 text-center">{tool.description}</p>
            <div className="flex justify-center">
  <motion.a
    href={tool.url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block text-white font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-all duration-500 ease-in-out"
    whileHover={{ scale: 1.1, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
  >
    Visit {tool.name}
  </motion.a>
</div>

          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
};

export default Ai;
