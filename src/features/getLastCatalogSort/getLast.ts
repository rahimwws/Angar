export const getLast = (data: any) => {
    let text = []
    let id = []
    if (data) {

        const dataID = data?.data
        const included = data?.included
        try {

            id = dataID?.relationships["catalog"].data
        } catch {
            id = []
        }

        for (const item of included) {
            for (const catalog of id) {

                if (item.id === catalog.id) {
                    let Item = {
                        id: catalog.id,
                        data: item.attributes["catalog.label"]
                    }
                    text.push(Item)
                }
            }
        }
    }
    return text
}