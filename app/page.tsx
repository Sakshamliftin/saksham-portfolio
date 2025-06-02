"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { ArrowUpRight, Code, Github, Linkedin, Mail, Menu, Twitter, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-background">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50" style={{ scaleX }} />

      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b">
        <div className="container flex items-center justify-between h-16">
          <Link href="#home" className="font-bold text-xl">
            <span className="text-primary">Saksham </span>Saklani
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  activeSection === item.toLowerCase() ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://github.com/Sakshamliftin/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/saksham-saklani/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://x.com/imSaxm" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary p-2",
                      activeSection === item.toLowerCase() ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {item}
                  </Link>
                ))}
                <div className="flex items-center space-x-4 mt-4 p-2">
                  <Link href="https://github.com/Sakshamliftin/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/saksham-saklani/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://x.com/imSaxm" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="inline-block">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    ML Engineer & Web Developer
                  </motion.div>
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                >
                  Building intelligent <span className="text-primary">ML solutions</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-xl text-muted-foreground max-w-lg"
                >
                  I combine machine learning expertise with strong programming foundations to create intelligent,
                  data-driven applications that solve real-world problems.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button asChild size="lg" className="group">
                    <Link href="#projects">
                      View Projects
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="relative h-[400px] w-full rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/placeholder-user.jpg?height=400&width=400"
                      alt="Developer Portrait"
                      width={400}
                      height={400}
                      className="rounded-lg object-cover"
                      priority
                    />
                  </div>

                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                  <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-2 text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
              <p className="text-muted-foreground">My background and journey</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative h-[400px] w-full rounded-lg overflow-hidden"
              >
                <Image
                  src="/placeholder.jpg?height=400&width=600"
                  alt="Working on projects"
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold">Hi, I'm Saksham Saklani</h3>
                <p className="text-muted-foreground">
                  I'm an aspiring Machine Learning Engineer with a strong foundation in AI and Data Science. Currently
                  pursuing my B.Tech at IIIT Kottayam with a GPA of 9.1/10.0, I'm passionate about applying machine
                  learning to solve real-world problems.
                </p>
                <p className="text-muted-foreground">
                  I've worked on various machine learning projects, from predictive models to computer vision
                  applications. I have a solid foundation in data structures and algorithms with over 150+ problems
                  solved on LeetCode and GeeksforGeeks.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or enhancing my skills in German as a beginner language learner.
                </p>

                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Education</h4>
                    <p className="text-sm text-muted-foreground">B.Tech in AI and Data Science</p>
                    <p className="text-sm text-muted-foreground">IIIT Kottayam (Expected 2027)</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Contact</h4>
                    <p className="text-sm text-muted-foreground">+91-9485142559</p>
                    <p className="text-sm text-muted-foreground">saksham0405@gmail.com</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-2 text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight">Skills & Technologies</h2>
              <p className="text-muted-foreground">My technical expertise</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold">Machine Learning</h3>

                <div className="space-y-4">
                  {[
                    { name: "TensorFlow/Keras", level: 85 },
                    { name: "Scikit-Learn", level: 90 },
                    { name: "Computer Vision", level: 80 },
                    { name: "Natural Language Processing", level: 75 },
                    { name: "Data Preprocessing", level: 95 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.4 }}
                          viewport={{ once: true }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold">Web Development</h3>

                <div className="space-y-4">
                  {[
                    { name: "Python", level: 95 },
                    { name: "C++", level: 85 },
                    { name: "Java", level: 80 },
                    { name: "SQL Databases", level: 85 },
                    { name: "Git & Version Control", level: 90 },
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.4 }}
                          viewport={{ once: true }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Other Technologies</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  "Python",
                  "TensorFlow",
                  "Keras",
                  "Scikit-Learn",
                  "NumPy",
                  "Pandas",
                  "Matplotlib",
                  "BeautifulSoup",
                  "NLTK",
                  "Streamlit",
                  "PostgreSQL",
                  "MongoDB",
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center p-4 bg-muted rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <span className="font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-2 text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
              <p className="text-muted-foreground">Some of my recent work</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Titanic Survival Detection App",
                  description:
                    "Built and deployed a fully functional ML web application to predict Titanic survival using logistic regression with data preprocessing and feature engineering.",
                  image: "/Titanic-survival.jpg?height=300&width=400",
                  tags: ["Python", "Sklearn", "Streamlit", "ML"],
                  link: "https://github.com/Sakshamliftin/Titanic-Survival-Predictor",
                },
                {
                  title: "Linear Regression from Scratch",
                  description:
                    "Implemented univariate linear regression using gradient descent without ML libraries, building core components from scratch.",
                  image: "/Linear-regression.png?height=300&width=400",
                  tags: ["Python", "NumPy", "Matplotlib", "ML"],
                  link: "https://github.com/Sakshamliftin/linear-regression-from-scratch",
                },
                {
                  title: "Cat vs Dog Classifier",
                  description:
                    "Developed a deep learning model to classify images of cats and dogs using CNNs, achieving high accuracy on the test set.",
                  image: "/Cat-dog.jpg?height=300&width=400",
                  tags: ["Python", "TensorFlow", "Keras", "Deep Learning"],
                  link: "https://github.com/Sakshamliftin/Cat-vs-Dog-Classifier",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="mt-2 text-muted-foreground">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <Link href={project.link} className="inline-flex items-center text-sm font-medium text-primary">
                        View Project
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                      <Link href="#" className="inline-flex items-center text-sm font-medium text-muted-foreground">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-12 text-center"
            >
              <Button asChild variant="outline" size="lg">
                <Link
                  href="https://github.com/Sakshamliftin?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View More on GitHub
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-2 text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight">Experience & Education</h2>
              <p className="text-muted-foreground">My professional journey</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Work Experience</h3>

                {[
                  {
                    role: "PHP Backend Intern",
                    company: "DashDotRobotics",
                    period: "Oct 2024 - Dec 2024",
                    description:
                      "Developed RESTful APIs in PHP, improving system integration efficiency by 20%. Optimized database schemas for enhanced data performance and implemented scalable messaging system backend.",
                  },
                ].map((job, index) => (
                  <motion.div
                    key={job.role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative pl-8 border-l-2 border-muted"
                  >
                    <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
                    <h4 className="text-xl font-bold">{job.role}</h4>
                    <div className="flex items-center text-muted-foreground mt-1">
                      <span>{job.company}</span>
                      <span className="mx-2">•</span>
                      <span>{job.period}</span>
                    </div>
                    <p className="mt-2 text-muted-foreground">{job.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Education</h3>

                {[
                  {
                    degree: "B.Tech in AI and Data Science",
                    institution: "IIIT Kottayam",
                    period: "Expected 2027",
                    description:
                      "Focusing on machine learning, deep learning, and data science with a GPA of 9.1/10.0.",
                  },
                  {
                    degree: "Technical Skills",
                    institution: "Self-Learning & Coursework",
                    period: "Ongoing",
                    description:
                      "Programming Languages: Python, C++, Java. Frameworks: TensorFlow, Keras, Sklearn, BeautifulSoup, NLTK, Streamlit, Git.",
                  },
                  {
                    degree: "Additional Skills",
                    institution: "Languages & Soft Skills",
                    period: "Ongoing",
                    description:
                      "Languages: English (Verbal and written fluency), Hindi (Native), German (Beginner). Soft Skills: Collaborative teamwork, Cross-cultural communication.",
                  },
                ].map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative pl-8 border-l-2 border-muted"
                  >
                    <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <div className="flex items-center text-muted-foreground mt-1">
                      <span>{edu.institution}</span>
                      <span className="mx-2">•</span>
                      <span>{edu.period}</span>
                    </div>
                    <p className="mt-2 text-muted-foreground">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-2 text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
              <p className="text-muted-foreground">Let's discuss your project</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">saksham0405@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium">linkedin.com/in/saksham-saklani</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="font-medium">github.com/Sakshamliftin</p>
                    </div>
                  </div>
                </div>

                {/* <div className="pt-6">
                  <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary/10 transition-colors"
                    >
                      <Code className="h-5 w-5" />
                      <span className="sr-only">CodePen</span>
                    </Link>
                  </div>
                </div> */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold">Send Me a Message</h3>

                <div className="space-y-4">
  <p className="text-muted-foreground">
    Want to collaborate or have a question? Drop me an email directly.
  </p>

  <a
    href={`mailto:saksham0405@gmail.com?subject=Portfolio%20Contact&body=Hi%20Saksham,%0D%0A%0D%0A`}
    className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
  >
    Send Message via Email
  </a>
</div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 md:py-16">
        <div className="container flex flex-col items-center justify-center gap-4 text-center md:gap-6">
          <Link href="#home" className="font-bold text-2xl">
            <span className="text-primary">Saksham </span>Saklani
          </Link>

          <p className="text-muted-foreground max-w-md">
            Building intelligent ML solutions with machine learning and data science expertise.
          </p>

          <div className="flex gap-4">
            <Link
              href="https://x.com/imSaxm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary/10 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/saksham-saklani/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/Sakshamliftin/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary/10 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            {/* <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary/10 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link> */}
          </div>

          <div className="flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Back to top</span>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Saksham Saklani. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
