export async function getProducts() {
    const res = await fetch(`https://chimgee.vercel.app/api/products`, { cache: "no-store" });
    if (!res.ok) return [];
    return res.json();
  }