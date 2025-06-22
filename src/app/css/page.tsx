import Image from "next/image";

export default function CSS() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>CSS Page</h1>
        <Image
          src={"/image/NSB_mockup.png"}
          alt={"well com"}
          width={302}
          height={553}
          style={{ borderRadius: 16, objectFit: "cover" }}
          priority={true}
        />
      </main>
    </div>
  );
}
