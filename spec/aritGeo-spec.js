const chai = require('chai');
const assert = chai.assert;

let aritGeo = require('./aritGeo/app.js');

describe("check user input", function () {
    it("should return  Pls pass a valid array for clinton ", function () {
        assert(
            aritGeo.app.js("clinton"), " Pls pass a valid array for clinton")
    });
    it("should return  Pls pass a valid array for 2345 ", function () {
        assert(
            aritGeo.app.js("2345"), " Pls pass a valid array for clinton")
    });
    it("should return Pls pass a valid array for ['2','4','4','7'] ", function () {
        assert(
            aritGeo.app.js(['2', '4', '4', '7']), " Pls pass a valid array for clinton")
    });
});
describe('An emptyArray', function () {
    it("should return return 0 for []", function () {
        assert(
            aritGeo.app.js([]), 0)
    });
});

describe("Arithmetic Values", function () {
    it("should return Arithmetic for 21,22,23,24", function () {
        assert.equal("Arithmetic", aritGeo.app.js([21, 22, 23, 24]))
    });
    it("should return Arithmetic for 42,43,44", function () {
        assert.equal("Arithmetic", aritGeo.app.js([41, 42, 43, 44]))
    });
});   
describe("Geometric Values", function () {
    it("should return Geometric for 1, 3, 9, 27, 81", function () {
        assert.equal("Geometric", aritGeo.app.js([1, 3, 9, 27, 81])
    });
    it("should return Geometric for 2,3,4", function () {
        assert.equal("Geometric", aritGeo.app.js([21, 22, 23, 224]))
    });
});   
