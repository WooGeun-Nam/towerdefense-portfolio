import React from "react";

const DevLogPage = () => {
  return (
    <div className="space-y-8">
      {/* Beta v0.2.x 통합 개발 일지 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">
          통합 개발 일지 (Beta_v0.2.x)
        </h2>
        <p className="text-sm mb-4">
          Beta v0.2.1부터 v0.2.4까지의 주요 업데이트 및 버그 수정 내역입니다.
        </p>

        <div className="space-y-8 text-sm">
          {/* v0.2.4 */}
          <div className="p-4 border-l-4 border-gray-400">
            <h3 className="font-semibold text-lg mb-2">v0.2.4</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">주요 버그 수정</h4>
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <b>
                      <span className="text-red-600">■</span> 게임 종료 후 상점
                      멈춤 버그 해결:
                    </b>
                    <p className="pl-4 text-xs">
                      문제: 게임 플레이 중 변경된 Time.timeScale(0 또는 4)이 씬
                      전환 후에도 유지되어, 상점 애니메이션이 무한 루프에
                      빠지거나 비정상적으로 재생됨. → 해결: 로비 씬 진입 시
                      Time.timeScale을 1로 강제 초기화하는 로직을 추가하여 문제
                      해결.
                    </p>
                  </li>
                  <li>
                    <b>
                      <span className="text-red-600">■</span> 다중 오브젝트 환경
                      최적화 (사운드):
                    </b>
                    <p className="pl-4 text-xs">
                      문제: 다수의 타워가 동시에 공격 시 효과음(SFX)이 끊기거나
                      작아지는 현상 발생. → 해결: 오디오 소스 풀링(Pooling) 및
                      재생 조절(Throttling) 기법을 도입하여 시스템 안정성과
                      사운드 품질을 동시에 개선.
                    </p>
                  </li>
                  <li>
                    <b>
                      <span className="text-red-600">■</span> `파괴신의 석상`
                      스킬 비정상 종료 버그 해결:
                    </b>
                    <p className="pl-4 text-xs">
                      문제: 스킬 발동 시 `foreach`로 적 리스트를 순회하는 도중,
                      다른 코드에서 해당 리스트를 수정하여
                      `InvalidOperationException` 오류 발생. → 해결: 반복문 시작
                      전, 원본 리스트의 `복사본`을 만들어 순회하도록 변경하여
                      오류를 원천적으로 방지.
                    </p>
                  </li>
                  <li>
                    <b>투사체 터널링 문제 해결:</b>
                    <p className="pl-4 text-xs">
                      문제: 렉 발생 시 빠른 투사체가 적을 관통하는 현상. → 해결:
                      투사체 Prefab의 Rigidbody 2D 컴포넌트에서 Collision
                      Detection을 `Discrete`에서 `Continuous`로 변경하여 해결.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">추가</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <b>오류 추적 시스템:</b> `ExceptionReporter.cs`를 추가하여,
                    게임 플레이 중 발생하는 치명적인 오류(Exception)를
                    PlayFab으로 자동 전송하는 기능 구현.
                  </li>
                  <li>신규 스프라이트를 이용한 신규 `적` 3종 추가.</li>
                  <li>
                    <b>리소스 최적화:</b> 로딩 씬에
                    `Resources.UnloadUnusedAssets` 및 `GC.Collect`를 호출하는
                    로직을 추가하여, 게임 세션 종료 후 메모리를 정리하도록 개선.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* v0.2.3 */}
          <div className="p-4 border-l-4 border-green-500 bg-green-50">
            <h3 className="font-semibold text-lg mb-2 text-green-800">
              v0.2.3 (주요 안정성 업데이트)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">주요 버그 수정</h4>
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <b>상점 뽑기 기능 안정화:</b>
                    <p className="pl-4 text-xs">
                      문제: 뽑기 애니메이션 중 `Resources.Load`의 반복 호출로
                      인한 성능 저하 및 게임 멈춤 현상. → 해결: 애니메이션 시작
                      전 필요한 모든 아이콘을 미리 불러오는 `Preloading` 방식을
                      적용하고, `try-finally` 구문을 추가하여 안정성 강화.
                    </p>
                  </li>
                  <li>
                    <b>`희생 전략` 특성 관련 버그 수정:</b>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>
                        특성을 선택하지 않아도 타워 버튼이 비활성화되는 현상
                        해결 (방어 코드 추가).
                      </li>
                      <li>
                        비활성화된 스킬이 다음 웨이브에 다시 활성화되는 문제
                        해결.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">UI / UX 개선</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <b>웨이브 알림 우선순위:</b> 웨이브 시작 알림이 다른 알림을
                    중단하고 즉시 최상단에 표시되도록 개선.
                  </li>
                  <li>
                    <b>무한모드 순위표:</b> 점수 등록 시 서버 응답 완료 후
                    순위표가 새로고침되도록 콜백 로직을 수정하고, 과정 동안 로딩
                    화면을 표시하여 UX 개선.
                  </li>
                  <li>
                    <b>데미지 미터기:</b> 특수 스킬로 소환된 타워의 아이콘이
                    정상적으로 표시되도록 조회 로직 개선.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">데이터 및 분석</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <b>최종 점수 0점 표시:</b> 일반 모드 클리어 시 점수 계산
                    순서 오류로 최종 점수가 0으로 표시되던 버그 수정.
                  </li>
                  <li>
                    <b>PlayFab 분석 데이터 누락:</b> `scoreDetails`,
                    `finalWaveEnemyInfo` 등 주요 플레이 로그가 누락되던 문제
                    해결. (적 정보 수집 방식을 `실시간 조회`에서 `웨이브 샘플
                    저장` 방식으로 변경)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">밸런스 및 기타</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>`연쇄 폭발` 특성 성능 하향 조정.</li>
                  <li>상점에 고급, 희귀 등급의 신규 뽑기 상품 추가.</li>
                  <li>`복수의 화신` 타워 데미지 분석 이미지 오류 개선.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* v0.2.2 */}
          <div className="p-4 border-l-4 border-gray-300">
            <h3 className="font-semibold text-lg mb-2">v0.2.2</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>물리/마법 업그레이드 보상 선택 시 문구 수정.</li>
              <li>TAB 키(UI숨김) 기능이 점수, 시간 패널과 연동되도록 개선.</li>
            </ul>
          </div>

          {/* v0.2.1 */}
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
            <h3 className="font-semibold text-lg mb-2 text-blue-800">
              Beta_v0.2.1 (주요 업데이트)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">신규 콘텐츠: 무한모드</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    최종 웨이브 없이, 제한 시간 내 적을 모두 처치하는 방식의
                    신규 모드 추가.
                  </li>
                  <li>
                    플레이 점수를 기록하는 `순위표` 기능 및 <b>Azure PlayFab</b>{" "}
                    서버 연동.
                  </li>
                  <li>인게임 `데미지 분석` 기능 추가.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">주요 시스템</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <b>상점 및 재화:</b> 중복 장비 획득 시 `RCoin`을 지급하고,
                    이를 사용해 장비를 뽑는 상점 시스템 추가.
                  </li>
                  <li>
                    <b>데이터 수집:</b> 유저 플레이 데이터(클리어 여부, 장비,
                    타워 통계 등) 수집을 위한 Log 시스템 개발 및 서버 연동.
                  </li>
                  <li>
                    <b>데이터 보안:</b> 플레이어 저장 데이터 암호화 적용.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">밸런스 및 콘텐츠</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <b>타워:</b> 궁수 타워 하향, 창 타워 상향, 타워형
                    스킬(`복수의 화신`, `기본타워 스킬`) 성능 개선
                  </li>
                  <li>
                    <b>장비/특성:</b> 무기 고유 효과 재설정, 전체 장비의 공격
                    사거리 옵션 효율 50% 감소, `연쇄 폭발`, `약자 멸시` 특성
                    개선
                  </li>
                  <li>
                    <b>적:</b> 난이도에 따라 적 스케일 및 종류가 다양해지도록
                    수정, 적 랜덤 방어력 생성 기능 추가
                  </li>
                  <li>
                    <b>맵:</b> 신규 테마 맵 2종 추가 및 난이도별 맵 해금 기능
                    적용
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">
                  기술적 개선 및 버그 수정 상세
                </h4>
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <b>
                      <span className="text-red-600">■</span> 성능 최적화 (UI
                      전환):
                    </b>
                    <p className="pl-4 text-xs">
                      문제: 빌드 환경에서 UI 전환이 느려지는 문제 발생. → 해결:
                      Time.timeScale에 영향받지 않도록 DeltaTime 기반으로 로직을
                      변경하고, animationDuration으로 속도를 제어.
                    </p>
                  </li>
                  <li>
                    <b>UI 대응성 개선:</b>
                    <p className="pl-4 text-xs">
                      문제: 특정 해상도에서 버튼 UI가 크기에 맞지 않는 문제. →
                      해결: RectTransform의 앵커를 Stretch로 적용하여 해결.
                    </p>
                  </li>
                  <li>
                    <b>UI 렌더링 오류:</b>
                    <p className="pl-4 text-xs">
                      문제: 스킬 버튼 클릭 후 UI를 숨겼다 다시 표시하면 타워
                      아이콘이 올라오는 버그. → 해결: UIManager의
                      ShowUIAnimation 로직 수정으로 해결.
                    </p>
                  </li>
                  <li>
                    <b>스킬 이펙트 잔상:</b>
                    <p className="pl-4 text-xs">
                      문제: 게임 클리어 직전 `낙뢰` 스킬 사용 시 이펙트가
                      사라지지 않는 버그. → 해결: SkillThunder 스크립트에서 공격
                      시전 시 Null 체크를 추가하고, 이펙트를 비활성화가 아닌
                      즉시 Destroy 하도록 변경.
                    </p>
                  </li>
                  <li>
                    <b>무한모드 로직 오류:</b>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>
                        적이 남은 상태에서 보상 패널로 넘어가지 않고 즉시 다음
                        웨이브가 시작되는 버그 해결.
                        <p className="pl-4 text-xs">
                          - 체력 감소 로직 이후 보상 패널이 열리도록 순서 수정.
                        </p>
                      </li>
                      <li>
                        `타워 전문가` 특성 선택 시 타워 코스트 보상이
                        비정상적으로 적용되는 버그 해결.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beta_v0.1.0 통합 개발 일지 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">
          통합 개발 일지 (Beta_v0.1.0)
        </h2>
        <p className="text-sm mb-4">
          프로토타입에서 베타 버전으로 전환하며 적용된 주요 개발 내역입니다.
        </p>
        <div className="space-y-6 text-sm">
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
            <h3 className="font-semibold text-lg mb-2 text-blue-800">
              v0.1.0 (주요 시스템 및 콘텐츠 확장)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">
                  1. 대기실 및 난이도 시스템
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>대기실에서 난이도 선택 및 장비 설정 가능</li>
                  <li>난이도별 적 체력/골드 배율 적용</li>
                  <li>ClearScene 및 클리어 점수/보상 연동</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">2. 장비 시스템</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>로그라이크식 장비 획득/장착 시스템 완성</li>
                  <li>장비 정렬, 인벤토리 UI 및 장착/해제 기능 구현</li>
                  <li>장비 스탯 누적/중복 문제 수정</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">
                  3. SpecialSkills 및 장비 특수 스킬
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>장신구 장착 시 특수 스킬 활성화</li>
                  <li>Passive/Active/TowerInstall 3종 스킬 구조 구현</li>
                  <li>특수 스킬 발동 이벤트 처리 및 인게임 UI 연동</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">4. 웨이브 랜덤 보상</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>웨이브 종료 시 보상 패널 선택 기능</li>
                  <li>골드 보상 스케일링 및 장비 드랍 추가</li>
                  <li>
                    첫 웨이브: 10가지 특성 중 2개 제시 → 1개 선택 (게임 플레이
                    전반에 큰 영향)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">
                  5. 타워 아키타입/배치 로직 개선
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>TowerArchetype 기반 동적 버튼/배치 시스템</li>
                  <li>타워 설치 안정화 및 널 참조 문제 해결</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">6. 툴팁 시스템</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    장비, 타워, 스킬에 마우스 오버 시 툴팁 표시 (TooltipManager
                    & TooltipTrigger 활용)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">
                  7. 알림 가시성 및 게임 속도 관리
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>알림 겹침 문제 해결 및 중요도별 채널 분리</li>
                  <li>웨이브 대기 시간은 게임 속도와 독립</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">8. 맵/적/튜토리얼 추가</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>신규 맵(눈 테마) 추가 및 맵 시드 기능 구현</li>
                  <li>적 스프라이트/애니메이션 추가 및 튜토리얼 텍스트 추가</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">
                  9. 사운드 및 해상도/UI 개선
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>사운드 볼륨 정규화</li>
                  <li>1280~1600 해상도 대응 UI 리팩토링</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-1">10. 기타 버그 수정</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>타워 2D 콜라이더 크기 조정</li>
                  <li>장비 툴팁 표시 개선</li>
                  <li>웨이브 및 난이도 밸런스 계산식 수정</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alpha_v0.3.0 통합 개발 일지 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">
          통합 개발 일지 (Alpha_v0.3.0 이전)
        </h2>
        <p className="text-sm mb-4">
          프로젝트 초기 프로토타이핑 단계의 주요 기술적 문제 해결 기록입니다.
        </p>
        <div className="space-y-6 text-sm">
          <div className="p-4 border-l-4 border-gray-400">
            <h3 className="font-semibold text-lg mb-2">
              초기 프로토타입 기술적 문제 해결
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-1">
                  핵심 로직 및 시스템 안정화
                </h4>
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <b>
                      <span className="text-red-600">■</span> 몬스터 경로 이탈
                      문제 해결:
                    </b>
                    <p className="pl-4 text-xs">
                      문제: 프레임 드랍 발생 시, 다음 지점으로 방향 전환을 하지
                      못하고 맵 밖으로 직진함. → 해결: 목표 지점과의 거리와
                      방향을 매 프레임 계산하여, 목표 지점 이상으로 이동하지
                      않도록 로직 수정.
                    </p>
                  </li>
                  <li>
                    <b>적 추적 알고리즘 최적화:</b>
                    <p className="pl-4 text-xs">
                      문제: 타워가 거리가 가깝다는 이유로 나중에 등장한 적을
                      먼저 공격함. → 해결: 공격 범위 내 적 탐지 시, 생성 순서가
                      빠른 적을 우선 공격하도록 탐색 로직 개선.
                    </p>
                  </li>
                  <li>
                    <b>설치된 타워 선택 불가 오류 해결:</b>
                    <p className="pl-4 text-xs">
                      문제: 타워 다수 설치 시 Z축 문제로 일부 타워가 선택되지
                      않음. → 해결: 타워 설치 시 Z축 값을 명시적으로 지정하여
                      렌더링 순서 보장.
                    </p>
                  </li>
                  <li>
                    <b>타워 배치 UI 문제점 해결:</b>
                    <p className="pl-4 text-xs">
                      문제: 타워 배치 UI 구현 시 타일맵 인식 문제 발생. → 해결:
                      타일맵에 Box Collider와 `Tile` 태그를 부여하여 마우스 클릭
                      위치의 타일을 정확하게 인식하도록 수정.
                    </p>
                  </li>
                  <li>
                    <b>검사 타워 공격 시 에러 해결:</b>
                    <p className="pl-4 text-xs">
                      문제: 검사 타워가 공격하는 순간 attackTarget이 null이 되어
                      `NullException` 발생. → 해결: 최종 AttackEnemy 함수 호출
                      직전에도 attackTarget의 null 상태를 한 번 더 확인하는 방어
                      코드를 추가하여 해결.
                    </p>
                  </li>
                  <li>
                    <b>Hit 이펙트 관련 이슈 해결:</b>
                    <p className="pl-4 text-xs">
                      문제: 공격 속도가 빠르면 이펙트가 정상 출력되지 않거나,
                      타워 판매 시 이펙트가 사라지지 않음. → 해결: 이펙트를
                      Instantiate로 복제하고 일정 시간 후 자동 Destroy 되도록
                      수정.
                    </p>
                  </li>
                  <li>
                    <b>웨이브 랜덤 보상 이슈 해결:</b>
                    <p className="pl-4 text-xs">
                      문제: SP가 최대치를 초과하거나, 랜덤 타워 보상이 이미
                      타워가 있는 곳에 겹쳐서 설치됨. → 해결: 조건문을 추가하여
                      최대치 초과를 방지하고, 타워 설치 전 타일이 비어있는지
                      확인하도록 개선.
                    </p>
                  </li>
                  <li>
                    <b>UI 실시간 업데이트 문제 해결:</b>
                    <p className="pl-4 text-xs">
                      문제: SP, Gold 등 재화 변경 시 UI가 즉시 갱신되지 않음. →
                      해결: 데이터 변경 시 이벤트를 발생시키는
                      프로퍼티(Property) 구조로 변경하고, UI가 이를 구독하여
                      즉시 반영하도록 수정.
                    </p>
                  </li>
                  <li>
                    <b>타워 공격력 표기 문제 해결:</b>
                    <p className="pl-4 text-xs">
                      문제: 버프 효과가 합산된 값으로만 표시되어 순수 공격력
                      파악 불가. → 해결: 기본, 업그레이드, 버프 공격력을 별도로
                      계산하고 UI에 구분하여 표시 (예: 10 + 2 + 3)하도록 개선.
                    </p>
                  </li>
                  <li>
                    <b>스킬 효과 적용 오류:</b>
                    <p className="pl-4 text-xs">
                      문제: 슬로우(Slow) 스킬 등이 적의 이동 속도를 제대로
                      제어하지 못하는 문제. → 해결: StatusEffect 스크립트가
                      Enemy 컴포넌트에 직접 접근하여 이동 속도를 제어하고, 효과
                      종료 시 원래 속도로 정확히 복원하도록 수정.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevLogPage;
