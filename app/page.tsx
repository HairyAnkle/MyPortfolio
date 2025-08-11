"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Moon,
  Sun,
  Shield,
  Code,
  Award,
  ExternalLink,
  Download,
  Terminal,
  Lock,
  Wifi,
  Globe,
  Menu,
  X,
  Car,
  ShieldAlert,
  BusFront,
  Bus
  
} from "lucide-react"
import { useTheme } from "next-themes"

import img from '../app/assets/myprofilepic.jpg'
import img1 from '../app/assets/linkedinqr.png'
import { describe } from "node:test"
import { title } from "process"

export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "certifications", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  if (!mounted) return null

  const navigationItems = ["Home", "About", "Skills", "Projects", "Certifications", "Achievements", "Contact"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-green-400/20 shadow-lg shadow-green-400/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Shield className="h-7 w-7 text-green-400 animate-pulse" />
                <div className="absolute inset-0 h-7 w-7 text-green-400/20 animate-ping" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                Cristian Ogena
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-green-400 hover:scale-105 relative group ${
                    activeSection === item.toLowerCase() ? "text-green-400" : "text-gray-300"
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-green-400 hover:text-green-300 hover:bg-green-400/10 transition-all duration-300"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all" />
                ) : (
                  <Moon className="h-5 w-5 rotate-0 scale-100 transition-all" />
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-green-400 hover:text-green-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-green-400/20">
              <div className="flex flex-col space-y-3 pt-4">
                {navigationItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-left text-sm font-medium transition-colors hover:text-green-400 ${
                      activeSection === item.toLowerCase() ? "text-green-400" : "text-gray-300"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-blue-900/10" />
          <div className="absolute inset-0 cyber-grid opacity-30" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-green-400 rounded-full animate-ping" />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8 group">
            <div className="relative inline-block">
              <img
                src={img.src}
                alt="Cristian Ogena"
                className="w-56 h-56 rounded-full mx-auto mb-6 border-4 border-green-400 shadow-2xl shadow-green-400/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-green-400/50"
              />
              <div className="absolute inset-0 w-56 h-56 rounded-full mx-auto border-2 border-green-400/50 animate-ping" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-green-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            Cristian Ogena
          </h1>

          <div className="mb-8">
            <p className="text-2xl md:text-3xl text-gray-300 mb-2 font-light">BSCS Student</p>
            <p className="text-xl md:text-2xl text-green-400 font-semibold text-shadow-glow">
              Aspiring Cybersecurity Specialist
            </p>
          </div>

          <div className="flex items-center justify-center space-x-8 mb-12">
            <a
              href="https://github.com/hairyankle"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full hover:from-green-400/20 hover:to-cyan-400/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-8 w-8 text-green-400 group-hover:text-white transition-colors" />
              <div className="absolute inset-0 rounded-full bg-green-400/20 opacity-0 group-hover:opacity-100 animate-pulse" />
            </a>

            <div className="group relative p-4 bg-white/95 rounded-xl shadow-lg hover:shadow-green-400/20 transition-all duration-300 hover:scale-105">
              <img src={img1.src} alt="Portfolio QR Code" className="w-24 h-24" />
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity" />
            </div>
          </div>

          <div className="space-y-4">
            <Button
              onClick={() => scrollToSection("about")}
              className="bg-gradient-to-r from-green-400 to-cyan-400 text-black hover:from-green-300 hover:to-cyan-300 font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/30"
            >
              Explore My Work
            </Button>
            <div>
              <a href="" download> {/* Replace with resume link */}
                <Button
                  variant="outline"
                  className="border-green-400/50 text-green-400 hover:bg-green-400/10 font-medium px-6 py-3 rounded-full ml-4 bg-transparent"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-r from-slate-900/50 to-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                I’m a Computer Science student specializing in Digital Forensics, driven by a passion for uncovering digital evidence and strengthening cybersecurity. Skilled in logical operations, network configuration, and problem-solving, I aim to use my expertise to help protect and secure digital environments while continuously learning in a collaborative setting.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Code,
                    text: "Passionate about cybersecurity and ethical hacking",
                  },
                  {
                    icon: Shield,
                    text: "Focused on network security and penetration testing",
                  },
                  {
                    icon: Terminal,
                    text: "Active in CTF competitions and security challenges",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="p-3 bg-green-400/10 rounded-full group-hover:bg-green-400/20 transition-colors">
                      <item.icon className="h-6 w-6 text-green-400" />
                    </div>
                    <span className="text-gray-300 text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-black/80 to-slate-900/80 border-green-400/30 shadow-2xl shadow-green-400/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-green-400 flex items-center space-x-2">
                  <Award className="h-6 w-6" />
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-bold text-xl text-white">Bachelor of Science in Computer Science major in Digital Forensics</h3>
                <p className="text-gray-400 text-lg">National University - Main</p>
                <p className="text-gray-400">551 F Jhocson St, Sampaloc, Manila, 1008 Metro Manila</p>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-400/20 text-green-400 border-green-400/50">2022 – 2026</Badge>
                  <Badge className="bg-green-400/20 text-green-400 border-green-400/50">Consistent Honor</Badge>
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-400">
                    Current Student
                  </Badge>
                </div>
              </CardContent>

              <CardContent className="space-y-4">
                <h3 className="font-bold text-xl text-white">Senior High School</h3>
                <p className="text-gray-400 text-lg">Parañaque National High School - Main</p>
                <p className="text-gray-400">8155 Dr Arcadio Santos Ave, Parañaque, 1700 Metro Manila</p>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-400/20 text-green-400 border-green-400/50">2020 – 2022</Badge>
                  <Badge className="bg-green-400/20 text-green-400 border-green-400/50">Cum Laude</Badge>
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-400">
                    Graduated
                  </Badge>
                </div>
              </CardContent>

              <CardContent className="space-y-4">
                <h3 className="font-bold text-xl text-white">Junior High School</h3>
                <p className="text-gray-400 text-lg">Parañaque National High School - Main</p>
                <p className="text-gray-400">8155 Dr Arcadio Santos Ave, Parañaque, 1700 Metro Manila</p>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-400/20 text-green-400 border-green-400/50">2016 – 2020</Badge>
                  <Badge className="bg-green-400/20 text-green-400 border-green-400/50">Consistent Top Student</Badge>
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-400">
                    Graduated
                  </Badge>
                </div>
              </CardContent>

              <CardContent className="space-y-4">
                <h3 className="font-bold text-xl text-white">Elementary</h3>
                <p className="text-gray-400 text-lg">San Antonio Elementary School - Silverio Annex</p>
                <p className="text-gray-400">Purok 4 Silverio Compound Rd, San Isidro, Sucat, Parañaque, 1700 Metro Manila</p>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-400/20 text-green-400 border-green-400/50">2010 – 2016</Badge>
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-400">
                    Graduated
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cybersecurity Tools",
                icon: Shield,
                skills: [
                  "Wireshark",
                  "Nmap",
                  "Metasploit",
                  "Burp Suite",
                  "Kali Linux",
                  "Cisco Packet Tracer",
                  "Ghidra",
                  "IDA Free"
                ],
                gradient: "from-green-400/20 to-emerald-400/20",
              },
              {
                title: "Programming Languages",
                icon: Code,
                skills: ["Python", "Java", "C/C++", "Bash scripting", "JavaScript", "Kotlin", "SQL",],
                gradient: "from-cyan-400/20 to-blue-400/20",
              },
              {
                title: "Other Skills",
                icon: Terminal,
                skills: ["Linux administration", "Git/GitHub", "Cloud basics", "Autopsy", "Digital forensics", "Network security"],
                gradient: "from-purple-400/20 to-pink-400/20",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${category.gradient} border-green-400/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-xl`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <div className="p-2 bg-green-400/20 rounded-lg">
                      <category.icon className="h-6 w-6 text-green-400" />
                    </div>
                    <span className="text-white">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-green-400/50 text-green-400 hover:bg-green-400/10 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-r from-slate-900/50 to-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Network Spoofing Detection App",
                description: "Android app detecting ARP/DNS spoofing in IoT networks",
                icon: Wifi,
                tech: ["Kotlin", "Firebase", "MVVM"],
                gradient: "from-green-400/10 to-emerald-400/10",
              },
              {
                title: "Vulnerability Scanner",
                description: "Python-based tool scanning IoT devices for common CVEs",
                icon: Lock,
                tech: ["Python", "CVE Database", "IoT Security"],
                gradient: "from-red-400/10 to-orange-400/10",
              },
              {
                title: "CTF Challenge Writeups",
                description: "Solutions and guides for various TryHackMe/HackTheBox rooms",
                icon: Terminal,
                tech: ["TryHackMe", "HackTheBox", "Documentation"],
                gradient: "from-purple-400/10 to-pink-400/10",
              },
              {
                title: "IoT Emergency Alert System",
                description: "Android app sending emergency alerts via SMS for non-tech users",
                icon: ShieldAlert,
                tech: ["Android", "SMS API", "User-Friendly", "In Progress"],
                gradient: "from-purple-400/10 to-pink-400/10",
              },
              {
                title: "Lulan",
                description: "A mobile app designed to streamline school transportation operations, ensuring students' safety and punctuality.",
                icon: BusFront,
                tech: ["Java", "Android Studio", "Firebase", "Google Maps API", "Real-time Tracking"],
                gradient: "from-red-400/10 to-orange-400/10",
              }
            ].map((project, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${project.gradient} border-green-400/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/20 backdrop-blur-sm group`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <div className="p-3 bg-green-400/20 rounded-lg group-hover:bg-green-400/30 transition-colors">
                      <project.icon className="h-6 w-6 text-green-400" />
                    </div>
                    <span className="text-white">{project.title}</span>
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-800/50 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-400/50 text-green-400 hover:bg-green-400/10 transition-all duration-300 group-hover:scale-105 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Certifications
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Google Cybersecurity Professional Certificate",
                year: "2025",
                status: "In Progress",
                color: "green",
              },
              {
                title: "Cisco Introduction to Cybersecurity",
                year: "2025",
                status: "In Progress",
                color: "blue",
              },
              {
                title: "IBM Cybersecurity Fundamentals",
                year: "2025",
                status: "In Progress",
                color: "purple",
              },
              {
                title: "TryHackMe Cybersecurity Essentials",
                year: "2025",
                status: "Completed",
                color: "green",
              },
              {
                title: "CompTIA Security+",
                year: "2025",
                status: "In Progress",
                color: "yellow",
              }
            ].map((cert, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-black/80 to-slate-900/80 border-green-400/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-green-400/20 rounded-lg group-hover:bg-green-400/30 transition-colors">
                      <Award className="h-6 w-6 text-green-400" />
                    </div>
                    <span className="text-white text-lg">{cert.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400 text-lg">{cert.year}</p>
                    <Badge
                      className={`${
                        cert.status === "Completed"
                          ? "bg-green-400/20 text-green-400 border-green-400/50"
                          : "bg-yellow-400/20 text-yellow-400 border-yellow-400/50"
                      }`}
                    >
                      {cert.status}
                    </Badge>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-400/50 text-green-400 hover:bg-green-400/10 transition-all duration-300 w-full bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 bg-gradient-to-r from-slate-900/50 to-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Achievements
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "TIP - Quezon City Cybersecurity CTF Competition",
                achievement: "3rd Place",
                year: "2025",
                description:
                  "Competed against students from multiple universities in various cybersecurity challenges including web exploitation, cryptography, and network security.",
                icon: Award,
              },
              {
                title: "TryHackMe Achievement",
                achievement: "30+ Rooms Completed",
                year: "Top 3% Ranking",
                description:
                  "Successfully completed over 30 cybersecurity challenges covering penetration testing, digital forensics, and vulnerability assessment.",
                icon: Terminal,
              },
              {
                title: "Trend Micro CTF Competition",
                achievement: "Finalist",
                year: "2024",
                description:
                  "Reached the finals in a national-level Capture The Flag competition, showcasing skills in reverse engineering, web security, and cryptography.",
                icon: ShieldAlert,
              },
              {
                title: "DICT Hack4Gov 3 CTF Competition",
                achievement: "5th Place in NCR Region",
                year: "2024",
                description:
                  "Participated in a government-organized CTF competition focused on cybersecurity challenges relevant to public service and governance.",
                icon: Award,
              },
              {
                title: "WWCTF 2025",
                achievement: "Top 96 Ranking International",
                year: "2025",
                description:
                  "Achieved a top 96 ranking in the World Wide Capture The Flag competition, competing against teams from around the globe in advanced cybersecurity challenges.",
                icon: Award,
              }
            ].map((achievement, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-black/80 to-slate-900/80 border-green-400/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <div className="p-3 bg-green-400/20 rounded-lg group-hover:bg-green-400/30 transition-colors">
                      <achievement.icon className="h-7 w-7 text-green-400" />
                    </div>
                    <span className="text-white">{achievement.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-green-400">{achievement.achievement}</p>
                    <Badge className="bg-green-400/20 text-green-400 border-green-400/50 text-lg px-3 py-1">
                      {achievement.year}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm always interested in discussing cybersecurity opportunities, collaborating on projects, or
                connecting with fellow security enthusiasts.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, text: "cristian.ogena09@gmail.com", href: "mailto:cristian.ogena09@gmail.com" },
                  { icon: Phone, text: "+63 (921) 386-1737", href: "tel:+639213861737" },
                  {
                    icon: Linkedin,
                    text: "linkedin.com/in/cristian-ogena",
                    href: "https://linkedin.com/in/cristian-ogena",
                  },
                  { icon: Github, text: "github.com/hairyankle", href: "https://github.com/hairyankle" },
                  { icon: MapPin, text: "Parañaque City, Philippines", href: "https://www.google.com/maps/place/Para%C3%B1aque,+Metro+Manila/@14.4843536,120.9705236,13z/data=!3m1!4b1!4m6!3m5!1s0x3397ce5df9175d09:0x2d041bbb0b2842e5!8m2!3d14.4792946!4d121.0198469!16zL20vMDE2dGQx?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D" },
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-4 group hover:text-green-400 transition-colors"
                  >
                    <div className="p-3 bg-green-400/10 rounded-full group-hover:bg-green-400/20 transition-colors">
                      <contact.icon className="h-6 w-6 text-green-400" />
                    </div>
                    <span className="text-gray-300 text-lg group-hover:text-green-400 transition-colors">
                      {contact.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-black/80 to-slate-900/80 border-green-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-green-400 flex items-center space-x-2">
                  <MapPin className="h-6 w-6" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center border border-green-400/20">
                  <div className="text-center space-y-4">
                    <div className="relative">
                      <Globe className="h-16 w-16 text-green-400 mx-auto animate-pulse" />
                      <div className="absolute inset-0 h-16 w-16 text-green-400/20 animate-ping mx-auto" />
                    </div>
                    <div>
                      <p className="text-green-400 text-xl font-semibold">Interactive Map</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-green-400/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-green-400" />
              <span className="text-gray-400">© 2025 Cristian Ogena</span>
            </div>
            <p className="text-gray-400 text-center">Built with Next.js 15, React 19, and passion for cybersecurity</p>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/hairyankle" className="text-green-400 hover:text-green-300 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/cristian-ogena"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
