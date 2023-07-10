import React from "react";

interface KimochiMeterProps {
  averageScore: number;
}

const KimochiMeter: React.FC<KimochiMeterProps> = ({ averageScore }) => {
    const meterWidth = 200;
    const meterHeight = 20;
    const borderRadius = 10;
    const backgroundColor = "#eee";
    const valuePercentage = averageScore * 10;

    let foregroundColor;
    if (averageScore >= 5) {
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
