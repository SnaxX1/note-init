const BASE = '/api/notes';

async function request(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || 'Erreur réseau');
  }
  return res.status === 204 ? null : res.json();
}

export const api = {
  getNotes: () => request(BASE),
  createNote: (note) =>
    request(BASE, { method: 'POST', body: JSON.stringify(note) }),
};
