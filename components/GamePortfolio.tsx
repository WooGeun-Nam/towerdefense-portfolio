"use client";

import React, { useState } from "react";
import PlanPage from "./GamePortfolio/PlanPage";
import DeployPage from "./GamePortfolio/DeployPage";
import DevLogPage from "./GamePortfolio/DevLogPage";

const GamePortfolio = () => {
  const [activeTab, setActiveTab] = useState<"deploy" | "plan" | "devlog">(
    "deploy"
  );

  return (
    <div className="w-full max-w-6xl mx-auto p-8 flex flex-col items-center">
      {/* 로고 */}
      <div className="w-full max-w-4xl mb-4">
        <img
          src="./SiteLogo.png"
          alt="Game Logo"
          className="w-full h-auto object-contain max-w-[1500px] mx-auto"
        />
      </div>

      {/* 탭 버튼 + 콘텐츠를 하나의 카드처럼 */}
      <div className="w-full max-w-4xl">
        {/* 탭 버튼 */}
        <div className="flex w-full">
          {[
            { id: "deploy", label: "배포" },
            { id: "plan", label: "기획서" },
            { id: "devlog", label: "개발일지" },
          ].map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-2 font-semibold transition border border-b-0
              ${
                activeTab === tab.id
                  ? "bg-white text-blue-600 border-gray-300"
                  : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
              }
              ${index === 0 ? "rounded-tl-lg" : ""}
              ${index === 2 ? "rounded-tr-lg" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 콘텐츠 카드 (탭 전환 영역) */}
        <div className="w-full bg-white border border-t-0 border-gray-300 rounded-b-lg shadow p-6">
          {/* ★★★ [핵심 수정] 각 탭의 콘텐츠를 div로 감싸서 명확하게 분리합니다. ★★★ */}
          <div style={{ display: activeTab === "deploy" ? "block" : "none" }}>
            <DeployPage onTabChange={setActiveTab} />
          </div>
          <div style={{ display: activeTab === "plan" ? "block" : "none" }}>
            <PlanPage />
          </div>
          <div style={{ display: activeTab === "devlog" ? "block" : "none" }}>
            <DevLogPage />
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto bg-white p-8">
        Copyright © 2024. WooGeun-Nam All rights reserved.
      </div>
    </div>
  );
};

export default GamePortfolio;
