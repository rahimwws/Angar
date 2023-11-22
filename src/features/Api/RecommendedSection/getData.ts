export async function getData() {
    const res = await fetch('https://angar.ussat.tm/jsonapi/product?page[offset]=0&page[limit]=10&include=media,price,catalog,text')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }