export default (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            const {
                id, content
            } = action.payload;
            const todo = {
                id: id,
                content: content
            }
            // Object.assign({}, state, todo)
            return {
                ...state, ...todo
            }
    }
}