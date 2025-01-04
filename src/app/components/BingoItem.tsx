export default function BingoItem(props: { content: string; isFulfilled: boolean; notes: string }) {
  const { content, isFulfilled, notes } = props;
  const stylings = "relative min-h-24"; //Ensures consistant stylings for cleared and uncleared goals
  return (
    <div className={isFulfilled ? `bg-green-500 ${stylings}` : `bg-gray-800 ${stylings}`}>
      <div>
        <p className="absolute flex justify-center items-center text-center w-full h-3/4">{content}</p>
      </div>
      {/* Divs used to make structuring easier.*/}
      <div>
        <p className="absolute bottom-0 w-full h-1/4 text-center">{notes}</p>
      </div>
    </div>
  );
}
