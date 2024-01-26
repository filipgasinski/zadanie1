import { assert } from 'chai';
import calculateChange from '../index.js';

//Test 1
describe('Vending machine change check', function () {
    it('Koszt 3 zł, wrzuca 5, zwraca 2', function () {
        const result = calculateChange(300, 500);
        assert.deepEqual(result, [200]);
    });

    it('Koszt 3 zł, wrzuca 10, zwraca 5 i 2', function () {
        const result = calculateChange(300, 1000);
        assert.deepEqual(result, [500, 200]);
    });

    it('Koszt 10 zł, wrzuca 5, prosi o 5', function () {
        const result = calculateChange(1000, 500);
        assert.deepEqual(result, 'error: unable to calculate change');
    });

    it('koszt 5.50 zł, wrzuca 5, prosi o 0.50', function () {
        const result = calculateChange(550, 500);
        assert.deepEqual(result, 'error: unable to calculate change');
    });

    it('koszt 5.70 zł, wrzuca 5, prosi o 0.5 i 0.2', function () {
        const result = calculateChange(570, 500);
        assert.deepEqual(result, 'error: unable to calculate change');
    });

    it('koszt 3.50 zł, wrzuca 5, zwraca 1 i 0.50', function () {
        const result = calculateChange(350, 500);
        assert.deepEqual(result, [100, 50]);
    });

    it('koszt 4.20 zł, wrzuca 5, zwraca 0.50 + 0.20 + 0.10', function () {
        const result = calculateChange(420, 500);
        assert.deepEqual(result, [50, 20, 10]);
    });

    it('Koszt 2 zł, wrzuca 2, zwraca 0', function () {
        const result = calculateChange(200, 200);
        assert.deepEqual(result, []);
    });
});