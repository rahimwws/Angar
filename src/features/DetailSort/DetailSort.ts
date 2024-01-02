
export const DetailSort = (data: any) => {
    const dataID = data.data
    const included = data.included
    const images = []
    let extraImageId;
    let extraImageSecondId;


    const priceId = dataID?.relationships["price"].data[0]["id"]
    const MainImgId = dataID?.relationships["media"].data
    const textId = dataID?.relationships["text"].data[0]?.id
    const rentInfoId = dataID?.relationships["text"].data[1]?.id
    const rentId = dataID?.relationships["price"].data[1]?.id
    let idStock = dataID?.relationships["stock"]?.data[0]["id"]
    let stock = 0
    let price = 0
    let sale = 0
    let description = ""
    let rent = ""
    let rentInfo = ""
    let isMonthRent = false
    let name = ""
    const text = dataID?.attributes["product.label"]

    // let idThirdImg = dataID?.relationships["media"].data[2]["id"]
    if (dataID?.relationships["media"].data.length > 1) {
        extraImageId = dataID?.relationships["media"].data[1]["id"]
        if (dataID?.relationships["media"].data.length > 2) {
            extraImageSecondId = dataID?.relationships["media"].data[2]["id"]
        }
    }
    for (const item of included) {
        for (const img of MainImgId) {
            if (item.id === img.id) {
                images.push(item.attributes["media.url"])
            }
        }
        if (item.id == idStock) {
            stock = item.attributes["stock.stocklevel"]

        }
        if (item.attributes["text.type"] == "rent-time-naming") {
            isMonthRent = true
        }
        if (item.id === rentInfoId) {
            rentInfo = item.attributes["text.content"]
        }
        if (item.id == rentId) {
            rent = item.attributes["price.value"]
        }
        if (item.id === priceId) {
            price = item.attributes["price.value"]
            sale = item.attributes["price.rebate"]
        }

        if (item.id === textId && item.attributes["text.type"] == "long") {
            description = item.attributes["text.content"]
        }
        if(item.id ===textId && item.attributes["text.type"] == "name" ){
            name= item.attributes["text.content"]
        }
    }

    return [price, sale, images, text, description, rent, rentInfo, isMonthRent, stock,name]
}