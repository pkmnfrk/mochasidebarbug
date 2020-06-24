const should = require("should");

function delay(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

describe("Test", function() {
    it("sync fail", function() {
        should.exist(null);
    });
    it("sync pass", function() {
        should.exist(123);
    });
    it("async fail", function(done) {
        setTimeout(() => {
            should.exist(null);
            done();
        }, 0);
    });
    it("async pass", function(done) {
        setTimeout(() => {
            should.exist(123);
            done();
        }, 0);
    });
    it("promise fail", async function() {
        await delay(10);
        should.exist(null);
    });
    it("promise pass", async function() {
        await delay(10);
        should.exist(123);
    });
})