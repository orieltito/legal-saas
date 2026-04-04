'use client';

import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { apiFetch } from '../../services/api';

export default function Dashboard() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    apiFetch('/clients')
      .then(res => res.json())
      .then(setClients);
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="p-10 w-full bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            Clientes: {clients.length}
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          {clients.map((c: any) => (
            <div key={c.id} className="border-b py-2">
              {c.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}