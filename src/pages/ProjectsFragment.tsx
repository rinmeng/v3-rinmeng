import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowBigRightIcon } from "lucide-react";
import React from "react";

// Import all logos
import ViteLogo from "@/assets/logos/vite-svgrepo-com.svg";
import ReactLogo from "@/assets/logos/react-svgrepo-com.svg";
import TailwindCSSLogo from "@/assets/logos/tailwindcss-icon-svgrepo-com.svg";
import ExpressLogo from "@/assets/logos/express-svgrepo-com.svg";
import ShadCNUILogo from "@/assets/logos/shadcnui-white.svg";
import DockerLogo from "@/assets/logos/docker-svgrepo-com.svg";
import NodeJSLogo from "@/assets/logos/node-js-svgrepo-com.svg";
import HTML5Logo from "@/assets/logos/html-5-svgrepo-com.svg";
import CSS3Logo from "@/assets/logos/css-svgrepo-com.svg";
import GitLogo from "@/assets/logos/git-svgrepo-com.svg";
import PostgreSQLLogo from "@/assets/logos/postgresql-svgrepo-com.svg";
import JavaScriptLogo from "@/assets/logos/javascript-svgrepo-com.svg";
import TypeScriptLogo from "@/assets/logos/typescript-svgrepo-com.svg";
import VercelLogo from "@/assets/logos/vercel-fill-white.svg";
import SupabaseLogo from "@/assets/logos/supabase-seeklogo.svg";
// import JavaLogo from "@/assets/logos/java-svgrepo-com.svg";
// import AndroidStudioLogo from "@/assets/logos/androidstudio-svgrepo-com.svg";
// import FirebaseLogo from "@/assets/logos/firebase-svgrepo-com.svg";
// import PythonLogo from "@/assets/logos/python-svgrepo-com.svg";
import GitHubLogo from "@/assets/logos/github-white.svg";
import MySQLLogo from "@/assets/logos/mysql-svgrepo-com.svg";

// import images
import KDT from "@/assets/projects/KDT.png";
import RM from "@/assets/projects/RM.png";
import PC8TH from "@/assets/projects/PC8TH.png";
import CTMS from "@/assets/projects/CTMS.png";

interface ProjectFragmentProps {
  title: string;
  stacks?: string[];
  imgSrc: string;
  description: string;
  link?: string;
  github_link?: string;
}

const projects = [
  {
    title: "*Collaborative Task Management System (CTMS)",
    imgSrc: CTMS,
    stacks: [
      HTML5Logo,
      CSS3Logo,
      ViteLogo,
      ReactLogo,
      JavaScriptLogo,
      NodeJSLogo,
      ExpressLogo,
      PostgreSQLLogo,
      GitLogo,
      GitHubLogo,
      DockerLogo,
    ],
    description: `
    CTMS is role-based task management system that I developed for a course project with my group members. 
    I am the assumed scrum master and I am also in charge of developing both the frontend and backend of the system.
    This was my first full exposure to full-stack development and RESTful APIs.
    `,
    github_link: "https://github.com/rinmeng/NodeNinjas",
  },
  {
    title: "KPop Dance Team's Website V3",

    imgSrc: KDT,
    description: `I oversaw the Digital Producer role where I was in charge of their website development, maintenance. 
      I also developed a custom CMS for them to manage their website content such as links, positions, and sponsors.
      This website went through multiple iterations, from a simple HTML/CSS website to a ReactJS + TailwindCSS website, and now to a Vite + ReactTS + shadcn/ui website.`,
    link: "https://kdtsuo.vercel.app",
    github_link: "https://github.com/kdtsuo/v3",
    stacks: [
      HTML5Logo,
      CSS3Logo,
      JavaScriptLogo,
      TypeScriptLogo,
      NodeJSLogo,
      ViteLogo,
      ReactLogo,
      TypeScriptLogo,
      TailwindCSSLogo,
      ShadCNUILogo,
      VercelLogo,
      SupabaseLogo,
      PostgreSQLLogo,
    ],
  },
  {
    title: "Personal Website V3",
    imgSrc: RM,
    stacks: [
      HTML5Logo,
      CSS3Logo,
      JavaScriptLogo,
      TypeScriptLogo,
      NodeJSLogo,
      ViteLogo,
      ReactLogo,
      TypeScriptLogo,
      ShadCNUILogo,
      TailwindCSSLogo,
      VercelLogo,
    ],
    description: `There are many stages to my personal website development. This website follows similar iterations to KPop Dance Team's website, 
    where I went from a simple HTML/CSS website, to NodeJS TailwindCSS, to ReactJS + TailwindCSS, and now to Vite + ReactTS + shadcn/ui.`,
    link: "https://rinmeng.vercel.app",
    github_link: "https://github.com/rinmeng/v3-rinmeng",
  },
  {
    title: "PC8TH",
    imgSrc: PC8TH,
    stacks: [
      HTML5Logo,
      CSS3Logo,
      TailwindCSSLogo,
      NodeJSLogo,
      JavaScriptLogo,
      ExpressLogo,
      MySQLLogo,
      DockerLogo,
    ],
    description: `PC8th is an PC parts e-commerce website that me and my partner developed for a course project. 
    It is my first exposure to backend development and I learned an immense amount of how backend system works. 
    This project was honorably mentioned by the professor of the course.`,
    github_link: "https://github.com/rinmeng/pc8th",
  },
];

