import ImgPrefixed from "../../../components/ImgPrefixed";

export default function AirReservePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-6">
      {/* 상단: 좌 이미지 / 우 정보 */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        <div className="rounded-xl overflow-hidden shadow-sm">
          <ImgPrefixed
            src="./../../Others/AirReserve1.png"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold underline decoration-blue-500 underline-offset-8">
              항공 예약 관리 시스템
            </h1>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-6 text-gray-800 mt-8">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd>회원관리 기능, 예매관련 기능, 관리자 기능</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>2021.11 ~ 2021.12​ ​</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>개인 프로젝트</dd>

              <dt className="font-semibold text-gray-600">TECH STACK</dt>
              <dd>C, Pro*C, OracleSQL</dd>
            </dl>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/WooGeun-Nam/ProCAirplaneReserve"
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
            {/* 설계 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                설계 (E-R 다이어그램)
              </h2>
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="./../../Others/AirReserve4.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* 설계 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">설계 (테이블)</h2>
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="./../../Others/AirReserve5.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* 프로젝트 요약 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">프로젝트 요약</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  테이블 설계과정을 통해 데이터 관리 능력을 심화하고 DBMS의 구조
                  이해를 위한 프로젝트를 진행
                </li>
                <li>Oracle Exception을 사용하여 발생하는 위험에 대비하였다.</li>
                <li>프로그램은 Pro*C를 통하여 Oracle DB에 접근할 수 있다.</li>
                <li>
                  관리자는 항공기 및 항공편을 수정하고 고객은 해당 항공편에 대해
                  예매를 진행할 수 있다.
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
                      비주얼 스튜디오의 디버거를 통해 오류 구문을 수정하고
                      Pro*C로 작성한 코드를 C 파일로 컴파일하여​ 실행오류 문제를
                      해결하였다.
                    </p>
                  </div>
                </li>
                <li>
                  프로젝트 구현 시 불필요한 기능의 최소화를 위하여 기능분석, E-R
                  다이어그램 작성, 테이블 명세서 작성을​ 선행하였다.
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
                  src="./../../Others/AirReserve1.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  프로그램 시작 화면
                </p>
              </div>

              {/* 아이템 2 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="./../../Others/AirReserve2.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  로그인 시 예매 화면
                </p>
              </div>

              {/* 아이템 3 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="./../../Others/AirReserve3.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  예매확인
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
