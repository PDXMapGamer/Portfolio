import Link from "next/link";
// todo Style links, have the current tab be a different colour to the other links.
export default function NavBar() {
  return (
    <nav className="mb-4">
      <Link className="link-class" href="/">
        Homepage
      </Link>
      <Link className="link-class" href="/current-projects">
        Current Projects
      </Link>
      <Link className="link-class" href="/hobbies">
        My Hobbies
      </Link>
      <Link className="link-class" href="/bingo">
        2025 Goals bingo
      </Link>
    </nav>
  );
}
