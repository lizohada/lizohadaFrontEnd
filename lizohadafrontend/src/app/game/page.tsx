"use client";
import ImageButton from "@/app/game/ImageButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  // 클릭할 때마다 쿼리스트링에 배열 데이터를 추가하는 함수
  function handleAddTaste(taste: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.append("taste", taste);
    window.history.pushState(null, "", `?${params.toString()}`);
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-width: 24rem;">
          <ImageButton
            handler={handleAddTaste}
            taste={"1232e32"}
            srcLink={"dfsfdf"}
          />
        </div>
      </div>
    </>
  );
}
