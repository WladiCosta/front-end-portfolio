import Image from "next/image";
import Hero from "@/components/main/Hero";

export default function Home() {
  return (
    <><>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </>
    <main className="h-full w-full">
        <div className="flex flex-col gap-20">
          <Hero />
        </div>
      </main></>
  );
}
