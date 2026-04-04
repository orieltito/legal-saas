'use client';

import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { apiFetch } from '../../services/api';

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState('');

  async function load() {
    const res = await apiFetch('/clients');
    const data = await res.json();
    setClients(data);
  }

  async function create() {
    await apiFetch('/clients', {
      method: 'POST',
      body: JSON.stringify({ name }),
    });

    setName('');
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="p-10 w-full">
        <h1 className="text-xl font-bold mb-4">Clientes</h1>

        <div className="mb-4">
          <input
            className="border p-2 mr-2"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={create} className="bg-black text-white px-4 py-2">
            Criar
          </button>
        </div>

        {clients.map((c: any) => (
          <div key={c.id} className="border p-2 mb-2">
            {c.name}
          </div>
        ))}
      </div>
    </div>
  );
}