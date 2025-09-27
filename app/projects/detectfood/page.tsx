import ImgPrefixed from "../../../components/ImgPrefixed";

export default function DetectFoodPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-6">
      {/* 상단: 좌 이미지 / 우 정보 */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        <div className="rounded-xl overflow-hidden shadow-sm">
          <ImgPrefixed
            src="/Others/AI1.png"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold underline decoration-blue-500 underline-offset-8">
              음식 객체 인식
            </h1>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-6 text-gray-800 mt-8">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd>데이터 어노테이션, 학습 알고리즘, 데이터 정규화</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>2022.07 ~ 2022.12​ ​</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>팀 프로젝트 (3인)</dd>

              <dt className="font-semibold text-gray-600">TECH STACK</dt>
              <dd>Python, PyTorch, Detectron2​</dd>
            </dl>
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
                <li>인계받은 급식 이미지 라벨링 및 다 회차 학습 진행</li>
                <li>데이터 증강(회전, 반전) 학습을 통한 정확도 상승</li>
                <li>
                  데이터 검출 시 식판을 기준으로 정규화를 통한 비교 대상 왜곡
                  조정
                </li>
                <li>식판 대비 음식의 넓이를 통하여 음식의 질량 측정</li>
              </ul>
            </div>

            {/* 개발 문제 및 해결 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">개발 문제 및 해결</h2>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>
                  <div>
                    <p>
                      비교 대상이 되는 이미지의 회전상태나 촬영거리에 따른
                      넓이의 오차범위가 발생하였다.​
                    </p>
                    <p>
                      해당 문제는 두 이미지를 비교하기 전 데이터를 정규화하여
                      크기를 일치하여 비교하는 것으로 해결하였다.
                    </p>
                    <p>
                      ​데이터 정규화는 인식된 식판을 기준으로 꼭짓점을 찾아 두
                      식판의 꼭짓점이 같은 위치에 위치할 수 있도록​ 변환하여
                      정규화하였다.
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
                  src="/Others/AI1.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  음식 객체 인식
                </p>
              </div>

              {/* 아이템 2 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="/Others/AI2.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  데이터 증강 (이미지 회전)
                </p>
              </div>

              {/* 아이템 3 */}
              <div className="flex flex-col items-center">
                <ImgPrefixed
                  src="/Others/AI3.png"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <p className="mt-3 text-sm text-gray-700 text-center">
                  인식된 객체의 넓이 확인
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
