import React from 'react';
import { connect } from 'react-redux';

import App from '../components/App';
import CounterAction from '../actions/Counter'

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

export default connect(mapStateToProps, mapDispatchToProps)(App)
