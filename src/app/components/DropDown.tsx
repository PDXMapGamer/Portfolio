export default function DropDown() {
  return (
    <div className="collapse collapse-arrow border-base-300 bg-base-200 border mb-4">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">About Me.</div>
      <div className="collapse-content">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}
