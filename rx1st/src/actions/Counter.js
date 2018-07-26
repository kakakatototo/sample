import actionConfig from '../actionConfig'

export default {
    INCREMENT: () => {
        return { type: actionConfig.types.INCREMENT }
    },
    DECREMENT: () => {
        return { type: actionConfig.types.DECREMENT }
    }
}
