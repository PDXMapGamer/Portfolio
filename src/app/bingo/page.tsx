import BingoItem from "../components/BingoItem";

export default function Bingo() {
  return (
    <>
      <h1>Instead of new years resolutions, make a new years bingo card, the best thing since canned bread!</h1>
      <div id="normal-bingo" className="grid grid-cols-5 grid-rows-5 w-[750px] [h-750px] mt-4">
        <BingoItem content="Finish kanji workbook" isFulfilled={false} notes="" />
        <BingoItem content="Complete 5 PHP Projects" isFulfilled={false} notes="0/5" />
        <BingoItem content="Clear my anki backlog" isFulfilled={false} notes="" />
        <BingoItem content="Fulle incorporate ARIA to a website" isFulfilled={false} notes="" />
        <BingoItem content="Try learning 5 new programming languages" isFulfilled={false} notes="0/5" />
        <BingoItem content="Complete 5 react projects" isFulfilled={false} notes="0/5" />
        <BingoItem content="Create a WoW addon" isFulfilled={false} notes="" />
        <BingoItem content="28 day reading streak" isFulfilled={false} notes="5/28 (peak: 5/28)" />
        <BingoItem content="Complete 5 TypeScript projects" isFulfilled={false} notes="0/5" />
        <BingoItem content="28 day Bunpo streak" isFulfilled={false} notes="0/28" />
        <BingoItem content="Complete my portfolio page" isFulfilled={false} notes="" />
        <BingoItem content="Read 10 books (any language)" isFulfilled={false} notes="0/10" />
        <BingoItem content="Free Space" isFulfilled={true} notes="" />
        <BingoItem content="Complete 100 coding challenges" isFulfilled={false} notes="0/100" />
        <BingoItem content="Reach Plat V in Yu-Gi-Oh Master Duel" isFulfilled={false} notes="Peak Gold V" />
        <BingoItem content="Learn 5 new things about SQL" isFulfilled={false} notes="0/5" />
        <BingoItem content="Read 5 Japanese books" isFulfilled={false} notes="0/5" />
        <BingoItem content="Get a programming job" isFulfilled={false} notes="" />
        <BingoItem content="28 day coding challenge streak" isFulfilled={false} notes="0/28" />
        <BingoItem content="Learn how to cook" isFulfilled={false} notes="" />
        <BingoItem content="28 day Github push streak*" isFulfilled={false} notes="4/28 (peak: 4/28)" />
        <BingoItem content="28 day anki streak" isFulfilled={false} notes="0/28" />
        <BingoItem content="Find a language exhange pen pal" isFulfilled={false} notes="" />
        <BingoItem content="Travel abroad" isFulfilled={false} notes="" />
        <BingoItem content="Pass JLPT N3 mock test" isFulfilled={false} notes="" />
      </div>
      <p className="mt-4">*Github pushes from updating my bingo cards do not count</p>
    </>
  );
}
