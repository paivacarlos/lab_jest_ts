import { toUpperCase } from "../app/Utils"

describe('Utils test suite', ()=> {

    it('Should return uppercase of valid string', ()=>{
        //arrange - sut (system unit test)
        const sut = toUpperCase
        const expected = 'QWER'

        //act
        const actual = sut('qwer')

        //assert
        expect(actual).toBe(expected)
    })

})