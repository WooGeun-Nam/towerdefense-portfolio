import React from "react";

const DevLogPage = () => {
  return (
    <div className="space-y-8">
      {/* 오늘 통합 개발 일지 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">
          통합 개발 일지 (Beta_v0.1.0)
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Beta_v0.1.0 버전의 개발 일지
        </p>

        <div className="space-y-6 text-sm">
          {/* 1. 대기실 및 난이도 시스템 */}
          <div>
            <h3 className="font-semibold text-lg mb-2">
              1. 대기실 및 난이도 시스템
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>대기실에서 난이도 선택 및 장비 설정 가능</li>
              <li>난이도별 적 체력/골드 배율 적용</li>
              <li>ClearScene 및 클리어 점수/보상 연동</li>
            </ul>
          </div>

          {/* 2. 장비 시스템 */}
          <div>
            <h3 className="font-semibold text-lg mb-2">2. 장비 시스템</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>로그라이크식 장비 획득/장착 시스템 완성</li>
              <li>장비 정렬, 인벤토리 UI 및 장착/해제 기능 구현</li>
              <li>장비 스탯 누적/중복 문제 수정</li>
            </ul>
          </div>

          {/* 3. SpecialSkills 및 장비 특수 스킬 */}
          <div>
            <h3 className="font-semibold text-lg mb-2">
              3. SpecialSkills 및 장비 특수 스킬
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>장신구 장착 시 특수 스킬 활성화</li>
              <li>Passive/Active/TowerInstall 3종 스킬 구조 구현</li>
              <li>특수 스킬 발동 이벤트 처리 및 인게임 UI 연동</li>
            </ul>
          </div>

          {/* 4. 웨이브 랜덤 보상 */}
          <div>
            <h3 className="font-semibold text-lg mb-2">4. 웨이브 랜덤 보상</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>웨이브 종료 시 보상 패널 선택 기능</li>
              <li>골드 보상 스케일링 및 장비 드랍 추가</li>
              <li>첫 웨이브: 10가지 특성 중 2개 제시 → 1개 선택</li>
              <li>선택한 특성은 게임 플레이 전반에 큰 영향</li>
            </ul>
          </div>

          {/* 5. 타워 아키타입/배치 로직 개선 */}
          <div>
            <h3 className="font-semibold text-lg mb-2">
              5. 타워 아키타입/배치 로직 개선
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>TowerArchetype 기반 동적 버튼/배치 시스템</li>
              <li>타워 설치 안정화 및 널 참조 문제 해결</li>
            </ul>
          </div>

          {/* 6. 툴팁 시스템 */}
          <div>
            <h3 className="font-semibold text-lg mb-2">6. 툴팁 시스템</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>장비, 타워, 스킬에 마우스 오버 시 툴팁 표시</li>
              <li>TooltipManager & TooltipTrigger를 활용한 통합 시스템</li>
            </ul>
          </div>

          {/* 7. 알림/게임 속도 */}
          <div>
            <h3 className="font-semibold text-lg mb-2">
              7. 알림 가시성 및 게임 속도 관리
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>알림 겹침 문제 해결 및 중요도별 채널 분리</li>
              <li>웨이브 대기 시간은 게임 속도와 독립</li>
            </ul>
          </div>

          {/* 8. 맵/적/튜토리얼 */}
          <div>
            <h3 className="font-semibold text-lg mb-2">
              8. 맵/적/튜토리얼 추가
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>신규 맵(눈 테마) 추가 및 맵 시드 기능 구현</li>
              <li>적 스프라이트/애니메이션 추가</li>
              <li>튜토리얼 텍스트 추가</li>
            </ul>
          </div>

          {/* 9. 사운드/해상도 */}
          <div>
            <h3 className="font-semibold text-lg mb-2">
              9. 사운드 및 해상도/UI 개선
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>사운드 볼륨 정규화</li>
              <li>1280~1600 해상도 대응 UI 리팩토링</li>
            </ul>
          </div>

          {/* 10. 기타 */}
          <div>
            <h3 className="font-semibold text-lg mb-2">10. 기타 버그 수정</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>타워 2D 콜라이더 크기 조정</li>
              <li>장비 툴팁 표시 개선</li>
              <li>웨이브 및 난이도 밸런스 계산식 수정</li>
            </ul>
          </div>

          {/* 11. 아이디어 */}
          <div>
            <h3 className="font-semibold text-lg mb-2">11. 아이디어</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>1웨이브 특성: 마법학회 → 설치 시 마법형 타워</li>
              <li>1웨이브 특성: 압도적인 힘 → 설치 시 물리형 타워</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Debug */}
      <div className="mb-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">
          통합 개발 일지 (Alpha_v0.3.0)
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Alpha_v0.3.0 이전 버전의 개발 일지
        </p>
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
    </div>
  );
};

export default DevLogPage;

