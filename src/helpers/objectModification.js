
const SEPERATOR = "_"

function formatSnakeToCamelCase(string) {
    let splitArray = string.split(SEPERATOR).forEach((item, id)=> {
        return !id ? item.charAt(0).toUpperCase() + item.slice(1) : item
    });
    return splitArray.join()
}

export function renameObjectKey(oldKey, newKey, obj){
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
}

export function mapApiResponse(response) {
    Object.keys(response).forEach(
        (item) => {
            if (item.includes(SEPERATOR)) {
                renameObjectKey(item, formatSnakeToCamelCase(item), response)
            }
        }
    )
    return response
}