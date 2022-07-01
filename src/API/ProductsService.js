import axios from "axios";

export default class ProductsService {
    static async getProducts(category) {
        const response = await axios.get(`https://628f86d60e69410599de1f6f.mockapi.io/${category}`)
        return response.data
    }
}