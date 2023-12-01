export async function getCatalog() {
  const res = await fetch('https://angar.ussat.tm/jsonapi/catalog?include=catalog,text,media&locale=ru')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

