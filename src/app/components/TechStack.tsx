import Icon from "./Icon";

export default function TechStack() {
  return (
    <>
      <div className="collapse collapse-arrow border-base-300 bg-base-200 border">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">The &apos;Stack.</div>
        <div className="collapse-content">
          <h2>This website was made with:</h2>
          <ul>
            <li>Nextjs</li>
            <li>TailwindCSS</li>
            <li>TypeScript</li>
            <li>DaisyUI</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow border-base-300 bg-base-200 border">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Other Skills.</div>
        <div className="collapse-content">
          <h2>I also have skills with:</h2>
          <ul>
            <li>C#</li>
            <li>
              <Icon />
            </li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>PostgreSQL</li>
            <li>React</li>
            <li>Lua</li>
          </ul>
        </div>
      </div>
    </>
  );
}
