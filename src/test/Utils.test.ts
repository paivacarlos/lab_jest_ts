import { StringUtils, getStringInfo, toUpperCase } from "../app/Utils"

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

    it('Should return info for valid string', ()=>{
        const actual = getStringInfo('My-String')

        expect(actual.lowerCase).toBe('my-string') //toBe for a primitives values
        expect(actual.extraInfo).toEqual({}) // toEqual for a objects values
        expect(actual.characters).toHaveLength(9) // length of the array
        expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g'])
        expect(actual.characters).toContain('-')
        expect(actual.characters).toEqual(//when you don't know what the order
            expect.arrayContaining(['-', 'S', 't', 'r', 'i', 'n', 'g'])
        )
        expect(actual.extraInfo).not.toBe(undefined)
        expect(actual.extraInfo).not.toBeUndefined()
        expect(actual.extraInfo).toBeDefined()
        expect(actual.extraInfo).toBeTruthy() // return true or false
    })

    describe('StringUtils tests', () => {

        let sut: StringUtils

        // hooks example
        beforeEach(() => {
            sut = new StringUtils()
        })

        afterEach(() => {
            //use to clearing mocks
            console.log('Teardown')
        })

        it('Should return correct uppperCase', () => {
            const actual = sut.toUpperCase('abc')

            expect(actual).toBe('ABC')
            console.log('Actual Test')
        })

        it('Should throw error on invalid value', () => {
            function expectError() {
                const actual = sut.toUpperCase('')
            }

            expect(expectError).toThrow();
            expect(expectError).toThrowError('Invalid argument!')
        })

        it('Should throw error on invalid value with arrow function', () => {
           expect(()=> {
            sut.toUpperCase('')
           }).toThrowError('Invalid argument!')
        })

        it('Should throw error on invalid value with try catch block', (done) => {
            try{
                sut.toUpperCase('')    
                done('GetStringInfo should throw error for valid value!')
            }catch (error) {
                expect(error).toBeInstanceOf(Error)
                expect(error).toHaveProperty('message', 'Invalid argument!')
                done()
            }
         })
    })

})