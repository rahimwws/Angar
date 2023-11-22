export const ProductSortApi = (item: any, included: any) => {
    let price = 0
    let priceId = item?.relationships["price"].data[0]["id"]

    let img = 0
    let idNumberImg = item?.relationships["media"].data[0]["id"]


    let catalog = 0
    let initialId = 1
    for (const id of item?.relationships["catalog"].data) {
        const idCheck = 240
        if (id.id < idCheck) {
            if (id.id >= initialId) {
                initialId = id.id
            }
        }
    }
    // console.log(initialId)


    included.map((item: any) => {
        if (item.id === initialId ||item.type === "text") {            
            let textId = item?.relationships?.text.data[0].id
            // console.log(item.relationships.text.data[0].id);
            if (item.id == item.relationships?.text.data[0].id) {
                // console.log("yy");
                
                catalog = item.attributes["text.content"]
                
            }
        }
        
        if (item.id === priceId) {
            price = item.attributes["price.value"]
        }
        if (item.id === idNumberImg) {
            img = item.attributes["media.url"]
        }
    })
    return [img, price, catalog]
}