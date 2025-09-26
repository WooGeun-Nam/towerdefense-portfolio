import ImgPrefixed from "../../../components/ImgPrefixed";

export default function KioskPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-6">
      {/* 상단: 좌 이미지 / 우 정보 */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        <div className="rounded-xl overflow-hidden shadow-sm">
          <ImgPrefixed
            src="./../../Others/Kiosk1.png"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold underline decoration-blue-500 underline-offset-8">
              키오스크 프로그램
            </h1>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-6 text-gray-800 mt-8">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd> 사용자 주문 기능, 입력 대기 기능</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>2021.03 ~ 2021.04</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>개인 프로젝트</dd>

              <dt className="font-semibold text-gray-600">TECH STACK</dt>
              <dd>Linux, C, gcc 9.3.0</dd>
            </dl>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/WooGeun-Nam/Linux_Kiosk"
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
            {/* 프로젝트 요약 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">프로젝트 요약</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Linux 환경에서의 코딩 및 컴파일을 숙련하고 스레드 프로그래밍을
                  활용하기 위한 프로젝트이다.​
                </li>
                <li>
                  사용자는 변수에 저장된 값을 기준으로 메뉴를 제공받고 주문할 수
                  있다.​
                </li>
                <li>
                  주문, 입력대기 기능을 스레드로 구현하여 사용자는 입력대기 시간
                  초과시 메인 메뉴로 이동한다.​
                </li>
              </ul>
            </div>

            {/* 개발 문제 및 해결 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">개발 문제 및 해결</h2>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>
                  <div>
                    <p>
                      싱글 스레드를 통한 기능 구현 시 입력대기시간이 초과하면
                      메인 메뉴로 이동하지 않고 프로그램이​ 종료되는 문제가
                      발생하였다
                    </p>
                    <p>
                      해당 문제는 기능을 멀티 스레드로 구성하여 필요에 따라
                      기능을 정지하고 재실행할 수 있도록 하였다.
                    </p>
                  </div>
                </li>
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
                  src="./../../Others/Kiosk1.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  프로그램 시작 화면
                </p>
              </div>

              {/* 아이템 2 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="./../../Others/Kiosk2.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  추가 주문 확인
                </p>
              </div>

              {/* 아이템 1 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="./../../Others/Kiosk3.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  입력이 없을 시 메인메뉴로 전환
                </p>
              </div>

              {/* 아이템 1 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="./../../Others/Kiosk4.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  카운트 도중 입력 감지 시 카운트 종료
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
