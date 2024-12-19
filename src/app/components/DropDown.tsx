export default async function DropDown(props: { content: string }) {
  const content = (await props).content;
  return (
    <div className="collapse collapse-arrow border-base-300 bg-base-200 border mb-4">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">About Me.</div>
      <div className="collapse-content">
        <p>{content}</p>
      </div>
    </div>
  );
}
