export async function getProducts() {
    const res = await fetch(`http://localhost:3000/api/products`, { cache: "no-store" });
    if (!res.ok) return [];
    return res.json();
  }