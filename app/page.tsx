"use client";
import Navbar from "@/components/navbar";
import { DialogContent, DialogHeader, DialogTitle, Dialog, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowDown } from "lucide-react"; // Import the ArrowDown icon
import { DirectionAwareHoverDemo } from "@/components/directionHover";

const projects = [
  {
    name: "Journey Maps",
    description: "YOUR TIMELINE TO OVERCOME LIFE PROBLEMS",
    link: "https://journeymaps.life",
    imageUrl: "https://images.unsplash.com/photo-1489641024260-20e5cb3ee4aa?q=80&w=3133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Nachdi Jawani",
    description: "Dance studio in Brampton",
    link: "https://nachdijawani-melanie.com",
    imageUrl: "https://images.unsplash.com/photo-1644495799968-dd9b4118aef3?q=80&w=2924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "IFKT",
    description: "Textile conference 2024",
    link: "https://ifktnam.ca",
    imageUrl: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?q=80&w=2814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Food Saviour",
    description: "Food waste tracker for non-profits",
    link: "https://github.com/Harman-Sahota/Multiple-days-Non-Profits-and-Health-Wellness-Group-B",
    imageUrl: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=3175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "NLP Chatbot",
    description: "Satire therapy chatbot",
    link: "https://github.com/Harman-Sahota/not-avg-lifecoach-individual",
    imageUrl: "https://images.unsplash.com/photo-1517315003714-a071486bd9ea?q=80&w=2432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Savvy Snip",
    description: "iOS app to store code snippets",
    link: "https://github.com/Harman-Sahota/Savvy-Snip",
    imageUrl: "https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const skills = [
  {
    category: "Languages/Frameworks",
    items: [
      "Python.py",
      "JavaScript.js",
      "Java.java",
      "HTML.html",
      "CSS.css",
      "Django.py",
      "React.js",
      "PHP.php",
      "Typescript.ts",
      "C.c",
      "Swift.swift",
      "Node.js",
      "Express.js",
    ],
  },
  {
    category: "Databases and Cloud Technologies",
    items: [
      "MySQL.sql",
      "MongoDB.js",
      "SQLLite.sql",
      "GoogleFirebase.js",
      "AWS.js",
      "GCP.js",
    ],
  },
  {
    category: "Operating Systems and Testing",
    items: [
      "Linux",
      "Windows",
      "MacOS",
      "CI/CD",
      "TestAutomation.js",
    ],
  },
  {
    category: "Tools/Methodologies",
    items: [
      "Git",
      "RESTfulAPI.js",
      "Docker",
      "Agile.md",
      "SoftSkills.md",
      "SDLC.md",
    ],
  },
];

const experience = [
  {
    title: "Software Developer",
    company: "IFKT",
    duration: "November 2023 – April 2024",
  },
  {
    title: "Software Developer",
    company: "Nachdi Jawani",
    duration: "July 2023 – November 2023",
  },
  {
    title: "Software Developer",
    company: "Signature Culinary Solutions",
    duration: "May 2022 – August 2022",
  },
  {
    title: "Computer Assistant/Technical Support",
    company: "Canadian Mental Health Association (CMHA)",
    duration: "May 2019 – May 2022",
  },
  {
    title: "Software Engineer Fellow",
    company: "Headstarter",
    duration: "July 2024 – Current",
  },
];

const Home = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pdfDialogOpen, setPdfDialogOpen] = useState(false);
  const [projectDialogOpen, setProjectDialogOpen] = useState(false); // State for project dialog
  const [skillsDialogOpen, setSkillsDialogOpen] = useState(false);
  const [experienceDialogOpen, setExperienceDialogOpen] = useState(false);

  return (
    <div className="min-h-screen w-full dark:bg-desktop-dark bg-desktop-light">
      <Navbar />
      <div className="flex-grow flex items-start justify-end p-4">
        <div className="flex flex-col items-center space-y-2">
          {/* Folders */}
          <div
            className="flex flex-col items-center p-2 rounded-lg hover:cursor-pointer"
            onClick={() => setPdfDialogOpen(true)}
          >
            <img src="./pdf.png" alt="Resume" className="w-16 h-16" />
            <span className="text-md text-white font-md">Resume.pdf</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg hover:cursor-pointer">
            <img
              src="./safari.png"
              alt="Projects"
              className="w-30 h-16"
              onClick={() => setProjectDialogOpen(true)} // Open project dialog on click
            />
            <span className="text-md text-white font-md">Projects</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg hover:cursor-pointer" onClick={() => setSkillsDialogOpen(true)} >
            <img src="/folder.webp" alt="Skills" className="w-16 h-16" />
            <span className="text-md text-white font-md">Skills</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-lg hover:cursor-pointer" onClick={() => setExperienceDialogOpen(true)}>
            <img src="/folder.webp" alt="Experience" className="w-16 h-16" />
            <span className="text-md text-white font-md">Experience</span>
          </div>

          {/* Image File */}
          <div
            className="flex flex-col items-center p-2 rounded-lg hover:cursor-pointer"
            onClick={() => setDialogOpen(true)}
          >
            <img src="./harman_sahota.jpg" alt="Me" className="w-16 h-16" />
            <span className="text-md text-white font-md">harman_sahota.jpg</span>
          </div>
        </div>
      </div>

      {/* Dialog for Image Preview */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[425px] mx-auto p-2">
          <DialogHeader>
            <DialogTitle>harman_sahota.jpg</DialogTitle>
            <DialogDescription>
              Click outside the image to close the preview.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <img src="./harman_sahota.jpg" alt="Me" className="max-w-full h-auto" />
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog for PDF Preview */}
      <Dialog open={pdfDialogOpen} onOpenChange={setPdfDialogOpen}>
        <DialogContent className="sm:max-w-[425px] mx-auto p-2">
          <DialogHeader>
            <DialogTitle>Resume.pdf</DialogTitle>
            <DialogDescription>
              Click outside the PDF to close the preview.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <iframe
              src="./harmansahota-swe.pdf"
              className="w-full h-[600px]"
              title="Resume PDF"
            />
          </div>
          <DialogFooter>
            <a href="./harmansahota-swe.pdf" download>
              <Button>Download Resume.pdf</Button>
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={projectDialogOpen} onOpenChange={setProjectDialogOpen}>
        <DialogContent className="sm:max-w-[80%] max-h-[90vh] mx-auto p-0 rounded-lg bg-neutral-900 overflow-y-auto">
          <div className="flex flex-col h-full">
            {/* URL Bar */}
            <div className="flex items-center p-2 border-b">
              <input
                type="text"
                className="flex-grow p-2 border rounded-md"
                placeholder="harman-sahota.github.io/projects"
                readOnly // Making it non-editable
              />
            </div>

            {/* Project Content Area */}
            <div className="flex-grow overflow-auto flex flex-col">
              {/* Scrollable Grid */}
              <div className="p-2">
                <h1 className="font-bold mb-2 text-5xl mt-4 text-center">Projects</h1>
                <DirectionAwareHoverDemo projects={projects} />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>


      <Dialog open={skillsDialogOpen} onOpenChange={setSkillsDialogOpen}>
        <DialogContent className="sm:max-w-[80%] mx-auto p-4 rounded-lg bg-neutral-900" style={{ height: '80vh', overflowY: 'auto' }}>
          <DialogHeader>
            <DialogTitle>Skills</DialogTitle>
            <DialogDescription>
              Here are my skills organized by category:
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skillCategory, index) => (
              <div key={index} className="mb-4">
                <h2 className="font-bold text-xl">{skillCategory.category}</h2>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {skillCategory.items.map((skill, idx) => (
                    <div key={idx} className="p-2 border rounded-lg bg-gray-800 text-white text-center">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>


      <Dialog open={experienceDialogOpen} onOpenChange={setExperienceDialogOpen}>
        <DialogContent className="sm:max-w-[80%] mx-auto p-4 rounded-lg bg-neutral-900" style={{ height: '80vh', overflowY: 'auto' }}>
          <DialogHeader>
            <DialogTitle>Experience</DialogTitle>
            <DialogDescription>
              Here are my work experiences organized by title:
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4">
            {experience.map((job, index) => (
              <div key={index} className="p-2 border rounded-lg bg-gray-800 text-white">
                <h2 className="font-bold">{job.title}</h2>
                <span>{job.company}</span>
                <span className="block">{job.duration}</span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default Home;
