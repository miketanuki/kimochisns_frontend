import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

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

  const options: ApexOptions = useMemo(() => ({
    chart: {
      type: "donut",
    },
    labels: ["Category 1", "Category 2", "Category 3"],
    colors: ["#FFB6C1", "#FFD700", "#90EE90"],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
  }), []);

  return (
    <div style={{ display: 'inline-block',width:"80px" }}>
      <ReactApexChart 
        options={options} 
        series={sentimentalData} 
        type="donut" 
      />
    </div>
  );
};

export default KimochiDonut;
