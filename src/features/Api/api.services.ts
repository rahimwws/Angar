import axios from "axios"

class ApiServices {
    private URL = "https://angar.ussat.tm/jsonapi"

    async getRecommended(){
        return axios.get(`${this.URL}/product?filter[f_catid]=134&page[limit]=10&include=text,media,price,stock,catalog`)
    }
    async getNew(){
        return axios.get(`${this.URL}/product?sort=-ctime&page[limit]=8&include=text,media,price,stock,catalog`)
    }
    async getSale(){
        return axios.get(`${this.URL}/product?filter[f_catid]=134&filter[f_listtype]=promotion&page[limit]=8&include=text,media,price,stock,catalog`)
    }
    async getCatalog(){
        return axios.get(`${this.URL}/catalog?id=2&include=catalog,text,media&locale=ru`)
    }
    
}


export default new ApiServices