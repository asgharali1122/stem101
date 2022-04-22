const intialData = [
    {
     id: 1,
     coin: "Eth",
     address: "090078601"
    }
];

const dataHandle = (state = intialData, action) => {
    switch(action.type){
        // console.log(action.payload);
        case "addData" : return state.concat(action.payload);
        // case "decrement" : return state - 1;
        default: return state;
    }
}

export default dataHandle;