const ProjectFragment: React.FC<ProjectFragmentProps> = ({
  title,
  imgSrc,
  description,
  link,
  stacks,
  github_link,
}) => {
  return (
    <Card className="grid grid-cols-1 xl:grid-cols-3 gap-0">
      <Card className="border-l-0 border-none rounded-none shadow-none py-2">
        <CardContent className="p-2 md:p-6 ">
          <AspectRatio ratio={16 / 9}>
            <img
              className="h-full w-full object-cover"
              src={imgSrc}
              alt={title}
            />
          </AspectRatio>
        </CardContent>
      </Card>

      <Card className="w-full xl:col-span-2 border-none shadow-none py-2">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-extralight text-center xl:text-left">
            {title}
          </CardTitle>
          <CardDescription className="flex flex-col space-y-2">
            <div className="text-center xl:text-left">Skills Gained & Used</div>
            {stacks && (
              <div className="flex items-center justify-center xl:justify-start flex-wrap gap-2 not-dark:invert-100 dark:invert-0">
                {stacks.map((stack) => (
                  <img
                    key={stack}
                    className="w-6 h-auto"
                    src={stack}
                    alt={stack}
                  />
                ))}
              </div>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-base md:text-lg">{description}</div>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-end gap-4">
          {github_link && (
            <Button
              variant={"secondary"}
              size="lg"
              className="w-full md:w-auto"
              onClick={() => window.open(github_link)}
            >
              View Repository
              <ArrowBigRightIcon />
            </Button>
          )}
          {link && (
            <Button
              size="lg"
              className="w-full md:w-auto"
              onClick={() => window.open(link)}
            >
              View Project
              <ArrowBigRightIcon />
            </Button>
          )}
        </CardFooter>
      </Card>
    </Card>
  );
};

const ProjectsFragment: React.FC = () => {
  return (
    <div className="container mx-auto px-0 ">
      <div className="flex w-full flex-col items-center justify-start h-auto">
        <Card className="w-full border-t-0 border-x-0 border-b-0 rounded-none">
          <CardHeader className="border-t-0 border-x-0 border-b rounded-none border-dashed pb-6 md:pb-10">
            <CardTitle className="text-4xl md:text-6xl font-extralight">
              Projects
            </CardTitle>
            <CardDescription className="text-sm md:text-base">
              Here are some of the projects I've worked on.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 md:space-y-4">
            {projects.map((project) => (
              <ProjectFragment key={project.title} {...project} />
            ))}
          </CardContent>
          <CardFooter className="border-t-0 border-x-0 border-b rounded-none border-dashed mb-6 md:mb-10"></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProjectsFragment;
