const GamePortfolio = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-8">
      {/* 헤더 섹션 */}
      <title>RogueTower 게임기획서</title>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Roguelike Tower Defense</h1>
        <div className="mt-4 flex justify-center space-x-4 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">
            #로그라이크
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">
            #타워 디펜스
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">
            #전략
          </span>
        </div>
      </div>

      {/* 개발자 */}
      <div className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">개발자</h2>
        <div className="grid gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">WooGeun Nam</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>cowzza1@naver.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 도구 */}
      <div className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">개발 도구</h2>

        <ul className="list-disc pl-5 text-sm mb-4">
          <li>엔진 : unity</li>
          <li>언어 : C#</li>
          <li>디자인 도구 : Aseprite</li>
        </ul>

        <div className="grid grid-cols-3 gap-4 w-1/3">
          <div className="rounded-lg overflow-hidden">
            <img src="./icon/unity.png" className="h-full w-full object-fill" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src="./icon/csharp.png" className="w-full object-fill" />
          </div>

          <div className="rounded-lg overflow-hidden">
            <img src="./icon/ase.png" className="w-full object-fill" />
          </div>
        </div>
      </div>

      {/* 게임 개요 */}
      <div className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">게임 개요</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">핵심 컨셉</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>로그라이크 요소와 타워 디펜스의 결합</li>
              <li>웨이브별 전략적 선택과 성장</li>
              <li>장비 파밍과 난이도 강화</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">타겟 플레이어</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>전략 게임을 선호하는 게이머</li>
              <li>로그라이크 장르 팬층</li>
              <li>낮은 난이도를 추구하는 유저</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 핵심 시스템 */}
      <div className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">핵심 시스템</h2>
        <div className="space-y-8">
          {/* 타워 시스템 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">타워 시스템</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">기본 설계 방향</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-blue-50 rounded">
                    <p className="font-semibold">보스 몬스터 특화형</p>
                    <p className="text-sm">단일 타겟, 높은 데미지</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded">
                    <p className="font-semibold">일반 몬스터 특화형</p>
                    <p className="text-sm">다중 타겟, 낮은 데미지</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded">
                    <p className="font-semibold">근거리형 타워</p>
                    <p className="text-sm">낮은 사거리, 높은 데미지</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded">
                    <p className="font-semibold">원거리형 타워</p>
                    <p className="text-sm">높은 사거리, 낮은 데미지</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">타워 종류</h4>
                <div className="space-y-6">
                  <div>
                    <div className="p-4 bg-gray-50 rounded">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          타워 생산 비용 : TC(TowerCost) 단위 / 인게임에서는
                          이미지로 표기
                        </li>
                        <li>타워 공격 타입 : 물리형, 마법형, 복합형</li>
                        <li>
                          타워의 업그레이드는 타워의 공격 타입에 따라 영향을
                          받음 (복합형은 두 종류의 업그레이드를 합계로 받음)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      name: "기본 타워",
                      cost: "50TC / 복합형",
                      desc: "기본적인 단일 공격 타워",
                    },
                    {
                      name: "검사 타워",
                      cost: "70TC / 물리형",
                      desc: "높은 공격 속도와 단일 데미지",
                    },
                    {
                      name: "창술사 타워",
                      cost: "150TC / 물리형",
                      desc: "최대 4개 대상 동시 공격",
                    },
                    {
                      name: "궁수 타워",
                      cost: "130TC / 물리형",
                      desc: "넓은 범위의 다중 공격",
                    },
                    {
                      name: "레이저 타워",
                      cost: "120TC / 마법형",
                      desc: "높은 DPS의 단일 타겟 공격",
                    },
                    {
                      name: "사제 타워",
                      cost: "100TC / 마법형",
                      desc: "적 방어력 감소 효과",
                    },
                  ].map((tower, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded">
                      <h4 className="font-semibold">{tower.name}</h4>
                      <p className="text-sm text-gray-600">{tower.cost}</p>
                      <p className="text-sm">{tower.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 스킬 시스템 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">스킬 시스템</h3>
            <div className="space-y-6">
              <div>
                <div className="p-4 bg-gray-50 rounded">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>타워별 특수능력을 스킬패널에서 제공</li>
                    <li>SP 초기값: 0, 최대값: 200</li>
                    <li>웨이브 클리어 시 20 SP 자동 지급</li>
                    <li>모든 스킬 20 SP 소모</li>
                    <li>웨이브당 스킬별 1회 사용 제한</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 웨이브 시스템 */}
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="text-lg font-semibold mb-4">웨이브 시스템</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  type: "일반 웨이브",
                  desc: "30마리 몬스터 출현",
                },
                {
                  type: "네임드",
                  desc: "특정 웨이브 등장, 강화된 능력치",
                },
                {
                  type: "보스",
                  desc: "최종웨이브 클리어 목표",
                },
              ].map((wave, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded">
                  <h4 className="font-semibold">{wave.type}</h4>
                  <p className="text-sm">{wave.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 보상 시스템 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">보상 시스템</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold mb-2">기본 보상</h4>
                <p className="text-sm">웨이브 클리어 시 20 SP</p>
              </div>

              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold mb-2">웨이브 처치 보상</h4>
                <p className="text-sm">
                  개별 적 1개체당 골드 보상, 웨이브 진행도에 따라 증가
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold mb-2">선택형 추가 보상</h4>
                <p className="text-sm mb-2">
                  매 웨이브 종료 시 2개의 보상 중 1개 선택
                </p>
                <p className="text-sm mb-2">2개의 보상은 중복 가능하다</p>
                <p className="text-sm mb-2">
                  개별 보상은 선택지, 수치 2개의 랜덤을 통해 확정된다
                </p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>HP 회복: 1~4 포인트 (최대 체력 상태에서는 등장 X)</li>
                  <li>SP 추가: 20~60 포인트</li>
                  <li>골드: 10~120</li>
                  <li>랜덤 타워 자동 설치</li>
                  <li>무료 물리/마법 업그레이드</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 기술적 특징 */}
      <div className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">기술적 특징</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">그래픽 & UI</h3>
            <div className="p-4 bg-gray-50 rounded">
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>픽셀 아트 그래픽 스타일</li>
                <li>UI 간소화 설계</li>
                <li>TAB 키를 통한 UI ON/OFF 기능</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">시스템 설계</h3>
            <div className="p-4 bg-gray-50 rounded">
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>
                  <b>모듈형 타워 시스템 (State 패턴)</b>: `IWeaponState`
                  인터페이스를 기반으로 타워의 행동(탐색, 공격)을 명확하게
                  분리하여 확장성을 높였습니다.
                </li>
                <li>
                  <b>이벤트 기반 UI 업데이트</b>: `UIEventManager`를 통해 게임
                  데이터와 UI를 분리, 데이터 변경 시 UI가 실시간으로 반응하도록
                  설계하여 유지보수성을 강화했습니다.
                </li>
                <li>
                  <b>오브젝트 풀링</b>: 성능 최적화를 위해 적, 발사체 등 반복
                  생성되는 오브젝트를 재활용하는 시스템을 구현했습니다.
                </li>
                <li>
                  <b>중앙 집중형 사운드 관리</b>: `SoundManager`를 통해 BGM,
                  SFX를 관리하며, 여러 개의 지속 사운드를 독립적으로 제어하는
                  기능을 구현했습니다.
                </li>
                <li>
                  <b>애니메이션 재사용성</b>: `Animator Override Controller`를
                  활용하여 모든 타워가 하나의 로직을 공유하되, 각 타워의
                  애니메이션 클립만 교체하도록 설계하여 효율성을 높였습니다.
                </li>
                <li>
                  <b>데이터 기반 설계</b>: `ScriptableObject`를 활용하여 타워
                  밸런스를 코드 수정 없이 쉽게 조절할 수 있도록 설계했습니다.
                </li>
                <li>
                  <b>랜덤 맵 생성</b>: 매 게임마다 새로운 경로의 맵을 생성하여
                  리플레이 가치를 증대시켰습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 디자인 */}
      <div className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">게임 디자인</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">디자인 방향성</h3>
            <div className="grid gap-4">
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold mb-2">캐릭터</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>타워 및 몬스터 캐릭터 픽셀 아트 제작</li>
                  <li>
                    <b>타워 애니메이션</b>: 모든 타워의 대기(Idle) 및
                    공격(Attack) 애니메이션을 구현
                  </li>
                </ul>

                <div className="p-4 rounded-lg overflow-hidden shadow-lg grid grid-cols-8">
                  <img
                    src="./character/CharacterBase01.png"
                    className="w-full object-cover"
                  />
                  <img
                    src="./character/WarriorTower01.png"
                    className="w-full object-cover"
                  />
                  <img
                    src="./character/SpearTower01.png"
                    className="w-full object-cover"
                  />
                  <img
                    src="./character/ArcherTower01.png"
                    className="w-full object-cover"
                  />
                  <img
                    src="./character/LaserTower01.png"
                    className="w-full object-cover"
                  />
                  <img
                    src="./character/BuffTower01.png"
                    className="w-full object-cover"
                  />
                  <img
                    src="./character/WarriorTower02.png"
                    className="w-full object-cover"
                  />
                  <img
                    src="./character/WarriorTower03.png"
                    className="w-full object-cover"
                  />
                </div>

                <div className="p-4 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="./character/CharacterBaseAnim.png"
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-4 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="./character/ArcherTowerAnim.png"
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-4 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="./character/BuffTowerAnim.png"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold mb-2">아이콘</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>타워의 특수능력에 부합하는 스킬 아이콘 제작</li>
                  <li>
                    동적인 상황의 경우 필요에따라 애니메이션으로 제작하거나
                    Unity에서 구현
                  </li>
                </ul>

                <div className="p-4 rounded-lg overflow-hidden shadow-lg grid grid-cols-8">
                  <img src="./SkillFist.png" className="w-full object-cover" />
                  <img
                    src="./SkillDamageUp.png"
                    className="w-full object-cover"
                  />
                  <img src="./SkillSlow.png" className="w-full object-cover" />
                  <img
                    src="./SkillThunder.png"
                    className="w-full object-cover"
                  />
                  <img src="./ArrowRain.png" className="w-full object-cover" />
                </div>

                <div className="p-4 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="./SkillSpearLanding.png"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold mb-2">맵(타일셋)</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>타워디펜스에 최적화된 경로를 가진 타일셋 제작</li>
                  <li>웨이브 시작 및 종료지점 제작</li>
                </ul>

                <div className="p-4 rounded-lg overflow-hidden shadow-lg">
                  <img src="./Tileset.png" className="w-full object-cover" />
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold mb-2">오브젝트</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>맵에 필요한 오브젝트</li>
                  <li>투사체와 같은 추가 디자인 요소</li>
                </ul>

                <div className="p-4 rounded-lg overflow-hidden shadow-lg grid grid-cols-8">
                  <img src="./Arrow.png" className="w-full object-cover" />
                  <img src="./Stone.png" className="w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 음악 */}
      <div className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">게임 음악</h2>
        <audio
          className="mb-4"
          src="./audio/sample1.mp3"
          controls
          id="myAudio"
        ></audio>
        <audio
          className="mb-4"
          src="./audio/sample2.mp3"
          controls
          id="myAudio"
        ></audio>
        <audio
          className="mb-4"
          src="./audio/sample6.wav"
          controls
          id="myAudio"
        ></audio>
      </div>

      {/* 데모 & 테스트 빌드 */}
      <div className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">데모 & 테스트 빌드</h2>
        <p className="text-xs text-gray-600 mb-4">
          ※ 폴더 내 2DTowerDefense.exe 파일을 통해 게임 실행
        </p>

        {/* Alpha Test Build */}
        <div className="p-4 bg-gray-100 rounded mb-6">
          <div className="grid grid-cols-2 items-center mb-4">
            <p className="font-semibold text-lg">Alpha Test Build (v0.3.0)</p>
            <div className="flex justify-end space-x-2">
              <a
                href="./Demo/AlphaTestFileDivision/TestAlpha.z01"
                download
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
              >
                Download .z01
              </a>
              <a
                href="./Demo/AlphaTestFileDivision/TestAlpha.z02"
                download
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
              >
                Download .z02
              </a>
              <a
                href="./Demo/AlphaTestFileDivision/TestAlpha.zip"
                download
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
              >
                Download .zip
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-600 mb-4">
            ※ 모든 파일을 같은 폴더에 다운로드 한 뒤 TestAlpha.zip을 압축
            해제하세요.
          </p>

          <h4 className="font-semibold mb-2">주요 업데이트</h4>
          <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
            <li>
              <b>게임 타이틀 및 설정 메뉴</b>: 해상도, 볼륨 조절 등 기본 환경
              설정 기능 추가
            </li>
            <li>
              <b>타워 공격 애니메이션</b>: 모든 타워의 공격 모션에 애니메이션
              적용 및 공격 속도와 동기화
            </li>
            <li>
              <b>사운드 시스템</b>: BGM 및 모든 효과음(SFX) 추가, 개별 사운드
              제어 시스템 구현
            </li>
            <li>
              <b>성능 최적화</b>: 오브젝트 풀링 시스템을 도입하여 게임 내
              오브젝트 생성/파괴 비용 감소
            </li>
            <li>
              <b>코드 리팩토링</b>: State 패턴 적용, UI 업데이트 로직 개선 등
              코드 구조 전반 개선
            </li>
          </ul>
        </div>
        {/* v0.2.0 */}
        <div className="p-4 bg-gray-50 rounded mb-6">
          <div className="grid grid-cols-2 items-center mb-4">
            <p className="font-semibold text-lg">v0.2.0</p>
          </div>
          <h4 className="font-semibold mb-2">주요 업데이트</h4>
          <ul className="list-disc pl-5 text-sm mb-4 space-y-1">
            <li>
              <b>랜덤 맵 생성</b>: 스테이지 시작 시 맵이 랜덤하게 생성되어
              다양한 전략적 플레이 유도
            </li>
            <li>
              <b>UI 숨김 기능</b>: TAB 키를 통해 UI를 켜고 끌 수 있는 기능 추가
            </li>
            <li>
              <b>코드 구조 개선</b>: 웨이브, UI 등 내부 시스템 리팩토링 진행
            </li>
          </ul>
          <h4 className="font-semibold mb-2">밸런스 조정</h4>
          <ul className="list-disc pl-5 text-sm mb-4">
            <li>화살비 스킬 데미지 하향</li>
            <li>낙뢰 스킬 데미지 상향 및 방어력 감소 효과 추가</li>
          </ul>
        </div>
        {/* v0.1.0 */}
        <div className="p-4 bg-gray-50 rounded">
          <div className="grid grid-cols-2 items-center mb-4">
            <p className="font-semibold text-lg">v0.1.0 : 2024-10-11</p>
            <a
              href="./Demo/TowerDefenseDemo01.7z"
              download
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              다운로드
            </a>
          </div>

          <h4 className="font-semibold mb-2">최초 데모 버전</h4>
          <ul className="list-disc pl-5 text-sm mb-4">
            <li>타워 설치 및 정보 표시 기능</li>
            <li>스킬 사용 기능</li>
            <li>웨이브 시스템 및 보상</li>
            <li>기본 UI 및 게임 속도 제어</li>
            <li>타워 업그레이드 기능</li>
          </ul>

          <h4 className="font-semibold mb-2">피드백</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>
              <b>기능적 문제</b>: 오디오 크기 조절, SP 상한선 초과, 랜덤 타워
              겹침, 몬스터 경로 이탈
            </li>
            <li>
              <b>밸런스</b>: 특정 스킬(화살비, 레이저) 하향 및 낙뢰 스킬 상향
              필요
            </li>
            <li>
              <b>개선 필요</b>: 마우스 오버 시 스킬 설명 UI 필요
            </li>
          </ul>
        </div>
      </div>

      {/* Debug */}
      <div className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">DEV_LOG</h2>

        <div className="p-4 bg-gray-50 rounded mb-4">
          <h4 className="font-semibold mb-2">1. 몬스터 경로이탈</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>문제점 : n번 지점에서 n+1번 지점 이동 시 발생하는 문제</li>
            <p>
              &nbsp;&nbsp;└&nbsp; n+1번 방향으로 직진 후 if상황 (두번째지점과
              인접할 떄) 방향을 전환
            </p>
            <p>
              &nbsp;&nbsp;└&nbsp; 패널 등을 열거나 알트탭 등의 지연 발생 시
              방향전환하지 못하고 기존 방향으로 직진
            </p>
            <li>
              개선 : 현재 위치와 목표 지점 간의 거리와 방향을 계산 하여 목표
              지점으로 이동 (목표지점 이상으로 이동 X)
            </li>
          </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded mb-4">
          <h4 className="font-semibold mb-2">2. 적 추적 알고리즘 최적화</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>문제점 : 먼저 등장한 적이 우선적으로 처리되지 않는 문제</li>
            <p>
              &nbsp;&nbsp;└&nbsp; 현재 타워와 몬스터간의 거리를 최우선하여 공격
              우선순위를 설정 함
            </p>
            <li>개선 : 먼저 등장한 적을 우선순위를 높게 주어서 해결</li>
            <p>
              &nbsp;&nbsp;└&nbsp; 공격거리내 적 탐지 시 생성 순서대로 탐색하고
              break문을 통한 해결
            </p>
          </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded mb-4">
          <h4 className="font-semibold mb-2">
            3. 설치된 타워 선택 불가능 오류
          </h4>
          <ul className="list-disc pl-5 text-sm">
            <li>
              문제점 : 일정 이상 타워 설치 시 타워 선택(UI 제공) 안되는 오류
              발생
            </li>
            <li>
              개선 : 타워 설치 시 Z축 미 지정으로 인해 설치 구문에 -1로 지정되게
              변경
            </li>
          </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded mb-4">
          <h4 className="font-semibold mb-2">
            4. 타일맵에 Box Collider 및 태그 부여하여 타워 배치 UI 구현 시
            문제점 해결
          </h4>
        </div>

        <div className="p-4 bg-gray-50 rounded mb-4">
          <h4 className="font-semibold mb-2">5. 검사타워 공격 시 에러</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>문제점 : 검사타워 공격 시 NullException 발생</li>
            <li>
              개선 : 최종 AttackEnemy 함수 호출 시에도 attackTarget의 null상태
              확인 후 공격
            </li>
          </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded mb-4">
          <h4 className="font-semibold mb-2">6. HitEffect 이슈</h4>
          <p style={{ fontSize: "14.5px" }}>[비정상적인 출력]</p>
          <ul className="list-disc pl-5 text-sm mb-4">
            <li>
              문제점 : 공격속도가 빠르면 이펙트가 정상적으로 출력되지 않음
            </li>
            <li>
              개선 : 이펙트를 Instantiate로 clone하여 특정 초 뒤에 destroy 함
            </li>
          </ul>
          <p style={{ fontSize: "14.5px" }}>[판매 시 이펙트 미삭제]</p>
          <ul className="list-disc pl-5 text-sm">
            <li>
              문제점 : 이펙트 발생도중 타워 판매 시 이펙트가 Destroy 되지 않는
              문제
            </li>
            <li>
              개선 : Destroy(clone, time) 을 통해 타워가 Destroy 되면 같이 삭제
              되도록 수정
            </li>
          </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded mb-4">
          <h4 className="font-semibold mb-2">7. 웨이브 랜덤 보상이슈</h4>
          <p style={{ fontSize: "14.5px" }}>[SP 초과 보상]</p>
          <ul className="list-disc pl-5 text-sm mb-4">
            <li>문제점 : SP 초과 보상</li>
            <li>개선 : 조건문 추가하여 초과되지 않게 수정</li>
          </ul>
          <p style={{ fontSize: "14.5px" }}>[랜덤보상 타워 겹침]</p>
          <ul className="list-disc pl-5 text-sm">
            <li>문제점 : 랜덤보상으로 설치되는 랜덤타워 겹침 현상 발생</li>
            <li>
              개선 : 타워 설치 전 타일의 타워 설치여부 확인 후 비어있는 타일에
              설치
            </li>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 모든
              타일이 설치된 타워면 에러 발생 확률 있음
            </p>
          </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded mb-4">
          <h4 className="font-semibold mb-2">8. UI 실시간 업데이트 문제</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>
              문제점 : 플레이어의 SP, Gold 값이 변경될 때 UI가 즉각적으로
              업데이트되지 않는 문제
            </li>
            <li>
              개선 : 데이터 변경 시 이벤트가 발생하도록 프로퍼티(Property)
              구조로 변경하고, `UIEventManager`를 통해 UI가 이를 구독하여 즉시
              반영하도록 수정
            </li>
          </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded mb-4">
          <h4 className="font-semibold mb-2">9. 타워 공격력 표기 문제</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>
              문제점 : 버프 스킬 등으로 인한 추가 공격력이 합산된 값으로만
              표시되어, 플레이어가 순수 공격력을 파악하기 어려움
            </li>
            <li>
              개선 : 기본, 업그레이드, 버프 공격력을 별도로 계산하고 UI에
              구분하여 표시 (예: 10 + 2 +{" "}
              <span className="text-blue-500">3</span>)하도록 개선
            </li>
          </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded mb-4">
          <h4 className="font-semibold mb-2">10. 스킬 효과 적용 오류</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>
              문제점 : 슬로우(Slow) 스킬 등이 적의 이동 속도를 제대로 제어하지
              못하는 문제
            </li>
            <li>
              개선 : `StatusEffect` 스크립트가 `Enemy` 컴포넌트에 직접 접근하여
              이동 속도를 제어하고, 효과 종료 시 원래 속도로 정확히 복원하도록
              수정
            </li>
          </ul>
        </div>
      </div>

      {/* 개발 계획 */}
      <div className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">개발 계획</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">주요 로드맵</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded">
                <h4 className="font-semibold mb-2">
                  1. 로그라이크 장비 시스템
                </h4>
                <p className="text-sm">장비 장착, 장비 파밍 시스템 개발</p>
              </div>
              <div className="p-4 bg-blue-50 rounded">
                <h4 className="font-semibold mb-2">2. 게임 준비 단계 추가</h4>
                <p className="text-sm">
                  게임 입장 전 장비 장착, 난이도 설정 기능 추가
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded">
                <h4 className="font-semibold mb-2">3. 몬스터 시드 시스템</h4>
                <p className="text-sm">게임마다 랜덤한 몬스터 조합 등장</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">기타 개발 과제</h3>
            <div className="p-4 bg-gray-50 rounded">
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>맵 난이도에 따라 웨이브 보상 차등 설계</li>
                <li>신규 유저를 위한 튜토리얼 기능 추가</li>
                <li>타워 및 스킬 버튼에 마우스 오버 시 설명 UI 추가</li>
                <li>기타 버그 수정 및 지속적인 개선사항 적용</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>Copyright © 2024. WooGeun-Nam All rights reserved.</div>
    </div>
  );
};

export default GamePortfolio;
