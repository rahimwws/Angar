export const ProductSortApi = (item: any, included: any) => {

    let price = 0
    let priceId = item?.relationships["price"].data[0]["id"]

    let img = 0
    let idNumberImg = item?.relationships["media"].data[0]["id"]

    let stock = 0
    let idStock = item?.relationships["stock"].data[0]["id"]

    let catalog = 0
    let initialId = 1

    let sale = 0

    let link = item?.attributes["product.id"]
    
    
    for (const id of item?.relationships["catalog"].data) {
        const idCheck = 240
        if (id.id < idCheck) {
            if (id.id >= initialId) {
                initialId = id.id
            }
        }
    }


    included.map((item: any) => {
        if (item.id === initialId) {
            catalog = item.attributes["catalog.label"]
        }
        if (item.id == idStock) {
            stock = item.attributes["stock.stocklevel"]

        }
        if (item.id === priceId) {
            price = item.attributes["price.value"]
            sale = Number(item.attributes["price.rebate"])
        }
        if (item.id === idNumberImg) {
            img = item.attributes["media.url"]
        }
    })
    return [img, price, stock,catalog,sale,link]
}