import Link from "next/link";
// todo Style links, have the current tab be a differant colour to the other links.
export default function NavBar() {
  return (
    <nav className="mb-4">
      <Link className="mr-4" href="/">
        Homepage
      </Link>
      <Link className="mr-4" href="/past-projects">
        Previous Projects
      </Link>
      <Link className="mr-4" href="/current-projects">
        Current Projects
      </Link>
      <Link className="mr-4" href="/hobbies">
        My Hobbies
      </Link>
    </nav>
  );
}
