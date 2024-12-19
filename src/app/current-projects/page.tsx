import DropDown from "../components/DropDown";

export default function Current_Project() {
  // todo Expand the description of the portfolio page
  // todo Add link to vercel deployment of JP page when it is deployed. Also expand on the description when more details are added.

  return (
    <>
      <DropDown
        title="Portfolio Website."
        content="I am currently working on my portfolio website."
        linkNames={["Github Repo"]}
        links={["https://github.com/PDXMapGamer/Portfolio"]}
      ></DropDown>
      <DropDown
        title="Japanese Learning Website (Currently has no name)."
        content="I am currently working on a site I, and others can use to help learn Japanese, including a theoretical method I have never seen any other learning resource do. (Site currently not hosted yet)"
        linkNames={["Github Repo"]}
        links={["https://github.com/PDXMapGamer/JP"]}
      ></DropDown>
    </>
  );
}
