const initialState = {
    userData: {},
    loggedIn: !!localStorage.getItem("token"),
    token: localStorage.getItem("token")
}

export default (state = initialState, { type, payload }) => {
    switch(type){
        case 'USER:SET_DATA':
            return {
                ...state,
                userData: payload.data,
                loggedIn: true,
                token: localStorage.getItem("token")
            };
        case 'USER:SET_AUTH':
            return {
                ...state,
                loggedIn: payload
            }
        default: 
            return state;
    }
}