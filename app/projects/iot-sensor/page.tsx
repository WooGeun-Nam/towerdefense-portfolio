import ImgPrefixed from "../../../components/ImgPrefixed";

export default function IOTSensorPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-6">
      {/* 상단: 좌 이미지 / 우 정보 */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        <div className="rounded-xl overflow-hidden shadow-sm">
          <ImgPrefixed
            src="/Others/IOT1.png"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold underline decoration-blue-500 underline-offset-8">
              스마트 온습도 제어
            </h1>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-6 text-gray-800 mt-8">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd>회로 구성, 3D 모델링, 불쾌지수 변환 및 모터 제어​</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>2022.05 ~ 2022.06​ ​</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>개인 프로젝트</dd>

              <dt className="font-semibold text-gray-600">TECH STACK</dt>
              <dd>Python, Raspberry Pi, MySql​</dd>
            </dl>
          </div>
        </div>
      </section>

      {/* 하단 섹션: 풀블리드 배경 */}
      <section className="py-0">
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12 space-y-10">
            {/* 설계 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">회로 구성</h2>
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="/Others/IOT2.png"
                  className="rounded-lg shadow-md h-auto object-cover"
                />
              </div>
            </div>

            {/* 프로젝트 요약 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">프로젝트 요약</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  시스템은 DHT22 센서를 통해 수집된 온도, 습도를 불쾌지수로
                  변환한다.
                </li>
                <li>
                  불쾌지수에 따른 상태를 LED 및 Display를 통해 확인할 수 있다.
                </li>
                <li>불쾌지수가 경고(적색) 상태가 되면 모터를 가동한다.</li>
                <li>
                  시스템은 배터리를 통해 가동되며, 가동 중 수집된 정보를
                  데이터베이스에 저장한다.
                </li>
                <li>
                  Flask기반의 웹 서버를 구축하여 PC 및 모바일에서 데이터 수집
                  내역을 확인할 수 있다. ​
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
                      웹을 통해 데이터를 확인할 때 기준 시간이 표기되지 않는
                      문제가 발생하였다.​
                    </p>
                    <p>
                      해당 문제는 저장되는 값은 정상이나 테이블 설계 시 문제로
                      테이블의 데이터 타입을 변환하여 해결하였다.​
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
                  src="/Others/IOT1.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  실물 모형
                </p>
              </div>

              {/* 아이템 2 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="/Others/IOT3.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  경고(적색) 상태 모터 가동
                </p>
              </div>

              {/* 아이템 3 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="/Others/IOT4.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  웹페이지를 통한 데이터 확인
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
