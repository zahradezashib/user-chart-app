async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export default async function Home() {
  const users = await getUsers();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>لیست کاربران</h1>
      <table border="1" cellPadding="10" style={{ marginTop: "1rem" }}>
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
    </main>
  );
}
