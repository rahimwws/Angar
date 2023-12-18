import axios from "axios"

class ApiServices {
    private URL = "https://angar.ussat.tm/jsonapi"

    async getRecommended() {
        return axios.get(`${this.URL}/product?filter[f_catid]=134&page[limit]=10&include=text,media,price,stock,catalog`)
    }
    async getNew() {
        return axios.get(`${this.URL}/product?sort=-ctime&page[limit]=8&include=text,media,price,stock,catalog`)
    }
    async getSale() {
        return axios.get(`${this.URL}/product?filter[f_catid]=134&filter[f_listtype]=promotion&page[limit]=8&include=text,media,price,stock,catalog`)
    }
    async getCatalog() {
        return axios.get(`${this.URL}/catalog?id=2&include=catalog,text,media&locale=ru`)
    }
    async getDetailProduct(id: number) {
        return axios.get(`${this.URL}/product?id=${id}&locale=ru&include=media,price,text,attribute,stock`)
    }
    async getCatalogProduct(id: any, url: any) {
        if (url == "") {
            
            let data = await axios.get(`${this.URL}/product?filter[f_catid]=${id}&include=text,media,price,stock,catalog`)
            return data.data
        } else {
            let data = await axios.get(`${url}`)
            return data.data
        }
    }

    async getLastCatalog(id: number) {
        return axios.get(`${this.URL}/catalog?id=${id}&include=catalog,text&locale=ru`)
    }
}


export default new ApiServices