import chai from "chai";
import chaiHttp from "chai-http";

let expect = chai.expect;
describe('positive scenario', () => {


        it('should equal 2', () => {
            const result = 2;
            expect(result).to.equal(2);
        });

});