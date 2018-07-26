import { connect } from 'react-redux';

import { AppComponent } from '../components';
import { CounterAction } from '../actions'

function mapStateToProps(state) {
    console.log(state.counter.value);
    return {
        count: state.counter.value
    }
}

let mapDispatchToProps = (dispatch) => {
        return {
            increment: function() {
                dispatch(CounterAction.INCREMENT());
            },
            decrement: function() {
                dispatch(CounterAction.DECREMENT());
            }
        }
    }

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)
