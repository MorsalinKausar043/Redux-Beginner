const increNum = (num) =>{
    return{
        type:"INCREMENT",
        playload: num
    }
}

const decreNum = () =>{
    return{
        type:"DECREMENT"
    }
}
const multiNum = (num) =>{
    return{
        type:"MULTI",
        playload: num
    }
}

const deviNum = () =>{
    return{
        type:"DEVIDE"
    }
}

export {increNum, decreNum, multiNum, deviNum};