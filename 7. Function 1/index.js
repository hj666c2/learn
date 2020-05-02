let func = function (name) {
    console.log('Hello', name)
}

function sayHello (name, age) {
    return (`Hello, ${name}(${age})`)
}

func('one')
const turn = sayHello('two', 2)
console.log(turn)

const calculator = {
    plus: function(one, two) {
        return one + two
    },
    minus: function(one, two) {
        return one - two
    },
    multiply: function(one, two) {
        return one * two
    },
    devide: function(one, two) {
        return one / two
    },
}
console.log(calculator.devide(4, 5))