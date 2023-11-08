//search categories 
export const searchCategories = (event,setSearchInput,categories,setResult) => {
    setSearchInput(event.target.value);
    const query=event.target.value;
    const filtered = categories.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
    );
    setResult(filtered)
}
// search all products by given query
export const searchProducts=(query,products)=>{
    const filtered=products.filter(product=>{
        const result=product.title.includes(query)||product.description.includes(query)||product.category.includes(query);
       return result;
    })
    return filtered;
}
