import Image from "next/image";

export default function Todo() {
  return (
    <>
      <div className="loader">
        <div data-glitch="อ่านหาพ่อง" className="glitch">
          To - do
        </div>
      </div>
      <div className="glass-frost mt-6">
        <Image
          src={"/image/NSB_mockup.png"}
          alt={"well com"}
          width={302}
          height={553}
          style={{ borderRadius: 16, objectFit: "cover" }}
          priority={true}
        />
      </div>
    </>
  );
}
