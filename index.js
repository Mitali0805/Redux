const redux = require('redux');
const reduxLogger = require('redux-logger')

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

//action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//actionCreator
const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

const buyIceCream = () => {
    return {
        type: BUY_ICECREAM,
        info: 'First redux action'
    }
}

//initialstate
const initialCakeState = {
    cakeCount: 10
}

const initialIceCreamState = {
    iceCreamCount: 20
}

//reducer - (prevState,action) =>  newState
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            cakeCount: state.cakeCount - 1
        }

        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            iceCreamCount: state.iceCreamCount - 1
        }
        default: return state
    }
}

//combineReducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

//store
const store = createStore(rootReducer, applyMiddleware(logger))

// getState()
console.log('initial state', store.getState());

//subscribe(listener)
const unsubscribe = store.subscribe(() => {})

//dispatch(action)
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

//unsubscribe()
unsubscribe()