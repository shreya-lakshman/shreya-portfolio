import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";
import { motion } from "framer-motion";
import "./index.css";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8 max-w-5xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3"
      >
        <h1 className="text-4xl font-bold text-indigo-300">Shreya Lakshman</h1>
        <p className="text-lg text-gray-300">Data Scientist | ML Engineer | DevOps Enthusiast</p>
        <p className="text-sm text-gray-400">Los Angeles, CA | shreyalakshman17@gmail.com</p>
        <div className="flex justify-center gap-6 pt-2">
          <a href="https://github.com/shreya-lakshman" target="_blank" rel="noopener noreferrer"><Github className="text-indigo-400 hover:text-white" /></a>
          <a href="https://www.linkedin.com/in/shreya-lakshman-563674208/" target="_blank" rel="noopener noreferrer"><Linkedin className="text-indigo-400 hover:text-white" /></a>
        </div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-indigo-200">About Me</h2>
        <p className="text-gray-300">
          I’m a Master’s student in Applied Data Science at USC with over 3 years of industry experience. I've built production-ready recommendation systems, enterprise automation tools, and AI research pipelines. I'm passionate about responsible AI, system scalability, and creating intelligent systems that drive measurable impact.
        </p>
      </motion.section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-indigo-200">Research Experience</h2>
        <div className="grid gap-4">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="bg-gray-800">
              <CardContent className="p-4">
                <h3 className="font-bold text-xl text-pink-300">Mitigating Bias in AI Hiring</h3>
                <p className="text-gray-300">
                  Developed a framework to evaluate bias in LLM-driven hiring decisions using ChatGPT and DeepSeek. Applied prompt engineering and fairness-aware ranking, analyzed sentiment and lexical emphasis to reduce hiring bias.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="bg-gray-800">
              <CardContent className="p-4">
                <h3 className="font-bold text-xl text-green-300">Sepsis Mortality Prediction</h3>
                <p className="text-gray-300">
                  Benchmarked ML algorithms (AdaBoost, SVM, LDA, RF) on transcriptomic data to predict mortality with 80% accuracy. Enhanced reliability with PCA, SMOTE, and ANOVA F-test.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="bg-gray-800">
              <CardContent className="p-4">
                <h3 className="font-bold text-xl text-blue-300">Self-Correction in LLMs</h3>
                <p className="text-gray-300">
                  Researched self-correction in GPT-4o, GPT-3.5, and Llama. Built jury-based correction mechanisms to resolve model bias and analyzed attention and prompt strategies for better performance.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-indigo-200">Professional Experience</h2>
        <Card className="bg-gray-800">
          <CardContent className="p-4">
            <h3 className="font-bold text-xl text-indigo-100">TipTop Technologies – Data Scientist</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Built a Slack bot handling 500+ weekly queries with 96% accuracy and 99% success.</li>
              <li>Developed a recommender system increasing CTR by 25% and reducing irrelevant content by 30%.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 mt-4">
          <CardContent className="p-4">
            <h3 className="font-bold text-xl text-indigo-100">Hewlett Packard Enterprise – Software Engineer</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Automated data pipelines with Python and Ansible saving 200+ engineering hours/month.</li>
              <li>Containerized deployments with Docker and implemented CI/CD with Jenkins.</li>
              <li>Built real-time monitoring tools reducing error detection time by 25%.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-indigo-200">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-gray-800"><CardContent className="p-4"><strong>Languages:</strong> Python, R, C, PHP, SQL</CardContent></Card>
          <Card className="bg-gray-800"><CardContent className="p-4"><strong>Tools:</strong> Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, Keras, TensorFlow, Spark, Hadoop, Git/GitHub, Unix Shell, Ansible, Docker, Kubernetes, Jenkins, VCenter, AWS, Jupyter notebook, Matlab</CardContent></Card>
          <Card className="bg-gray-800"><CardContent className="p-4"><strong>Methodologies:</strong> Data Science, Statistical Modeling, Machine Learning, Data Analysis, ETL</CardContent></Card>
          <Card className="bg-gray-800"><CardContent className="p-4"><strong>AI/ML Techniques & Models:</strong> Generative AI, Large Language Models (LLMs), Prompt Engineering, Classification, Clustering</CardContent></Card>
        </div>
      </section>

      <section className="text-center pt-8">
        <a
          href="/Shreya_Lakshman_Data%20Scientist.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
        >
          <Download className="w-5 h-5" /> Download My Resume
        </a>
      </section>
    </div>
  );
}
