'use client';

import React, { useEffect, useState } from 'react';
import type React as ReactType from 'react';
import Sidebar from '../../components/Sidebar';

interface Client {
  id: string;
  name: string;
}

export default function Dashboard(): React.ReactElement {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    fetch('https://legal-saas-production-8e02.up.railway.app/clients', {
      headers: {
        Authorization: `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('token') : ''}`
      }
    })
      .then(res => res.json())
      .then(setClients);
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="p-10 w-full">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-white shadow rounded">
            Total Clientes: {clients.length}
          </div>
        </div>

        <div className="bg-white shadow rounded p-4">
          {clients.map((c: Client) => (
            <div key={c.id} className="border-b py-2">
              {c.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}