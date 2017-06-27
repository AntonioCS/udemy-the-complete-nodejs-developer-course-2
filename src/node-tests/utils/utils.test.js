const utils = require('./utils');
const assert = require('assert');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    if (res !== 44) {
        throw new Error(`Expected 44 but got ${res}`);
    }
});

it('should square a number', () => {
    var res = utils.square(2);
    assert.equal(4, res);
    /*if (res !== 4) {
        throw new Error(`Expected 4 but got ${res}`);
    }*/
});