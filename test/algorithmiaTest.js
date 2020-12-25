'use strict';

const assert = this.chai ? this.chai.assert : require('assert');

describe('Algorithmia', function() {
    describe('client', function() {
      
        it('should invoke algo endpoint', function() {
          assert.equal(document.getElementById("result").innerText, "Hello HAL 9000")
        });

    });

});