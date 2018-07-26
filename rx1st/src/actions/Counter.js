import actionConfig from '../actionConfig'

export const CounterAction = {
    INCREMENT: () => {
        return { type: actionConfig.types.INCREMENT }
    },
    DECREMENT: () => {
        return { type: actionConfig.types.DECREMENT }
    }
}
