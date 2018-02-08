/* could convert these to actions? */
export function trivagoUrl(startDate, endDate) {
    console.log(startDate);
    const startYear = startDate.getUTCFullYear();
    const startMonth = startDate.getUTCMonth();
    const startDay = startDate.getUTCDate();

    const endYear = endDate.getUTCFullYear();
    const endMonth = endDate.getUTCMonth();
    const endDay = endDate.getUTCDate();

        // that 0 is dodgy and not going to work in the long run!
    return `https://www.trivago.co.uk/?aDateRange%5Barr%5D=${startYear}-0${startMonth + 1}-${startDay}&aDateRange%5Bdep%5D=${endYear}-0${endMonth + 1}-${endDay}&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iPathId=404053&aGeoCode%5Blat%5D=52.370201&aGeoCode%5Blng%5D=4.895361&iGeoDistanceItem=0&aCategoryRange=0%2C1%2C2%2C3%2C4%2C5&aOverallLiking=1%2C2%2C3%2C4%2C5&sOrderBy=relevance%20desc&bTopDealsOnly=false&iRoomType=7&cpt=4681403&iIncludeAll=0&iViewType=0&bIsSeoPage=false&bIsSitemap=false&`;
}

export function ryanAirUrl(startDate, endDate) {
    const startYear = startDate.getUTCFullYear();
    const startMonth = startDate.getUTCMonth();
    const startDay = startDate.getUTCDate();

    const endYear = endDate.getUTCFullYear();
    const endMonth = endDate.getUTCMonth();
    const endDay = endDate.getUTCDate();

    return `https://rooms.ryanair.com/ie/en/list/belfast?checkinDate=${startYear}-0${startMonth + 1}-${startDay}&checkoutDate=${endYear}-0${endMonth + 1}-${endDay}&roomAllocations=2&page=0`;
}

export function expediaUrl(startDate, endDate) {
    const startYear = startDate.getUTCFullYear();
    const startMonth = startDate.getUTCMonth();
    const startDay = startDate.getUTCDate();

    const endYear = endDate.getUTCFullYear();
    const endMonth = endDate.getUTCMonth();
    const endDay = endDate.getUTCDate();

    return `https://www.expedia.co.uk/Hotel-Search?packageType=fh&searchProduct=hotel&c=5b920e5a-8241-4b3c-94f7-7e628e01c13c&adults=2&destination=Belfast+(and+vicinity),+Northern+Ireland,+United+Kingdom&ttla=BFS&startDate=${startDay}/${startMonth + 1}/${startYear}&endDate=${endDay}/${endMonth +1}/${endYear}&sort=recommended`;
}
