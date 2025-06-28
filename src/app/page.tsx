import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="loader">
        <div data-glitch="ไม่ได้แดกกูหรอก" className="glitch">
          Home Page ...
        </div>
      </div>
      <div className="glass-frost mt-6 BG">
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
