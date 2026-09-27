const API_URL= "https://dummyjson.com/products" ;

export const fetchProducts = async ()=>{
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    return data;
}

