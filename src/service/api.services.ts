import axios from "axios"
import { ANGAR_URL } from "./Urls/angar_url"

class ApiServices {
    private URL = ANGAR_URL

    async getRecommended() {
        return axios.get(`${this.URL}/product?filter[f_catid]=134&page[limit]=10&include=text,media,price,stock,catalog&locale=ru`)
    }
    async getNew() {
        return axios.get(`${this.URL}/product?sort=-ctime&page[limit]=8&include=text,media,price,stock,catalog&locale=ru`)
    }
    async getSale() {
        return axios.get(`${this.URL}/product?filter[f_catid]=134&filter[f_listtype]=promotion&page[limit]=8&include=text,media,price,stock,catalog&locale=ru`)
    }
    async getCatalog() {
        return axios.get(`${this.URL}/catalog?id=2&include=catalog,text,media&locale=ru`)
    }
    async getDetailProduct(id: number) {
        return axios.get(`${this.URL}/product?id=${id}&include=media,price,text,attribute,stock&locale=ru`)
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
    getSearch(name: any) {
        let  response = axios.get(`${this.URL}/product?filter[%7E%3D][product.label]~=${name}&locale=ru`)
    }
}


const apiServices = new ApiServices();
export default apiServices;
