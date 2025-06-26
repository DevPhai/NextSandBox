import Image from "next/image";

export default function Mystyle() {
  return (
    <>
      <div className="loader">
        <div data-glitch="ฮั่นแน่..." className="glitch">
          My Style
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
