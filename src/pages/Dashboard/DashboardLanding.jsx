// pages/Dashboard/DashboardLanding.jsx
import React from "react";
import { FaUtensils, FaUserCheck, FaClipboardList } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardLanding = () => {
  // Example chart data
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Food Requests",
        data: [12, 19, 8, 15, 22, 30, 25],
        fill: false,
        borderColor: "#f59e0b",
        backgroundColor: "#fbbf24",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Food Requests" },
    },
  };

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">
          <div className="bg-primary/20 text-primary p-4 rounded-full">
            <FaUtensils size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Foods</p>
            <h2 className="text-xl font-bold">120</h2>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">
          <div className="bg-green-200 text-green-600 p-4 rounded-full">
            <FaClipboardList size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Requests</p>
            <h2 className="text-xl font-bold">75</h2>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4">
          <div className="bg-blue-200 text-blue-600 p-4 rounded-full">
            <FaUserCheck size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Users</p>
            <h2 className="text-xl font-bold">45</h2>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white shadow-lg rounded-xl p-6">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default DashboardLanding;
