// "use client"

// import axios from "axios"
// import { useQuery } from "react-query"

// export const {} = useQuery({
//   queryKey:["HomeProducts"],
//   queryFn:async ()=>{
//     const {data} = await axios.get("https://angar.ussat.tm/jsonapi/product?locale=ru&include=text,media,attribute") 
//     // return data
//     console.log(data)

//   }
// })
// export async function getData() {
//     const res = await fetch('https://angar.ussat.tm/jsonapi/product?locale=ru&include=text,media,attribute')
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.

//     if (!res.ok) {
//         // This will activate the closest `error.js` Error Boundary
//         throw new Error('Failed to fetch data')
//     }
    
//     return res.json()
// }

