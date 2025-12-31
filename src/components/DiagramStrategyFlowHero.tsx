import React from "react";

const DiagramStrategyFlowHero: React.FC = () => {
  // Card
  const cardWidth = 900;
  const cardHeight = 450;
  const cardRadius = 30;

  // Typography
  const textTitleSize = 54;
  const textBodySize = 36;

  // Arrow
  const arrowThickness = 2;
  const arrowMarkerSize = 14;

  // Layout (✅ 여기만 조절하면 전체가 같이 움직임)
  const marginX = 180;
  const marginY = 140;
  const colGap = 260; // ✅ 상단/하단 좌우 카드 간격
  const rowGap = 240; // ✅ 위/아래 카드 간격

  // Derived positions
  const leftX = marginX;
  const rightX = marginX + cardWidth + colGap;
  const topY = marginY;
  const bottomY = marginY + cardHeight + rowGap;

  // Centers / edges
  const leftCenterX = leftX + cardWidth / 2;
  const rightCenterX = rightX + cardWidth / 2;

  const topCenterY = topY + cardHeight / 2;
  const bottomCenterY = bottomY + cardHeight / 2;

  const leftRightEdge = leftX + cardWidth;
  const rightLeftEdge = rightX;

  const topBottomEdge = topY + cardHeight;
  const bottomTopEdge = bottomY;

  // Padding so arrow doesn't touch cards
  const edgePad = 28;

  // ✅ viewBox는 “카드 배치 크기” 기반으로 자동 계산
  const viewW = marginX * 2 + cardWidth * 2 + colGap;
  const viewH = marginY * 2 + cardHeight * 2 + rowGap;

  // Text Y positions (card 안에서 비율로)
  const titleYTop = topY + cardHeight * 0.33;
  const body1YTop = topY + cardHeight * 0.5;
  const body2YTop = topY + cardHeight * 0.62;

  const titleYBot = bottomY + cardHeight * 0.33;
  const body1YBot = bottomY + cardHeight * 0.5;
  const body2YBot = bottomY + cardHeight * 0.62;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewW} ${viewH}`}
      width="100%"
      height="auto"
      role="img"
      aria-label="합격 전략 요약 다이어그램"
    >
      <defs>
        <linearGradient id="cardGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#f9fafb" />
          <stop offset="100%" stopColor="#e5e7eb" />
        </linearGradient>

        <marker
          id="arrow"
          markerWidth={arrowMarkerSize}
          markerHeight={arrowMarkerSize}
          refX={arrowMarkerSize * 0.9}
          refY={arrowMarkerSize / 2}
          orient="auto"
        >
          <path
            d={`M0,${arrowMarkerSize / 4} L${arrowMarkerSize},${
              arrowMarkerSize / 2
            } L0,${(arrowMarkerSize * 3) / 4} Z`}
            fill="#9CA3AF"
          />
        </marker>

        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="10"
            floodColor="#000"
            floodOpacity="0.12"
          />
        </filter>
      </defs>

      {/* =======================
          TOP LEFT (1) 현재 성적/위치
          ======================= */}
      <rect
        x={leftX}
        y={topY}
        width={cardWidth}
        height={cardHeight}
        rx={cardRadius}
        fill="url(#cardGradient)"
        stroke="#d1d5db"
        filter="url(#softShadow)"
      />
      <text
        x={leftCenterX}
        y={titleYTop}
        textAnchor="middle"
        fontSize={textTitleSize}
        fontWeight="bold"
        fill="#374151"
      >
        현재 성적 / 위치
      </text>
      <text
        x={leftCenterX}
        y={body1YTop}
        textAnchor="middle"
        fontSize={textBodySize}
        fill="#6b7280"
      >
        현재 수능 성적을 기준으로
      </text>
      <text
        x={leftCenterX}
        y={body2YTop}
        textAnchor="middle"
        fontSize={textBodySize}
        fontWeight="bold"
        fill="#6b7280"
      >
        최상위권 미대 지원 가능 여부를 먼저 판단합니다
      </text>
      <text
        x={leftCenterX}
        y={body2YTop + 56}
        textAnchor="middle"
        fontSize={textBodySize}
        fill="#6b7280"
      >
        막연한 기대가 아닌,
      </text>
      <text
        x={leftCenterX}
        y={body2YTop + 112}
        textAnchor="middle"
        fontSize={textBodySize}
        fontWeight="bold"
        fill="#6b7280"
      >
        현실적인 합격 위치부터 정확히 설정합니다
      </text>

      {/* =======================
          TOP RIGHT (2) 전형 구조
          ======================= */}
      <rect
        x={rightX}
        y={topY}
        width={cardWidth}
        height={cardHeight}
        rx={cardRadius}
        fill="url(#cardGradient)"
        stroke="#d1d5db"
        filter="url(#softShadow)"
      />
      <text
        x={rightCenterX}
        y={titleYTop}
        textAnchor="middle"
        fontSize={textTitleSize}
        fontWeight="bold"
        fill="#374151"
      >
        최상위권 미대 전형 구조
      </text>
      <text
        x={rightCenterX}
        y={body1YTop}
        textAnchor="middle"
        fontSize={textBodySize}
        fill="#6b7280"
      >
        최상위권 미대는
      </text>
      <text
        x={rightCenterX}
        y={body2YTop}
        textAnchor="middle"
        fontSize={textBodySize}
        fontWeight="bold"
        fill="#6b7280"
      >
        1차 전형에서 합격 여부가 사실상 결정됩니다
      </text>
      <text
        x={rightCenterX}
        y={body2YTop + 56}
        textAnchor="middle"
        fontSize={textBodySize}
        fill="#6b7280"
      >
        이 단계에서
      </text>
      <text
        x={rightCenterX}
        y={body2YTop + 112}
        textAnchor="middle"
        fontSize={textBodySize}
        fontWeight="bold"
        fill="#6b7280"
      >
        수능·학과 성적이 가장 중요한 기준이 됩니다
      </text>

      {/* =======================
          BOTTOM LEFT (4) 개인별 맞춤
          ======================= */}
      <rect
        x={leftX}
        y={bottomY}
        width={cardWidth}
        height={cardHeight}
        rx={cardRadius}
        fill="url(#cardGradient)"
        stroke="#d1d5db"
        filter="url(#softShadow)"
      />
      <text
        x={leftCenterX}
        y={titleYBot}
        textAnchor="middle"
        fontSize={textTitleSize}
        fontWeight="bold"
        fill="#374151"
      >
        개인별 맞춤 합격 전략
      </text>
      <text
        x={leftCenterX}
        y={body1YBot}
        textAnchor="middle"
        fontSize={textBodySize}
        fill="#6b7280"
      >
        학생의 현재 성적과 목표 대학에 따라
      </text>
      <text
        x={leftCenterX}
        y={body2YBot}
        textAnchor="middle"
        fontSize={textBodySize}
        fontWeight="bold"
        fill="#6b7280"
      >
        합격 전략은 모두 다르게 설계됩니다
      </text>
      <text
        x={leftCenterX}
        y={body2YBot + 56}
        textAnchor="middle"
        fontSize={textBodySize}
        fill="#6b7280"
      >
        수업 시수와 실기 비중 역시
      </text>
      <text
        x={leftCenterX}
        y={body2YBot + 112}
        textAnchor="middle"
        fontSize={textBodySize}
        fontWeight="bold"
        fill="#6b7280"
      >
        개인별로 조정합니다
      </text>

      {/* =======================
          BOTTOM RIGHT (3) 수능 우선 설계
          ======================= */}
      <rect
        x={rightX}
        y={bottomY}
        width={cardWidth}
        height={cardHeight}
        rx={cardRadius}
        fill="url(#cardGradient)"
        stroke="#d1d5db"
        filter="url(#softShadow)"
      />
      <text
        x={rightCenterX}
        y={titleYBot}
        textAnchor="middle"
        fontSize={textTitleSize}
        fontWeight="bold"
        fill="#374151"
      >
        수능 우선 시간 설계
      </text>
      <text
        x={rightCenterX}
        y={body1YBot}
        textAnchor="middle"
        fontSize={textBodySize}
        fill="#6b7280"
      >
        주중에는
      </text>
      <text
        x={rightCenterX}
        y={body2YBot}
        textAnchor="middle"
        fontSize={textBodySize}
        fontWeight="bold"
        fill="#6b7280"
      >
        수능·학과 성적을 끌어올리는 데 집중합니다
      </text>
      <text
        x={rightCenterX}
        y={body2YBot + 56}
        textAnchor="middle"
        fontSize={textBodySize}
        fill="#6b7280"
      >
        주말과 방학을 활용해
      </text>
      <text
        x={rightCenterX}
        y={body2YBot + 112}
        textAnchor="middle"
        fontSize={textBodySize}
        fontWeight="bold"
        fill="#6b7280"
      >
        실기는 효율적으로 준비합니다
      </text>

      {/* Arrows: 1 -> 2, 2 -> 3, 3 -> 4 (so it looks like 4 <- 3) */}

      {/* 1 -> 2 (top row, left to right) */}
      <line
        x1={leftRightEdge + edgePad}
        y1={topCenterY}
        x2={rightLeftEdge - edgePad}
        y2={topCenterY}
        stroke="#9CA3AF"
        strokeWidth={arrowThickness}
        markerEnd="url(#arrow)"
      />

      {/* 2 -> 3 (right column, down) */}
      <line
        x1={rightCenterX}
        y1={topBottomEdge + edgePad}
        x2={rightCenterX}
        y2={bottomTopEdge - edgePad}
        stroke="#9CA3AF"
        strokeWidth={arrowThickness}
        markerEnd="url(#arrow)"
      />

      {/* 3 -> 4 (bottom row, right to left) === shows as 4 <- 3 */}
      <line
        x1={rightLeftEdge - edgePad}
        y1={bottomCenterY}
        x2={leftRightEdge + edgePad}
        y2={bottomCenterY}
        stroke="#9CA3AF"
        strokeWidth={arrowThickness}
        markerEnd="url(#arrow)"
      />
    </svg>
  );
};

export default DiagramStrategyFlowHero;
