import React from "react";

interface KimochiMeterProps {
  averageScore: null | number;
}

/**
 * KimochiMeterコンポーネント、平均スコアを受け取り、それに応じてメーターを描画。
 * @param averageScore 平均スコア
 */
const KimochiMeter: React.FC<KimochiMeterProps> = ({ averageScore }) => {
  const meterWidth = 200;
  const meterHeight = 20;
  const borderRadius = 10;
  const backgroundColor = "#eee";
  let valuePercentage = 0;
  if (averageScore !== null) {
    valuePercentage = averageScore * 10;
  }

  let foregroundColor;
  if (averageScore && averageScore >= 5) {
    foregroundColor = "#90ee90";
  } else {
    foregroundColor = "#ffb6c1";
  }

  return (
    <div
      style={{
        width: meterWidth,
        height: meterHeight,
        borderRadius,
        backgroundColor,
      }}
    >
      <div
        style={{
          width: `${valuePercentage}%`,
          height: meterHeight,
          borderRadius,
          backgroundColor: foregroundColor,
          transition: "width 0.5s ease-in-out",
        }}
      />
    </div>
  );
};

export default KimochiMeter;
