"use client";
import { Suspense } from "react";
import ImageButton from "@/app/game/ImageButton";
import { usePathname, useRouter } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Suspense>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-width: 24rem;">
          <ImageButton taste={"1232e32"} srcLink={"/vercel.svg"} />
        </div>
      </div>
    </Suspense>
  );
}
