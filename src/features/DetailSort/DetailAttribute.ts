import { attributes } from "@/service/Data/attributes"

export const DetailAttribute = (data:any):Array<Object>=>{
    const DATA_ATTRIBUTE = attributes
    const dataId = data.data
    const included = data.included
    let attributeObject:{id:any,data:any}
    const id = dataId?.relationships["attribute"].data
    
    const AllAttributes = []
    
    for (const item of included) {

        for (const attribute of id) {
            if(item.id == attribute.id && item.type == "attribute"){
                let attributeItem = DATA_ATTRIBUTE[item.attributes["attribute.type"]];
                attributeObject = {
                    id:attributeItem,
                    data:item.attributes["attribute.label"]
                }
                
                AllAttributes.push(attributeObject)
            }
        }
    }

    return AllAttributes

}