import dynamic from 'next/dynamic';

// چون chartjs فقط سمت کلاینت کار می‌کنه باید دینامیک لود کنیم
const UserChart = dynamic(() => import('./components/UserChart'), { ssr: false });

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export default async function Home() {
  const users = await getUsers();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>لیست کاربران</h1>

      <table border="1" cellPadding="10" cellSpacing="0" style={{ marginTop: "1rem", borderCollapse: "collapse" }}>
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

      <h2 style={{ marginTop: "3rem" }}>نمودار تعداد کاربران</h2>
      <UserChart users={users} />
    </main>
  );
}
