export const activeFiltersProducts=(activeFilters,products)=>{
    if(activeFilters.length<1)return products;
    const filtered=activeFilters.map(filter=>{
        return products.filter(e=>e.category===filter);
    });
    return filtered.flat(Infinity);
}


