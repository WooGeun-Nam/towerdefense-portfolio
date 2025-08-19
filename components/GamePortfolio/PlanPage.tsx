import React from "react";

const PlanPage = () => {
  return (
    <div className="space-y-8">
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

      <div className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">기술 요약</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          이번 프로젝트는 <b>모듈형 구조와 이벤트 기반 설계</b>를 통해
          유지보수성과 확장성을 극대화한 2D 로그라이크 타워 디펜스 게임입니다.
          타워와 스킬은 <b>State 패턴</b>을 적용한 모듈형 구조로 구현하여
          행동(탐색·공격)을 명확히 분리하였고, 툴팁·보상·장비 장착 등 주요 UI는{" "}
          <b>이벤트 기반 갱신</b>으로 처리되어 불필요한 연산을 최소화했습니다.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mt-2">
          또한, <b>웨이브 랜덤 보상과 첫 웨이브 특성 시스템</b>으로 전략적 선택
          요소를 강화하였으며, 맵·적 스폰·튜토리얼을 <b>데이터 기반 설계</b>로
          전환하여 리플레이성과 유지보수성을 높였습니다. 마지막으로{" "}
          <b>사운드 정규화와 해상도 대응 UI</b>,<b>중앙화된 매니저 구조</b>를
          통해 여러 환경에서 안정적이고 일관된 플레이 경험을 제공합니다.
        </p>
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
                      cost: "200TC / 물리형",
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
            <div className="space-y-4 mb-4">
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
                <h4 className="font-semibold mb-2">첫 웨이브 특성</h4>
                <p className="text-sm">
                  <li>게임 시작 시 첫 웨이브에서 10가지 특성 중 2개 제시</li>
                  <li>1개 선택 시 게임 플레이 전반에 큰 영향</li>
                  <li>기존 웨이브 랜덤 보상과 연계</li>
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
                  <li>HP 회복 (최대 체력 상태에서는 등장 X)</li>
                  <li>SP 추가 20~60 포인트</li>
                  <li>골드 보상</li>
                  <li>랜덤 타워 자동 설치 (경로 주위 우선으로 설치)</li>
                  <li>무료 물리/마법 업그레이드</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-4">난이도 & 장비 시스템</h3>
            <div className="space-y-4 mb-4">
              <div className="p-4 bg-gray-50 rounded">
                <h3 className="text-lg font-semibold mb-2">난이도 시스템</h3>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>대기실에서 난이도 선택 가능</li>
                  <li>적 체력, 골드, 웨이브 배율에 직접 영향</li>
                  <li>난이도 곡선 설계로 고난이도 플레이 지원</li>
                  <li>난이도에 비례한 장비등급 확률 조정</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold mb-2">장비 시스템</h4>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>장비 획득 및 장착 시스템</li>
                  <li>장신구 장착 시 특수 스킬 발동</li>
                  <li>웨이브 보상 및 난이도와 연계된 파밍</li>
                  <li>장비 파밍을 통한 높은 난이도를 도전</li>
                  <li>
                    보스급 적 처치, 클리어 보상, 랜덤 보상 패널을 통한 획득처
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 무한모드 시스템 */}
        <div className="p-4 bg-gray-50 rounded">
          <h3 className="text-lg font-semibold mb-4">무한모드 시스템</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <b>개방 조건:</b> 일반 모드 100 난이도 클리어 시 개방
            </li>
            <li>
              <b>규칙:</b>
              <ul className="list-decimal pl-6 mt-1 space-y-1">
                <li>
                  최종 웨이브가 없으며, 웨이브마다 2분의 제한 시간이 주어집니다.
                </li>
                <li>
                  적이 최종 지점에 도달해도 죽지 않고 출발 지점으로 순환합니다.
                </li>
                <li>제한 시간 내에 모든 적을 처치하면 웨이브 클리어입니다.</li>
                <li>
                  시간 내에 적을 모두 처치하지 못하면 남은 적 하나당 HP가 1씩
                  감소합니다.
                </li>
                <li>HP가 0이 되면 게임이 종료되고 최종 점수가 정산됩니다.</li>
              </ul>
            </li>
            <li>
              <b>점수 및 순위표:</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  클리어 점수, 맵 난이도 배율, 남은 시간을 합산하여 최종 점수가
                  결정됩니다.
                </li>
                <li>
                  최종 점수를 기준으로 상위 10명의 순위표(리더보드)에 등록할 수
                  있습니다.
                </li>
              </ul>
            </li>
            <li>
              <b>특수 기능:</b> 데미지 분석 기능을 통해 타워별 데미지 기여도를
              확인할 수 있습니다.
            </li>
          </ul>
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
              <ul className="list-disc pl-5 text-sm space-y-3">
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
                <li>
                  <b>툴팁 시스템 통합</b>: TooltipManager와 TooltipTrigger를
                  기반으로 장비, 타워, 스킬에 마우스 오버 시 실시간 툴팁을
                  표시하여 UI 일관성과 직관성을 강화했습니다.
                </li>

                <li>
                  <b>이벤트 기반 UI 갱신</b>: 장비 장착, 보상 선택 등 주요
                  이벤트를 이벤트 리스너 기반으로 처리하여, 불필요한 Update
                  호출을 줄이고 퍼포먼스를 개선했습니다.
                </li>

                <li>
                  <b>웨이브 랜덤 보상 / 첫 웨이브 특성 시스템</b>: 선택형 보상
                  패널과 첫 웨이브 특성 선택 시스템을 통합하여, 게임 초반
                  전략성을 강화하고 플레이 전체에 즉각 반영되도록 설계했습니다.
                </li>

                <li>
                  <b>타워 및 스킬 구조 고도화</b>: TowerArchetype과
                  SpecialSkill을 분리하고, Passive/Active/TowerInstall 3계층
                  구조를 적용하여 다양한 장비 효과와 스킬 확장이 가능하도록
                  설계했습니다.
                </li>

                <li>
                  <b>맵/적/튜토리얼 데이터화</b>: 맵 시드 기반 랜덤 배치, 적
                  스폰 정보, 튜토리얼 텍스트를 데이터 주도 설계로 전환하여,
                  리플레이성과 유지보수성을 크게 강화했습니다.
                </li>

                <li>
                  <b>사운드 및 해상도 대응</b>: 사운드 볼륨 정규화 및 1280~1600
                  해상도 대응 UI를 구현하고, 중앙 사운드/해상도 매니저를 통해
                  관리 편의성과 확장성을 높였습니다.
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
    </div>
  );
};

export default PlanPage;
