import ImgPrefixed from "../../../components/ImgPrefixed";

export default function UISPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-6">
      {/* 상단: 좌 이미지 / 우 정보 */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        <div className="rounded-xl overflow-hidden shadow-sm">
          <ImgPrefixed
            src="/Others/UIS1.png"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold underline decoration-blue-500 underline-offset-8">
              대학 정보 시스템
            </h1>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-6 text-gray-800 mt-8">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd>수강 관리 기능, 사용자 관리기능, 코드 병합</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>2019.09 ~ 2019.12</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>팀 프로젝트 (4인)</dd>

              <dt className="font-semibold text-gray-600">TECH STACK</dt>
              <dd>Java, GUI</dd>
            </dl>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/WooGeun-Nam/UniversityInformationSystem"
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
                  파일 입출력을 이용하여 시스템의 데이터를 저장하고 호출한다.​
                </li>
                <li>
                  저장된 데이터는 구분자를 통하여 시스템에서 호출 시 배열화하여
                  처리한다.​
                </li>
                <li>
                  사용자 정보는 로그인시 객체화하여 시스템에 저장되고 해당
                  정보를 기반으로 사용자에게 기능을 제공한다.​
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
                      로컬 데이터를 입출력하므로 데이터의 정확성에 문제가
                      발생하였다.​
                    </p>
                    <p>
                      해당 문제는 서버 PC에 데이터를 취합하고 변경 내용에 따라
                      서버와 통신하여 업로드 & 다운로드를 실시간​ 진행하는
                      방식으로 해결하였다.​
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
                  src="/Others/UIS1.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  프로그램 시작 화면
                </p>
              </div>

              {/* 아이템 2 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="/Others/UIS2.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  사용자 등록
                </p>
              </div>

              {/* 아이템 1 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="/Others/UIS3.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  등록 된 사용자 검색
                </p>
              </div>

              {/* 아이템 1 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="/Others/UIS4.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  강좌 등록
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
