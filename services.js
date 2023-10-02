import axios from "axios"

export const getSingleProduct = async (id) => {
    try {
        const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
        const data = await result.data;
        return data
    } catch (error) {
        return error
    }
}