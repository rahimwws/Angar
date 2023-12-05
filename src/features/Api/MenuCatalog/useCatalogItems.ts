import { useCatalog } from "./useCatalog";

export const useCatalogItems = () => {
    const { data } = useCatalog()

    let HomeCatalogId = []
    let HomeCatalogText = []    

    let SecondCatalogId = []
    let SecondCatalogText = []

    let ThirdCatalogId = []
    let ThirdCatalogText = []

    if (data) {

        for (const catalog of data?.data.relationships["catalog"].data) {
            HomeCatalogId.push(Number(catalog.id))
        }

        for (const item of data.included) {
            for (const catalog of HomeCatalogId) {
                if (item.id == catalog) {
                    HomeCatalogText.push(item.attributes["catalog.label"])
                    if (item.relationships) {

                        if (Object.keys(item.relationships).includes("catalog")) {
                            SecondCatalogId.push(...item.relationships['catalog'].data)
                            
                        } else {
                            // []
                        }
                    }



                }
            }

            
            for (const catalog of SecondCatalogId) {
                if (item.id == catalog.id)  {
                    SecondCatalogText.push(item.attributes["catalog.label"])
                    if (item.relationships) {
    
                        if (Object.keys(item.relationships).includes("catalog")) {
                            ThirdCatalogId.push(...item.relationships['catalog'].data)
                        }
    
                    }
                }
            }
            for (const catalog of ThirdCatalogId){
                if(item.id == catalog.id){
                    ThirdCatalogText.push(item.attributes["catalog.label"])
                }
            }
        }
    }

    return [HomeCatalogText,SecondCatalogText,ThirdCatalogText]
}