export default {
    increment: function(value) {
        var result = Object.assign({}, {
            value: value + 1
        })
        saveCount(result)
        return result
    },
    decrement: function(value) {
        var result = Object.assign({}, {
            value: value - 1
        })
        saveCount(result)
        return result
    },
    initialize: function() {
        var value = null

        if (!hasCount()){
            saveCount({ value: 0 })
        }
        value = getCount()
        console.log("koko")
        console.log(value)
        
        return value
    }
}

function hasCount() {
    return !(localStorage.getItem('count') == null)
}
function saveCount(state) {
    localStorage.setItem('count', JSON.stringify(state))
}

function getCount() {
    return JSON.parse(localStorage.getItem('count'))
}