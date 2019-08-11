const sortData = (criteria, data) => {
    if(data.length === 0 || data.length === 1) return data

    const sortedData = [...data].sort((a, b) => {
        if(a[criteria] < b[criteria]){
            return -1
        } else if (a[criteria] > b[criteria]){
            return 1
        } else {
            return 0
        }
    })

    return sortedData
}

module.exports = { sortData }