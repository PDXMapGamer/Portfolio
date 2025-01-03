import BingoItem from "../components/BingoItem";

export default function Bingo() {
  return (
    <>
      <h1>Instead of new years resolutions, make a new years bingo card, the best thing since canned bread!</h1>
      <div id="normal-bingo" className="grid grid-cols-5 grid-rows-5 w-[750px] h-96 mt-4">
        <BingoItem content="Placeholder 1" isFulfilled={true} notes="If true become green" />
      </div>
      <div id="hard-bingo" className="grid grid-cols-5 grid-rows-5 w-[750px] h-96 mt-4">
        <BingoItem content="Placeholder 2" isFulfilled={false} notes="If not true do not become green" />
      </div>
    </>
  );
}
