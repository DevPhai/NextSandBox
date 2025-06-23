import Image from "next/image";

export default function Todo() {
  return (
    <>
      <h1>To-Do Page</h1>
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
