'use strict';

const assert = window.chai ? window.chai.assert : require('assert');
describe('Algorithmia', function() {
    describe('client', function() {
        before(async () => {
            var api_key = window.location.search.slice(1).split('=')[1];
            await  Algorithmia.query("demo/Hello", api_key , "HAL 9000", (error, result)=>{
                document.getElementById('result').innerText = result;
            });
        });
        it('should invoke algo endpoint',  async ()=> {
           await  assert.equal(document.getElementById("result").innerText, "Hello HAL 9000");
        });
    });
});
