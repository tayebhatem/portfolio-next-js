import IconCloud from "../ui/icon-cloud";


const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "php",
  'vite',
  'redux',
  'zustand',
  'restapi',
  "nodedotjs",
  "express",
  "nextjs",
  'convex',
  "mysql",
  "prisma",
  "mongodb",
  "postgresql",
  "firebase",
  
  "appwrite",
  "tailwind",
  "vercel",
  "expogo",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "python",
  "figma",
];

export function Tools() {
  return (
    <div className=" overflow-hidden  ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
