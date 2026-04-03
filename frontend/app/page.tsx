'use client';

import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('https://SUA-API/clients')
      .then(res => res.json())
      .then(setClients);
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Clientes</h1>

      {clients.map((c: any) => (
        <div key={c.id} className="p-4 border rounded mt-2">
          {c.name}
        </div>
      ))}
    </div>
  );
}