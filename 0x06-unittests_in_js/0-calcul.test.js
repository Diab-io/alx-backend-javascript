const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('App', function() {
    it('calculateNumber test', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('Test for first number rounded', () => {
        assert.strictEqual(calculateNumber(2.5, 2), 5);
    });

    it('Test second number rounded', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('Test both numbers rounded', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('Test for both rounding up', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('Test numbers with trailing 6s', () => {
        assert.strictEqual(calculateNumber(4.666666, 4.666666), 10);
    })
})
