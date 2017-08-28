import chai from 'chai';
const assert = chai.assert;

import aritGeo from '../aritGeo/app.js';

describe("check user input", function () {
    it("should return  Pls pass a valid array for clinton ", function () {
        assert(
            aritGeo("clinton"), " Pls pass a valid array for clinton")
    });

    it("should return  Pls pass a valid array for 2345 ", function () {
        assert(
            aritGeo("2345"), " Pls pass a valid array for clinton")
    });

    it("should return Pls pass a valid array for ['2','4','4','7'] ", function () {
        assert(
            aritGeo(['2', '4', '4', '7']), " Pls pass a valid array for clinton")
    });
});

describe('An emptyArray', function () {
    it("should return  0 for []", function () {
        assert.equal(0, aritGeo([]))
    });
});

describe("Arithmetic Values", function () {
    it("should return Arithmetic for 1,2,3,4", function () {
        assert.equal("Arithmetic", aritGeo([1,2,3,4]))
    });
    it("should return Arithmetic for 60,70,80,90", function () {
        assert.equal("Arithmetic", aritGeo([60,70,80,90]))
    });
});   
describe("Geometric Values", function () {
    it("should return Geometric for 1, 3, 9, 27, 81", function () {
        assert.equal("Geometric", aritGeo([1, 3, 9, 27, 81]))
    });

    it("should return Geometric for 2, 6, 18, 54", function () {
        assert.equal("Geometric", aritGeo([2, 6, 18, 54]))
    });

    it("should return Geometric for 2 , 8 , 32 , 128", function () {
        assert.equal("Geometric", aritGeo([2, 6, 18, 54]))
    })
});

describe("Invalid values", function () {
    it("should return -1 for 12,14,16,18,20", function () {
        assert.equal(-1, aritGeo([12, 13, 16, 19, 20]))
    });

    it("should return -1 for 8,9,10,23,26,26", function () {
        assert.equal(-1, aritGeo([8,9,10,23,26,26]))
    });
})   
