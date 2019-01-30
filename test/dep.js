console.log('I got it');
const lib = {
    name: 'kasol',
    age: 18,
    getName: function() {
        return this.name;
    }
};
module.exports = lib;
