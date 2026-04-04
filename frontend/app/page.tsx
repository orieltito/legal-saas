'use client';

import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [clients, setClients] = useState([]);

useEffect(() => {
  const token = localStorage.getItem("token");

  fetch('https://legal-saas-production-8e02.up.railway.app/clients', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log("RESPOSTA API:", data);

      if (Array.isArray(data)) {
        setClients(data);
      } else {
        console.error("Erro API:", data);
        setClients([]);
      }
    })
    .catch(err => console.error("Erro fetch:", err));
}, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Clientes</h1>

      {Array.isArray(clients) && clients.map((c: any) => (
  <div key={c.id} className="p-4 border rounded mt-2">
    {c.name}
  </div>
))}
    </div>
  );
}