import Image from "next/image";

export default function Game() {
  return (
    <>
      <h1>Game Page</h1>
      <Image
        src={"/image/NSB_mockup.png"}
        alt={"well com"}
        width={302}
        height={553}
        style={{ borderRadius: 16, objectFit: "cover" }}
        priority={true}
      />
    </>
  );
}
