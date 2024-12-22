const GamePortfolio = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-8">
      {/* 헤더 섹션 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Roguelike Tower Defense</h1>
        <p className="text-xl text-gray-600">게임 기획서</p>
        <div className="mt-4 flex justify-center space-x-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">
            로그라이크
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">
            타워 디펜스
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">
            전략
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">
            RPG
          </span>
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
              <li>다양한 타워 조합과 시너지</li>
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
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      name: '기본 타워',
                      cost: '50G',
                      desc: '기본적인 물리 공격 타워',
                    },
                    {
                      name: '검사 타워',
                      cost: '70G',
                      desc: '높은 공격 속도와 단일 데미지',
                    },
                    {
                      name: '창술사 타워',
                      cost: '150G',
                      desc: '최대 4개 대상 동시 공격',
                    },
                    {
                      name: '궁수 타워',
                      cost: '130G',
                      desc: '넓은 범위의 다중 공격',
                    },
                    {
                      name: '레이저 타워',
                      cost: '120G',
                      desc: '높은 DPS의 단일 타겟 공격',
                    },
                    {
                      name: '사제 타워',
                      cost: '100G',
                      desc: '적 방어력 감소 효과',
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
          <div>
            <h3 className="text-lg font-semibold mb-4">웨이브 시스템</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  type: '일반 웨이브',
                  desc: '30마리 몬스터 출현',
                },
                {
                  type: '중간보스',
                  desc: '5웨이브마다 등장, 강화된 능력치',
                },
                {
                  type: '최종보스',
                  desc: '10웨이브 클리어 목표, 최고 난이도',
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
                <h4 className="font-semibold mb-2">선택형 추가 보상</h4>
                <p className="text-sm mb-2">
                  매 웨이브 종료 시 2개의 보상 중 1개 선택
                </p>
                <p className="text-sm mb-2">2개의 보상은 중복 가능하다</p>
                <p className="text-sm mb-2">
                  개별 보상은 선택지, 수치 2개의 랜덤을 통해 확정된다
                </p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>HP 회복: 1~4 포인트</li>
                  <li>SP 추가: 20~60 포인트</li>
                  <li>골드: 10~120</li>
                  <li>랜덤 타워 자동 설치</li>
                  <li>무료 공격력 업그레이드</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 기술적 특징 */}
      <div className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">기술적 특징</h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">그래픽 & UI</h3>
            <div className="p-4 bg-gray-50 rounded">
              <ul className="list-disc pl-5 text-sm">
                <li>픽셀 아트 그래픽 스타일</li>
                <li>직관적인 UI/UX 설계</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">시스템 설계</h3>
            <div className="p-4 bg-gray-50 rounded">
              <ul className="list-disc pl-5 text-sm">
                <li>모듈형 타워 시스템</li>
                <li>확장 가능한 스킬 시스템</li>
                <li>유연한 난이도 조정 시스템</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 게임 UI 이미지 섹션 */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">게임 UI 레이아웃</h3>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="./game-ui.png"
              alt="게임 UI 레이아웃"
              className="w-full object-cover"
            />
          </div>

          {/* UI 상세 설명 추가 */}
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded">
                <h5 className="font-semibold mb-2">타워/스킬 선택 패널</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>타워 아이콘 및 비용</li>
                  <li>클릭 및 단축키로 설치</li>
                  <li>스킬패널 과 버튼 및 단축키로 스왑가능</li>
                  <li>스킬의 활성화 상태 표시</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 rounded">
                <h5 className="font-semibold mb-2">게임 시스템</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>설정 메뉴</li>
                  <li>게임 속도 조절</li>
                  <li>재시작 기능</li>
                  <li>적 체력바 표시</li>
                  <li>이펙트 및 시각 효과</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="./user-ui.png"
                alt="게임 UI 레이아웃"
                className="w-full object-cover"
              />
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="./tower-ui.png"
                alt="게임 UI 레이아웃"
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded">
                <h5 className="font-semibold mb-2">상태 표시창</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>체력 게이지 (HP)</li>
                  <li>SP 게이지 (스킬 포인트)</li>
                  <li>현재 골드량</li>
                  <li>웨이브 정보 (0/10) 및 남은 몬스터 정보 표시</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 rounded">
                <h5 className="font-semibold mb-2">타워 정보 및 추가버튼</h5>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>데미지 수치 표시</li>
                  <li>타워 공격 범위 및 공격 속도</li>
                  <li>타워 업그레이드 버튼</li>
                  <li>게임 속도 변경 버튼 x2, x4 배속 가능</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="./skill-ui.png"
              alt="게임 UI 레이아웃"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-4 space-y-4">
            <div className="p-4 bg-gray-50 rounded">
              <h5 className="font-semibold mb-2">스킬 패널</h5>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>버튼 및 단축키를 통해 타워의 특수능력 사용 가능</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="./random-reward.png"
              alt="게임 UI 레이아웃"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-4 space-y-4">
            <div className="p-4 bg-gray-50 rounded">
              <h5 className="font-semibold mb-2">웨이브 랜덤 보상</h5>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>웨이브 종료 시 2개의 보상 패널이 표시</li>
                <li>버튼 클릭을 통해 해당 보상 수령가능</li>
                <li>다음 웨이브 진행까지 카운트를 UI로 상단에 표시</li>
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
                  <li>타워형 캐릭터 제작</li>
                  <li>몬스터형 캐릭터 제작</li>
                  <li>
                    타워형 캐릭터의 공격 및 대기 모션을 위한 애니메이션 제작
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
                  <li>타워디펜스에 적합한 다양한 경로를 가진 타일셋 제작</li>
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
        <audio src="./audio/sample1.mp3" loop controls id="myAudio"></audio>
      </div>
      
      {/* 문제 해결 */}
      <div className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">문제 해결</h2>

        <div className="p-4 bg-gray-50 rounded">
          <h4 className="font-semibold mb-2">1. 몬스터 경로이탈</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>문제점 : n번 지점에서 n+1번 지점 이동 시 발생하는 문제</li>
            <p>
              - n+1번 방향으로 직진 후 if상황 (두번째지점과 인접할 떄) 방향을
              전환
            </p>
            <p>
              - 패널 등을 열거나 알트탭 등의 지연 발생 시 방향전환하지 못하고
              기존 방향으로 직진
            </p>
            <li>개선 :</li>
            <p>
              - 현재 위치와 목표 지점 간의 거리와 방향을 계산 하여 목표 지점으로
              이동 (목표지점 이상으로 이동 X)
            </p>
          </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded">
          <h4 className="font-semibold mb-2">2. 적 추적 알고리즘 최적화</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>문제점 : </li>
            <p>- 타워와 몬스터간의 거리를 최우선하여 공격 우선순위를 설정 함</p>
            <p>
              - 문제점 : 먼저 등장한 적이 우선적으로 처리되지 않는 문제 발생
            </p>
            <li>개선 :</li>
            <p>- 먼저 등장한 적을 우선순위를 높게 주어서 해결</p>
            <p>
              - 공격거리내 적 탐지 시 생성 순서대로 탐색하고 break문을 통한 해결
            </p>
          </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded">
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

        <div className="p-4 bg-gray-50 rounded">
          <h4 className="font-semibold mb-2">
            4. 타일맵에 Box Collider 및 태그 부여하여 타워 배치 UI 구현 시
            문제점 해결
          </h4>
        </div>

        <div className="p-4 bg-gray-50 rounded">
          <h4 className="font-semibold mb-2">5. 검사타워 공격 시 에러</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>문제점 : 검사타워 공격 시 NullException 발생</li>
            <li>
              개선 : 최종 AttackEnemy 함수 호출 시에도 attackTarget의 null상태
              확인 후 공격
            </li>
          </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded">
          <h4 className="font-semibold mb-2">
            6. 타워 공격 시 HitEffect 비정상적인 출력
          </h4>
          <ul className="list-disc pl-5 text-sm">
            <li>
              문제점1 : 공격속도가 빠르면 이펙트가 정상적으로 출력되지 않음
            </li>
            <li>
              개선1 : 이펙트를 Instantiate로 clone하여 특정 초 뒤에 destroy 함
            </li>
            <li>
              문제점2 : 이펙트 발생도중 타워 판매 시 이펙트가 Destroy 되지 않는
              문제
            </li>
            <li>
              개선2 : Destroy(clone, time) 을 통해 타워가 Destroy 되면 같이 삭제
              되도록 수정
            </li>
          </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded">
          <h4 className="font-semibold mb-2">7. 웨이브 랜덤 보상 오류</h4>
          <ul className="list-disc pl-5 text-sm">
            <li>문제점1 : SP 초과 보상</li>
            <li>개선1 : 조건문 추가하여 초과되지 않게 수정</li>
            <li>문제점2 : 랜덤보상으로 설치되는 랜덤타워 겹침 현상 발생</li>
            <li>
              개선2 : 타워 설치 전 타일의 타워 설치여부 확인 후 비어있는 타일에
              설치
            </li>
            <p>* 모든 타일이 설치된 타워면 에러 발생 확률 있음</p>
          </ul>
        </div>
      </div>

      {/* 개발 계획 */}
      <div className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">개발 계획</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">개발 우선순위</h3>
            <div className="grid grid-cols-5 gap-4">
              {[
                '게임 밸런싱',
                '랜덤 맵 시스템',
                'RPG 요소 개발',
                'NPC 시스템',
                '신규 던전',
              ].map((priority, idx) => (
                <div key={idx} className="p-4 bg-blue-50 rounded text-center">
                  <span className="font-bold text-2xl text-blue-800">
                    {idx + 1}
                  </span>
                  <p className="text-sm mt-2">{priority}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">핵심 개발 과제</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold mb-2">랜덤 경로 생성 시스템</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>타워디펜스에 최적화된 경로 알고리즘 개발</li>
                  <li>난이도 밸런스 유지</li>
                  <li>전략적 재미 요소 강화</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold mb-2">RPG 시스템 확장</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>장비 시스템 (무기, 방어구)</li>
                  <li>던전 난이도 시스템</li>
                  <li>타워 상성 시스템</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePortfolio;
