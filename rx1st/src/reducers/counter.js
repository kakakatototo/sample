import actionConfig from '../actionConfig'
import CounterLogic from '../logic/counter'

const Initialize = CounterLogic.initialize();
console.log('Initialize');
console.log(Initialize);

const counter = (state = Initialize, action) => {
    console.log(state);
    switch (action.type) {
        case actionConfig.types.INCREMENT:
            return CounterLogic.increment(state.value)
        case actionConfig.types.DECREMENT:
            return CounterLogic.decrement(state.value)
        default:
            return state
    }
}

export default counter
