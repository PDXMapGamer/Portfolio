import Link from "next/link";
//! When drop down has no links, pass an empty array as props.
// todo Style the links.
export default async function Links(props: { links: string[]; linkNames: string[] }) {
  const { linkNames, links } = props;

  return links.map((link, iteration) => (
    <Link key={link} href={link}>
      {linkNames[iteration]}
    </Link>
  ));
}
