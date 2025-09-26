import GamePortfolio from "../../../components/GamePortfolio";
import ImgPrefixed from "../../../components/ImgPrefixed";

export default function RogueTowerPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-12">
      {/* 상단: 좌 이미지 / 우 정보 */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        {/* 메인 이미지 */}
        <div className="rounded-xl overflow-hidden shadow-sm">
          <ImgPrefixed
            src="./../../SiteLogo.png"
            alt="RogueTower 메인"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 정보 + 버튼 */}
        <div className="flex flex-col justify-between">
          {/* 위쪽 텍스트 */}
          <div>
            <h1 className="text-4xl font-bold underline decoration-blue-500 underline-offset-8">
              RogueTower
            </h1>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-6 text-gray-800 mt-8">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd>Programmer, Game Designer, Artist</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>2024.10 ~ 2025.08</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>1인 개발</dd>

              <dt className="font-semibold text-gray-600">PLATFORM</dt>
              <dd>PC</dd>
            </dl>
          </div>

          {/* 아래쪽 버튼 */}
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/WooGeun-Nam/RogueTower-Code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold
                   bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:outline-none
                   focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              GitHub Source
            </a>
          </div>
        </div>
      </section>

      {/* 이하 상세 섹션 추가 */}
      <section className="pt-8">
        <GamePortfolio />
      </section>
    </main>
  );
}
