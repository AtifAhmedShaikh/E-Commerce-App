// filter the products by active filter category 
export const filterProductsByCategories = (products, activeCategoryFilter) => {
    if (activeCategoryFilter.length === 0) return products;
    const filtered = activeCategoryFilter.map(category => {
        const items = products.filter(item => item.category === category);
        return items
    });
    return filtered.flat(Infinity);
}
//sort products by price order hight to low Or low to high
export const sortByPriceOrder = (products, order) => {
    const sorted = products.sort((p2, p1) => {
        if (order === "highToLow") return p1.price - p2.price
        return p2.price - p1.price
    });
    return sorted;
}
//filter the products by given price range
export const filterProductsByPriceRange = (products, startingPrice, endingPrice) => {
    const filtered = products.filter(item => item.price >= startingPrice && item.price <= endingPrice)
    return filtered;
}
