// "use client";

import DropDown from "./components/DropDown";
import TechStack from "./components/TechStack";

export default function Home() {
  const aboutMe =
    "I am an aspiring programmer who wants to take thier first steps into the tech industry and start a fufilling career and finance my hobbies and future career goals.";
  return (
    <>
      <DropDown content={aboutMe} />
      <TechStack />
    </>
  );
}
