const API_URL= "https://dummyjson.com/products" ;

const fetchProducts = async ()=>{
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}

export default fetchProducts;