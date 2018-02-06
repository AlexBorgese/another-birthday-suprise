
export function trivagoUrl(startDate, endDate) {
    console.log(startDate);
    const startYear = startDate.getUTCFullYear();
    const startMonth = startDate.getUTCMonth();
    const startDay = startDate.getUTCDate();

    const endYear = endDate.getUTCFullYear();
    const endMonth = endDate.getUTCMonth();
    const endDay = endDate.getUTCDate();
    
    return `https://www.trivago.co.uk/?aDateRange%5Barr%5D=${startYear}-${startMonth}-${startDay}&aDateRange%5Bdep%5D=${endYear}-${endMonth}-${endDay}&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iPathId=46814&aGeoCode%5Blat%5D=52.370201&aGeoCode%5Blng%5D=4.895361&iGeoDistanceItem=0&aCategoryRange=0%2C1%2C2%2C3%2C4%2C5&aOverallLiking=1%2C2%2C3%2C4%2C5&sOrderBy=relevance%20desc&bTopDealsOnly=false&iRoomType=7&cpt=4681403&iIncludeAll=0&iViewType=0&bIsSeoPage=false&bIsSitemap=false&`;
}
