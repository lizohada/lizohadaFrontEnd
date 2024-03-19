import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-width: 24rem;">
        <Image
          src="/logo.png" // 이미지 경로는 프로젝트에 맞게 수정하세요
          alt="프로젝트 메인 이미지"
          className="mb-8 max-width: 100%;" // 이미지 아래 여백 추가
          width={300}
          height={300}
        />
      </div>
      <Link
        href="/game"
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
      >
        시작하기
      </Link>
    </div>
  );
}