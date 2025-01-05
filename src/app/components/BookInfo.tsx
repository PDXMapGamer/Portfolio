import Image from "next/image";
import Link from "next/link";

export default function BookInfo(props: {
  iconPath: string;
  title: string;
  altTitle: string | null;
  summery: string;
  amazonLinks: string[];
}) {
  const { iconPath, title, altTitle, summery, amazonLinks } = props;
  return (
    <>
      <div className="collapse collapse-arrow border-base-300 bg-base-200 border mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <Image alt={title} src={`/icons/${iconPath}.jpg`} width={30} height={45} />
          {title}
        </div>
        <div className="collapse-content">
          <h2>{altTitle ? altTitle : null}</h2>
          <h3>{summery}</h3>
          <p>Amazon Links:</p>
          {amazonLinks.map((link) => (
            <Link key={link} href={link}>
              {link} <br />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
