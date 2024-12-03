import Image from "next/image";

export default function Icon(props: { icon: string; skill: string }) {
  const { icon, skill } = props;
  return (
    <div className="inline-block">
      <Image alt="Icon" src={`/icons/${icon}.png`} width={35} height={35} />
      <h2>{skill}</h2>
    </div>
  );
}
