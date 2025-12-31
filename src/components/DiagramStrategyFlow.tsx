import React from "react";

const DiagramStrategyFlow: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      {/* Desktop Layout */}
      <svg
        className="hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 300"
        width="100%"
        height="auto"
      >
        <defs>
          <linearGradient id="cardGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#f9fafb" />
            <stop offset="100%" stopColor="#e5e7eb" />
          </linearGradient>
          <marker
            id="arrow"
            markerWidth="10"
            markerHeight="10"
            refX="5"
            refY="5"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 Z" fill="#6b7280" />
          </marker>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="4"
              floodColor="#000"
              floodOpacity="0.1"
            />
          </filter>
        </defs>

        {/* Cards */}
        <g>
          <rect
            x="50"
            y="50"
            width="200"
            height="100"
            rx="10"
            fill="url(#cardGradient)"
            stroke="#d1d5db"
            filter="url(#softShadow)"
          />
          <text
            x="150"
            y="80"
            textAnchor="middle"
            fontSize="16"
            fontWeight="bold"
            fill="#374151"
          >
            현재 성적 / 상황
          </text>
          <text
            x="150"
            y="100"
            textAnchor="middle"
            fontSize="12"
            fill="#6b7280"
          >
            내신 · 수능 · 모의고사 / 준비 기간
          </text>

          <rect
            x="300"
            y="50"
            width="200"
            height="100"
            rx="10"
            fill="url(#cardGradient)"
            stroke="#d1d5db"
            filter="url(#softShadow)"
          />
          <text
            x="400"
            y="80"
            textAnchor="middle"
            fontSize="16"
            fontWeight="bold"
            fill="#374151"
          >
            대학별 전형 구조
          </text>
          <text
            x="400"
            y="100"
            textAnchor="middle"
            fontSize="12"
            fill="#6b7280"
          >
            1차 반영 비율 / 실기 영향력
          </text>

          <rect
            x="550"
            y="50"
            width="200"
            height="100"
            rx="10"
            fill="url(#cardGradient)"
            stroke="#d1d5db"
            filter="url(#softShadow)"
          />
          <text
            x="650"
            y="80"
            textAnchor="middle"
            fontSize="16"
            fontWeight="bold"
            fill="#374151"
          >
            실기 커버 범위
          </text>
          <text
            x="650"
            y="100"
            textAnchor="middle"
            fontSize="12"
            fill="#6b7280"
          >
            실기 상승 여지 / 시간 대비 효율
          </text>

          <rect
            x="800"
            y="50"
            width="200"
            height="100"
            rx="10"
            fill="url(#cardGradient)"
            stroke="#d1d5db"
            filter="url(#softShadow)"
          />
          <text
            x="900"
            y="80"
            textAnchor="middle"
            fontSize="16"
            fontWeight="bold"
            fill="#374151"
          >
            최종 합격 전략
          </text>
          <text
            x="900"
            y="100"
            textAnchor="middle"
            fontSize="12"
            fill="#6b7280"
          >
            학과 우선 / 실기 병행 / 전략적 포기
          </text>
        </g>

        {/* Arrows */}
        <line
          x1="250"
          y1="100"
          x2="300"
          y2="100"
          stroke="#6b7280"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
        <line
          x1="500"
          y1="100"
          x2="550"
          y2="100"
          stroke="#6b7280"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
        <line
          x1="750"
          y1="100"
          x2="800"
          y2="100"
          stroke="#6b7280"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
      </svg>

      {/* Mobile Layout */}
      <svg
        className="md:hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 1000"
        width="100%"
        height="auto"
      >
        <defs>
          <linearGradient id="cardGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#f9fafb" />
            <stop offset="100%" stopColor="#e5e7eb" />
          </linearGradient>
          <marker
            id="arrow"
            markerWidth="10"
            markerHeight="10"
            refX="5"
            refY="5"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 Z" fill="#6b7280" />
          </marker>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="4"
              floodColor="#000"
              floodOpacity="0.1"
            />
          </filter>
        </defs>

        {/* Cards */}
        <g>
          <rect
            x="50"
            y="50"
            width="200"
            height="100"
            rx="10"
            fill="url(#cardGradient)"
            stroke="#d1d5db"
            filter="url(#softShadow)"
          />
          <text
            x="150"
            y="80"
            textAnchor="middle"
            fontSize="16"
            fontWeight="bold"
            fill="#374151"
          >
            현재 성적 / 상황
          </text>
          <text
            x="150"
            y="100"
            textAnchor="middle"
            fontSize="12"
            fill="#6b7280"
          >
            내신 · 수능 · 모의고사 / 준비 기간
          </text>

          <rect
            x="50"
            y="200"
            width="200"
            height="100"
            rx="10"
            fill="url(#cardGradient)"
            stroke="#d1d5db"
            filter="url(#softShadow)"
          />
          <text
            x="150"
            y="230"
            textAnchor="middle"
            fontSize="16"
            fontWeight="bold"
            fill="#374151"
          >
            대학별 전형 구조
          </text>
          <text
            x="150"
            y="250"
            textAnchor="middle"
            fontSize="12"
            fill="#6b7280"
          >
            1차 반영 비율 / 실기 영향력
          </text>

          <rect
            x="50"
            y="350"
            width="200"
            height="100"
            rx="10"
            fill="url(#cardGradient)"
            stroke="#d1d5db"
            filter="url(#softShadow)"
          />
          <text
            x="150"
            y="380"
            textAnchor="middle"
            fontSize="16"
            fontWeight="bold"
            fill="#374151"
          >
            실기 커버 범위
          </text>
          <text
            x="150"
            y="400"
            textAnchor="middle"
            fontSize="12"
            fill="#6b7280"
          >
            실기 상승 여지 / 시간 대비 효율
          </text>

          <rect
            x="50"
            y="500"
            width="200"
            height="100"
            rx="10"
            fill="url(#cardGradient)"
            stroke="#d1d5db"
            filter="url(#softShadow)"
          />
          <text
            x="150"
            y="530"
            textAnchor="middle"
            fontSize="16"
            fontWeight="bold"
            fill="#374151"
          >
            최종 합격 전략
          </text>
          <text
            x="150"
            y="550"
            textAnchor="middle"
            fontSize="12"
            fill="#6b7280"
          >
            학과 우선 / 실기 병행 / 전략적 포기
          </text>
        </g>

        {/* Arrows */}
        <line
          x1="150"
          y1="150"
          x2="150"
          y2="200"
          stroke="#6b7280"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
        <line
          x1="150"
          y1="300"
          x2="150"
          y2="350"
          stroke="#6b7280"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
        <line
          x1="150"
          y1="450"
          x2="150"
          y2="500"
          stroke="#6b7280"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
      </svg>
    </div>
  );
};

export default DiagramStrategyFlow;
