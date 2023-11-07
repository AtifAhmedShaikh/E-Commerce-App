// filter the products by active filter category 
const filterProductsByCategories=(products,activeFilters)=>{
    if(activeFilters.length===0)return products;
    const filtered=activeFilters.map(category=>{
        const items=products.filter(item=>item.category===category);
        return items
    });
    return filtered.flat(Infinity);
}
//sort products by price order hight to low or low to high
const sortByPriceOrder=(products,order)=>{
    if(order==="highToLow"){
        const sorted=products.sort((p2,p1)=>{
            return p1.price-p2.price
        });
        return sorted;
    }else if(order==="lowToHigh"){
        const sorted=products.sort((p1,p2)=>{
            return p1.price-p2.price
        });
        return sorted
    }
}
//filter the products by given price range
const filterProductsByPriceRange=(products,startingPrice,endingPrice)=>{
    const filtered=products.filter(item=>item.price>=startingPrice&&item.price<=endingPrice)
    return filtered;
}
export {
    filterProductsByCategories,
    sortByPriceOrder,
    filterProductsByPriceRange
}
