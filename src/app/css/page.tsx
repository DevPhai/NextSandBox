import Image from "next/image";

export default function CSS() {
  return (
    <>
      <h1>CSS Page</h1>
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
