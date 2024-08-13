
const initialState = {
    products: [
        { id: 1, name: 'Product 1', description: 'Description for Product 1' },
        { id: 2, name: 'Product 2', description: 'Description for Product 2' },
        { id: 3, name: 'Product 3', description: 'Description for Product 3' },
        { id: 4, name: 'Product 4', description: 'Description for Product 4' },
    ]
};

const productsReducer = (state = initialState, action) => {
    console.log(state);
    return state;
};

export default productsReducer;
