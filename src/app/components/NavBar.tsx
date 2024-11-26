import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link className="mr-4" href="/">
        Homepage
      </Link>
      <Link className="mr-4" href="/past-projects">
        Previous Projects
      </Link>
      <Link className="mr-4" href="/current-projects">
        Projects Under Construction
      </Link>
      <Link className="mr-4" href="/hobbies">
        My Hobbies
      </Link>
    </nav>
  );
}
