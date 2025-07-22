'use client'; // این صفحه سمت کلاینت اجرا می‌شود

import { useEffect, useState } from 'react';
import './styles.css'; // وارد کردن استایل‌ها
import UserChart from './components/UserChart'; // کامپوننت نمودار

export default function Home() {
  // تعریف state برای کاربران
  const [users, setUsers] = useState([]);
  // تعریف state برای نمایش حالت loading
  const [loading, setLoading] = useState(true);

  // گرفتن داده‌ها از API وقتی کامپوننت لود می‌شود
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // درخواست به API
      .then(res => res.json()) // تبدیل پاسخ به JSON
      .then(data => {
        setUsers(data); // ذخیره داده‌ها در state
        setLoading(false); // پایان loading
      })
      .catch(() => setLoading(false)); // در صورت خطا هم loading را قطع کن
  }, []);

  // نمایش loading تا وقتی داده‌ها آماده نشده‌اند
  if (loading) {
    return (
      <main className="loading">
        <p>در حال بارگذاری...</p>
      </main>
    );
  }

  // نمایش جدول و نمودار وقتی داده‌ها آماده شدند
  return (
    <main>
      <h1>لیست کاربران</h1>

      {/* جدول ساده با نام و ایمیل کاربران */}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>نام</th>
              <th>ایمیل</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>نمودار کاربران</h2>

      {/* نمودار کاربران */}
      <div className="chart-wrapper">
        <UserChart users={users} />
      </div>
    </main>
  );
}
