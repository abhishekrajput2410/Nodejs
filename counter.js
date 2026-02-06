const count = { value: 0 };

count.increment = () => ++count.value;
count.decrement = () => --count.value;
count.reset = () => { count.value = 0; return count.value; };

count[util.inspect.custom] = function () {
    return String(this.value);
};

module.exports = count;