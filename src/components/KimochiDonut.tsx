import React, { useEffect, useRef, useMemo, useState } from "react";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface Post {
  id: number;
  content: string;
  sentiment_score: number;
}

interface Props {
  posts: Post[];
}

const KimochiDonut: React.FC<Props> = ({ posts }) => {
  const sentimentalData = useMemo(() => {
    let count: number[] = [0, 0, 0];
    posts.forEach((post) => {
      if (post.sentiment_score < 3) {
        count[0]++;
      } else if (post.sentiment_score >= 3 && post.sentiment_score < 5) {
        count[1]++;
      } else {
        count[2]++;
      }
    });
    return count;
  }, [posts]);

  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, {
        chart: {
          type: "donut",
        },
        series: sentimentalData,
        labels: ["Category 1", "Category 2", "Category 3"],
        colors: ["#FFB6C1", "#FFD700", "#90EE90"],
      });
      chart.render();
      // チャートを更新する
      chart.updateSeries(sentimentalData);
    }
  }, [sentimentalData]);

  return <div ref={chartRef} />;
};

export default KimochiDonut;
