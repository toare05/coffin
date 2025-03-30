import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">카페인 인사이트</h1>
        <p className="text-xl text-muted-foreground">
          당신의 카페인 섭취를 추적하고 관리하세요
        </p>
      </header>

      <main className="flex flex-col gap-6 items-center max-w-md">
        <p className="text-center">
          카페인 인사이트는 개인별 생리적 요인을 반영하여 체내 카페인 농도 변화를 추정하고
          건강한 카페인 소비 습관 형성을 돕는 앱입니다.
        </p>

        <div className="flex flex-col gap-3 w-full max-w-xs">
          <Button asChild size="lg" className="w-full">
            <Link href="/onboarding">시작하기</Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="w-full">
            <Link href="/about">더 알아보기</Link>
          </Button>
        </div>
      </main>

      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>© 2025 카페인 인사이트 | 건강한 카페인 관리를 위한 앱</p>
      </footer>
    </div>
  );
}
