'use client'; // این کامپوننت فقط در کلاینت اجرا می‌شود

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

// ثبت پلاگین‌های مورد نیاز برای نمودار بار
ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function UserChart({ users }) {
  // آماده‌سازی داده‌ها برای نمودار
  const data = {
    labels: users.map(user => user.name), // نام کاربران روی محور X
    datasets: [
      {
        label: 'تعداد', // عنوان دیتاست
        data: users.map(() => 1), // هر کاربر یک واحد در محور Y
        backgroundColor: '#4f9df7', // رنگ نمودار
        borderRadius: 5, // گردی گوشه‌های بارها
      },
    ],
  };

  // تنظیمات نمودار برای واکنش‌گرایی و ظاهر بهتر
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1, // هر مرحله یک واحد باشد
        },
      },
    },
    plugins: {
      legend: { display: false }, // مخفی کردن راهنمای نمودار
    },
  };

  return <Bar data={data} options={options} />;
}
