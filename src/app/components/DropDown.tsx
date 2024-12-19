import Links from "./Links";

export default async function DropDown(props: {
  title: string;
  content: string;
  linkNames: string[];
  links: string[];
}) {
  const content = props.content;
  const links = props.links;
  const linkNames = props.linkNames;
  const title = props.title;
  return (
    <div className="collapse collapse-arrow border-base-300 bg-base-200 border mb-4">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">
        <h2>{content}</h2>
        <br />
        <Links links={links} linkNames={linkNames}></Links>
      </div>
    </div>
  );
}
