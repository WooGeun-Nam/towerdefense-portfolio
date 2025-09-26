import ImgPrefixed from "../../../components/ImgPrefixed";

export default function ShooterClonePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-6">
      {/* 상단: 좌 이미지 / 우 정보 */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        <div className="rounded-xl overflow-hidden shadow-sm">
          <ImgPrefixed
            src="./../../PortPolio/2DShooterCloneThum.png"
            alt="2D Shooter Clone 메인"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold underline decoration-blue-500 underline-offset-8">
              2D Shooter Clone
            </h1>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-6 text-gray-800 mt-8">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd>Programmer, Artist</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>1주</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>1인 개발</dd>

              <dt className="font-semibold text-gray-600">PLATFORM</dt>
              <dd>Mobile</dd>
            </dl>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href="https://drive.google.com/file/d/1Xn45fA4W4kzxliicOSAADQpH_CwQ_5E8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold
                         bg-blue-200 text-blue-900 hover:bg-blue-300 focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Demo Download
            </a>

            <a
              href="https://github.com/WooGeun-Nam/2DShooterClone-Code"
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

      {/* 하단 섹션: 풀블리드 배경 */}
      <section className="py-0">
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12 space-y-10">
            {/* 게임 플레이 영상 */}
            <h2 className="text-2xl font-semibold mb-4">플레이 영상</h2>
            <div className="flex justify-center">
              <div className="w-full max-w-3xl aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/JwpV2bGq5so?si=ljhdEXjfjHCHvkoM"
                  title="YouTube video player"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow"
                />
              </div>
            </div>

            {/* 프로젝트 요약 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">프로젝트 요약</h2>
              <p className="text-gray-700 leading-relaxed">
                FSM 기반 상태 제어를 학습하고, 모바일 UI/UX 설계를 경험하기 위해
                제작한 2D 액션 슈터 클론 프로젝트입니다. 원작의 전투 시스템을
                분석해 재현하면서, 스킬·투사체의 확장 가능성과 유지보수성을
                고려한 구조를 구현했습니다.
              </p>
            </div>

            {/* 개발 목표 및 특징 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">개발 목표 및 특징</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>모바일 UI/UX 학습</li>
                <li>원작 전투 시스템 분석 및 재현</li>
                <li>확장 가능한 스킬·투사체 시스템 구현</li>
                <li>FSM 기반 플레이어·봇 상태 제어</li>
                <li>봇 동작패턴 자동화</li>
                <li>SO 기반 데이터/실행 로직 분리</li>
              </ul>
            </div>

            {/* 주요 성과 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">주요 성과</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>상태 통합 관리(FSM)</li>
                <li>Freeze 중단에도 FSM 상태 전환 일관성 유지</li>
                <li>데이터 분리로 신규 스킬 확장 용이</li>
                <li>오브젝트 풀링으로 생성/파괴 비용 최소화</li>
                <li>이벤트 기반 UI로 의존성·GC 부하 최소화</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 시각 자료 (풀블리드 gray-50) */}
      <section className="py-0">
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gray-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-3xl font-bold text-left mb-12">시각 자료</h2>

            {/* 2열 그리드 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* 아이템 1 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="./../../PortPolio/2DShooterCloneThum.png"
                  alt="전투 UI 스크린샷"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  전투 UI와 스킬 버튼 구성
                </p>
              </div>

              {/* 아이템 2 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="./../../PortPolio/BotAI.png"
                  alt="RogueTower 맵 생성"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  봇 자동화 ( 스킬 사용 )
                </p>
              </div>

              {/* 아이템 3 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="./../../PortPolio/ProjectileFloor.png"
                  alt="스킬 효과 예시"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  투사체 타격 분기 ( 바닥 )
                </p>
              </div>

              {/* 아이템 4 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="./../../PortPolio/ProjectileEnemy.png"
                  alt="플레이어 이동 시스템"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  투사체 타격 분기 ( 적 )
                </p>
              </div>

              {/* 아이템 5 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="./../../PortPolio/DamageFont.png"
                  alt="플레이어 이동 시스템"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  타격 시 데미지 표기
                </p>
              </div>

              {/* 아이템 6 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="./../../PortPolio/2DShooterSO.png"
                  alt="플레이어 이동 시스템"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  SO 기반 스킬 데이터 관리
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
