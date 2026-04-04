export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-10">Legal SaaS</h1>

      <nav className="space-y-4">
        <a href="/dashboard">Dashboard</a>
        <a href="/clients">Clientes</a>
      </nav>
    </div>
  );
}