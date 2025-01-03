export default function BingoItem(props: { content: string; isFulfilled: boolean; notes: string }) {
  const { content, isFulfilled, notes } = props;
  return (
    <div className={isFulfilled ? "bg-green-500" : "bg-gray-400"}>
      <p>{content}</p>
      <p>{notes}</p>
    </div>
  );
}
