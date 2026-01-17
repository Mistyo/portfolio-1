import { Experience, SkillCategory, Project, Achievement, SocialLink } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Freelance Content Writer',
    company: 'Remote',
    period: '2023 – Present',
    description: [
      'Write research-based articles in science, education, and technology.',
      'Convert complex subjects (astronomy, biology, physics) into engaging explanations.',
      'Script and outline short-form and long-form educational content.',
      'Produce high-quality, SEO-friendly, and structured documentation.'
    ]
  },
  {
    id: 'exp2',
    role: 'Freelance Video Editor',
    company: 'Remote',
    period: '2023 – Present',
    description: [
      'Edit reels, explainers, and commentary videos using DaVinci Resolve & CapCut.',
      'Create scripts, narrative flows, and perform audio cleanup and color correction.',
      'Produce voiceover-based astronomy and science explainers.'
    ]
  },
  {
    id: 'exp3',
    role: 'Science Communicator',
    company: 'Remote / IST Pakistan',
    period: '2017 – Present',
    description: [
      'Delivered award-winning speeches on astronomy and space sustainability.',
      'Volunteered in science outreach programs; created accessible content for students.'
    ]
  },
  {
    id: 'exp4',
    role: 'STEM Tutor (Bio, Chem, Phys)',
    company: 'Rawalpindi',
    period: '2022 – Present',
    description: [
      'Teach students using conceptual breakdowns, diagrams, and custom notes.',
      'Simplify complex topics using storytelling-based explanations.'
    ]
  },
  {
    id: 'exp5',
    role: 'Liaison Officer Intern',
    company: 'Government of Pakistan',
    period: '2017 – 2020',
    description: [
      'Managed protocol for international delegations (Kuwait, China, UAE).',
      'Handled documentation, coordination, and official communication channels.'
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Content & Writing",
    items: ["Science Communication", "Copywriting & SEO", "Scriptwriting", "Technical Writing", "Editing & Proofreading"]
  },
  {
    category: "Digital & Technical",
    items: ["HTML", "CSS", "JavaScript", "Git & GitHub", "UI/UX Structure", "Prompt Engineering", "Web Content Mgmt"]
  },
  {
    category: "Video & Media",
    items: ["DaVinci Resolve", "CapCut", "Color Correction", "Voiceovers"]
  },
  {
    category: "Soft Skills",
    items: ["Public Speaking", "Analytical Thinking", "Problem Solving"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'Personal Portfolio Website',
    description: 'Developed a version-controlled portfolio using HTML, CSS, and JS to showcase professional achievements.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://knowfaateh.netlify.app',
    githubUrl: 'https://github.com/syedmister'
  },
  {
    id: 'proj2',
    title: 'GitHub Micro-Projects',
    description: 'Created various experiments focusing on JavaScript logic, DOM manipulation, and utilities.',
    tags: ['JavaScript', 'DOM', 'Open Source'],
    githubUrl: 'https://github.com/syedmister'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'ach1', title: '1st Place', description: 'IST Pakistan Space Speech Competition.' },
  { id: 'ach2', title: 'Best Creative Writer Award', description: 'Awarded in 2019 along with multiple Essay Competition Wins.' },
  { id: 'ach3', title: 'High-Impact Speaker', description: 'Recognized for delivering high-impact public speeches on science & space.' },
  { id: 'ach4', title: 'Certifications', description: 'Google Verified Marketer, Tech Writing Awards, Public Speaking Workshops.' }
];

export const SOCIALS: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/syedmister', icon: 'Github' },
  { label: 'Website', url: 'https://knowfaateh.netlify.app', icon: 'Globe' },
  { label: 'Email', url: 'mailto:MisterSyed6@gmail.com', icon: 'Mail' }
];

export const INTERESTS = ["Astronomy", "Coding", "Space Exploration", "Digital Media", "UX Thinking"];