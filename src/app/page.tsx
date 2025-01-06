// "use client";

import Link from "next/link";
import DropDown from "./components/DropDown";
import TechStack from "./components/TechStack";

export default function Home() {
  const aboutMe: string =
    "I am an aspiring programmer who wants to take thier first steps into the tech industry and start a fufilling career and finance my hobbies and future career goals.";
  return (
    <>
      <Link href="https://github.com/PDXMapGamer?tab=repositories">Link to my gitchub</Link>
      <DropDown title="About Me" content={aboutMe} links={[]} linkNames={[]} />
      <TechStack />
    </>
  );
}
