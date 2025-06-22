import Image from "next/image";

export default function Threed() {
  return (
    <>
      <h1>3D Page</h1>
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
