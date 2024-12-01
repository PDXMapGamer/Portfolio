import Image from "next/image";

export default function Icon() {
  return (
    <div>
      <Image alt="Icon" src="/icons/html.png" width={50} height={50} />
      <h2>HTML</h2>
    </div>
  );
}
