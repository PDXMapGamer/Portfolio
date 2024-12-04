import Icon from "./Icon";

export default function TechStack() {
  return (
    <>
      <div className="collapse collapse-arrow border-base-300 bg-base-200 border mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">The &apos;Stack.</div>
        <div className="collapse-content">
          <h2>This website was made with:</h2>
          <ul className="grid grid-cols-4">
            <li>
              <Icon icon="nextjs" skill="Next.js" />
            </li>
            <li>
              <Icon icon="tailwind" skill="TailwindCSS" />
            </li>
            <li>
              <Icon icon="typescript" skill="TypeScript" />
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow border-base-300 bg-base-200 border mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Other Skills.</div>
        <div className="collapse-content">
          <h2>I also have skills with:</h2>
          <ul className="grid grid-cols-4 gap-y-4">
            <li>
              <Icon icon="csharp" skill="C#" />
            </li>
            <li>
              <Icon icon="html" skill="HTML" />
            </li>
            <li>
              <Icon icon="css" skill="CSS" />
            </li>
            <li>
              <Icon icon="javascript" skill="javascript" />
            </li>
            <li>
              <Icon icon="sql" skill="SQL (Postgres)" />
            </li>
            <li>
              <Icon icon="react" skill="React" />
            </li>
            <li>
              <Icon icon="lua" skill="Lua" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
