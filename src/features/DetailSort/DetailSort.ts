export const DetailSort = (data: any) => {
    const dataID = data.data
    const included = data.included
    const priceId = dataID?.relationships["price"].data[0]["id"]

    let price = 0
    let sale = 0
    let img = ""
    let text= ""

    const MainImgId = dataID?.relationships["media"].data[0]["id"]

    const textId = dataID?.relationships["text"].data[0]["id"]

    // let idSecondImg = dataID?.relationships["media"].data[1]["id"]
    // let idThirdImg = dataID?.relationships["media"].data[2]["id"]

    for (const item of included) {
        if (item.id === priceId) {
            price = item.attributes["price.value"]
            sale = item.attributes["price.rebate"]
        }
        if (item.id === MainImgId) {
            img = item.attributes["media.url"]
        }
        if (item.id === textId && item.attributes["type"] != "long") {
            text= item.attributes["text.label"]
        }
    }
    return [price, sale, img,text]
}