let nextId = 0;

export const addTodo = (content) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: ++nextId,
            content: content
        }
    }
}