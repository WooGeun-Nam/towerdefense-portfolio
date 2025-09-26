import ImgPrefixed from "../../../components/ImgPrefixed";

export default function EveryTimeClonePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-6">
      {/* 상단: 좌 이미지 / 우 정보 */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        <div className="rounded-xl overflow-hidden shadow-sm">
          <ImgPrefixed
            src="./../../Others/etc1.png"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold underline decoration-blue-500 underline-offset-8">
              EveryTimeClone
            </h1>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-6 text-gray-800 mt-8">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd>DB서버 구축 및 관리, 쪽지 송수신, 알림 기능</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>2021.04 ~ 2021.06</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>팀 프로젝트 (4인)</dd>

              <dt className="font-semibold text-gray-600">TECH STACK</dt>
              <dd>Java, MySql</dd>
            </dl>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/WooGeun-Nam/EveryTimeClone"
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
                  프로그램은 NCP서버의 MySql 에 JDBC로 연결하여 데이터를
                  입출력한다.​
                </li>
                <li>
                  알림 기능은 State Pattern을 통해 상태에 따라 사용자에게 정보를
                  제공한다.
                </li>
                <li>
                  사용자는 게시판을 통해 게시글 및 댓글을 작성하고 댓글에 대한
                  답글을 작성할 수 있다.​
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
                      DB의 값을 GUI에 출력하는 과정에서 Table GUI에 값이 제대로
                      출력되지 않는 문제가 발생하였다.
                    </p>
                    <p>
                      해당 문제는 JDBC를 통해 받아온 데이터를 Table에 담길 수
                      있는 객체로 변환하여 해당 객체를​ Table에 출력하는 것으로
                      해결하였다.
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
                  src="./../../Others/etc1.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  프로그램 시작 화면
                </p>
              </div>

              {/* 아이템 2 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="./../../Others/etc2.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  로그인 시 메뉴 화면
                </p>
              </div>

              {/* 아이템 3 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="./../../Others/etc3.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  쪽지 송/수신 및 알림 기능
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
