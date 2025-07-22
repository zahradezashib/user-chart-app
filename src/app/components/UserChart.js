'use client';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function UserChart({ users }) {
  const data = {
    labels: users.map(user => user.name),
    datasets: [
      {
        label: 'تعداد کاربران',
        data: users.map(() => 1), // همه کاربرا مقدار ۱ دارن
        backgroundColor: 'rgba(75,192,192,0.6)',
      }
    ]
  };

  const options = {
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: { beginAtZero: true, precision: 0 }
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px", marginTop: "2rem" }}>
      <Bar data={data} options={options} />
    </div>
  );
}
