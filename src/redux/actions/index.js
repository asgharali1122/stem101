const incNumber = () => {
    return{
        type : "Increment"
    }
}
const decNumber = () => {
    return{
        type : "decrement"
    }
}
const addData = (data) => {
    return{
        type : "addData",
        payload : data
    }
}
export {
    incNumber,
    decNumber,
    addData
}