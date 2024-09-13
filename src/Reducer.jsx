const reducer = (state, action) => {
    switch (action.type) {
        case "setData":
            return { ...state, hits: action.payload.hits, isLoading: false };
        case "setLoading":
            return { ...state, isLoading: true };
        case "prev":
            return {...state, page: state.page-1}
        case "next":
            return{...state,page: state.page+1}
        default:
            return state;
    }
};

export { reducer };
