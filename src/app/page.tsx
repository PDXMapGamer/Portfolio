// "use client";

import Link from "next/link";
import DropDown from "./components/DropDown";
import TechStack from "./components/TechStack";

export default function Home() {
  const aboutMe: string =
    "I am an aspiring programmer who is ready to take my first steps into the tech industry and start a fulfilling career. I first learnt how to code in my GCSE Computer Science classes where I learnt a simple programming language called small basic, and at A level I learn how to use C#. In November 2024 I graduated the TechEd software development boot camp where I learnt the fundamentals of web development as well as a variety of useful things to consider such as improving accessibility using ARIA. This website I built will give you insights into my professional skills, hobbies and my current & past projects.";
  return (
    <>
      <p>Hello World! Welcome to my portfolio website! It&apos;s currently in development and is not complete yet.</p>
      <Link className="mb-4 link-class" href="https://github.com/PDXMapGamer?tab=repositories">
        Link to my github
      </Link>

      <DropDown title="About Me" content={aboutMe} links={[]} linkNames={[]} />
      <TechStack />
    </>
  );
}
