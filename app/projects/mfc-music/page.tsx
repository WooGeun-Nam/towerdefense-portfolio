export default function MfcMusicPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-6">
      {/* 상단: 좌 이미지 / 우 정보 */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        <div className="rounded-xl overflow-hidden shadow-sm">
          <img
            src="./../../Others/MFC1.png"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold underline decoration-blue-500 underline-offset-8">
              내 맘대로 연주
            </h1>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-6 text-gray-800 mt-8">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd>입력 병렬 처리, 멜로디 작성, 악보 공유</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>2019.10 ~ 2019.11</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>팀 프로젝트 (3인)</dd>

              <dt className="font-semibold text-gray-600">TECH STACK</dt>
              <dd>C++, MFC</dd>
            </dl>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/WooGeun-Nam/19-MFC-InstrumentPlay"
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
                  프로그램 시작 시 악기는 스레드로 백그라운드에서 대기하며 동시
                  입력을 받을 수 있다.​
                </li>
                <li>
                  멜로디는 배열화하여 행은 시간 열은 음의 높낮이로 구분하여 재생
                  시 ​ Timer가 마디 시간 단위(재생속도) 기준으로 재생한다.​
                </li>
                <li>
                  TCP/IP 소켓 통신을 통해 서버에 멜로디를 배열로 저장하고 다른
                  클라이언트에서 해당 멜로디를 재생할 수 있다.​
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
                      작성한 멜로디를 출력시켰을 시 한마디가 여러 번 출력되는
                      문제가 발생하였다.
                    </p>
                    <p>
                      해당 문제는 멜로디 출력 당시 배열을 읽는 기능의 순서를
                      변경하여 중복 출력되지 않도록 하였다.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>
                      소켓 통신 시 멜로디가 정상적으로 공유되지 않는 경우가
                      발생하였다.
                    </p>
                    <p>
                      해당 문제는 멜로디 공유 시에 배열을 문자열로 변환하고
                      내려받을 때 문자열을 배열로 변환하여 해결하였다.​
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
                <img
                  src="./../../Others/MFC1.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  프로그램 UI
                </p>
              </div>

              {/* 아이템 2 */}
              <div className="flex flex-col items-center">
                <img
                  src="./../../Others/MFC2.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  악보 제작 및 서버 저장
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
