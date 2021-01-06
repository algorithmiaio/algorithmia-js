'use strict';

const assert = window.chai ? window.chai.assert : require('assert');

describe('Algorithmia JS client', () => {
    it('should invoke algo endpoint', (done) => {
        const apiKey = window.location.search.slice(1).split('=')[1];

        Algorithmia.query(
            'demo/Hello',
            apiKey,
            'HAL 9000',
            (error, result) => {
                assert.equal(result, 'Hello HAL 9000');
                done();
            }
        );
    });
});
