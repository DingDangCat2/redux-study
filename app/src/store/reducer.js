const defaultState={'list':['星期一','星期二','新七三','星期四','星期五']};
export default function reducer(state=defaultState,action){
    //state是个对象，保存这数据。
    //reducer只能接受state，不能改变。可以添加state的属性。
    switch(action.type){
        case 'ADD_PAGE':
            let newState=JSON.parse(JSON.stringify(state));
            (newState.list).push(action.value)
      
            return newState;
            case 'DELETE_PAGE':
                let newStates=JSON.parse(JSON.stringify(state));
            (newStates.list).splice(action.value,1)
            console.log(newStates)
            return newStates;
        default:
            return state;
    }
}