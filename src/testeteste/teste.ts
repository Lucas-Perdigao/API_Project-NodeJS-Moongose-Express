
function funcao1(){
    try {   
        throw new Error ("Erro no try da função 1") //o erro é forçado nessa linha
    } catch (e) {
        return {
            date: new Date(),
            error: e
        }
    }
}


function funcao2(param){
    try {
        if (typeof param === "number"){
            throw new Error("1001")
        }
        return param
    } catch (e) {
        return `Erro na função 2, erro do tipo ${e}.`
    }
}




// console.log(funcao2(funcao1()))
console.log(funcao2(3))