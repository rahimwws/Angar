import { useCatalog } from "./useCatalog";

export const useCatalogItems = () => {
    const { data } = useCatalog()

    let TotalItem: { id: string | number, data: string, children: Array<any>, media: any }
    let TotalItemText = []
    let Total = []
    let FirstName = ""
    let HomeCatalogId = []
    let HomeCatalogText = []
    let TotalItems = []
    const returningItem = []
    let media = ''
    if (data) {

        for (const catalog of data?.data.relationships["catalog"].data) {
            HomeCatalogId.push(Number(catalog.id))
        }

        for (const item of data.included) {
            for (const catalog of HomeCatalogId) {
                if (item.id == catalog) {
                    FirstName = item.attributes["catalog.label"]                    
                    if (item.relationships) {

                        // media = item.attributes["media.url"]
                        // console.log(media);
                        
                        if (Object.keys(item.relationships).includes("catalog")) {
                            TotalItem = {
                                id: catalog,
                                data: FirstName,
                                children: [...item.relationships['catalog'].data],
                                media:media
                            }

                        } else {
                            TotalItem = {
                                id: catalog,
                                data: FirstName,
                                children: [],
                                media: media
                            }
                        }
                        Total.push(TotalItem)
                    }
                }
            }

            const text: Array<any> = []; // Move the text array inside the loop
            for (const catalog of Total) {
                if (catalog.children.length) {
                    for (const childrenID of catalog.children) {
                        // Assuming 'item' is defined somewhere outside this loop
                        if (item.id == childrenID.id) {
                            TotalItem = {
                                id: childrenID.id,
                                data: item.attributes["catalog.label"],
                                children: [],
                                media: childrenID.media
                            }
                            text.push(TotalItem);

                            // if (item.relationships) {
                            //     if(Object.keys(item.relationships).includes("catalog")){

                            //         TotalItem = {
                            //             id:childrenID.id,
                            //             data: item.attributes["catalog.label"],
                            //             children: [...item.relationships['catalog'].data]
                            //         }
                            //     } else {

                            //         TotalItem = {
                            //             id:childrenID.id,
                            //             data: item.attributes["catalog.label"],
                            //             children: []
                            //         }

                            //     }
                            //     text.push(...text,TotalItem);


                            // }

                        }
                    }

                }
                if (text) { // Check if there are items in the 'text' array

                    const existingTotalItem = TotalItemText.find((t) => t.id === catalog.id);

                    if (existingTotalItem) {
                        // Add the text to the existing TotalItem
                        existingTotalItem.children.push(...text);
                    } else {
                        // Create a new TotalItem
                        const newTotalItem = {
                            data: catalog.data,
                            id: catalog.id,
                            children: text,
                        };
                        TotalItemText.push(newTotalItem)
                    }
                }
            }
            // let itemsText = []
            // let text = []
            // for (const third of TotalItemText) {
            //     for (const catalog of third.children) {
            //         for (let iterator of catalog.children) {
            //             if (item.id == iterator.id) {
            //                 itemsText.push(item.attributes["catalog.label"])
            //             }
            //             // if(typeof iterator === "object"){
            //             //     console.log('check');                            
            //             // }
            //         }
            //         if (itemsText.length > 0 && !catalog.children.includes(Object)) {
            //             catalog.children.push(...itemsText)
            //         } else {
            //         }
            //     }
            //     // for (const catalog of third.children) {
            //     //     catalog.children.filter((item) => typeof item === "string")
            //     // }
            // }
        }

    }
    returningItem.push(Total, TotalItemText)
    return returningItem
}


