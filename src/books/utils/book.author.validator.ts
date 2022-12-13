export function isAuthor(author: any){
    if (typeof author === "string"){
        return true
    }

    return false
}