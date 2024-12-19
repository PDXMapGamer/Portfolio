import Link from "next/link";
//! When drop down has no links, pass an empty array as props.
// todo Style the links.
export default async function Links(props: { links: string[]; linkNames: string[] }) {
  const links = props.links;
  const linkNames = props.linkNames;
  return links.map((link, iteration) => (
    <Link key={link} href={link}>
      {linkNames[iteration]}
    </Link>
  ));
}
