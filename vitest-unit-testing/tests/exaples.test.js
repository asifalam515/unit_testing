import { describe, expect, it } from "vitest";
import { isPrime, longestString, shippingCost } from "../src/example";
//  describe about the test you are doing
describe('example.longestString',()=>{

    // which function or module  you wanna  test
    it('return the longest string',()=>{
        const longest = longestString("asibul","asif")

        // tell whats exactly output you   expect
    expect(longest).toBe('asibul')
    })

    it('returns  the first string when  bot are equal length',()=>{
        const similar = longestString('aaaa','eeee')
        expect(similar).toBe('aaaa')
    })
    it('handles empty string',()=>{
        expect(longestString('','mario')).toBe('mario')
    })
})

describe('example.isPrime',()=>{
    it('treat 0 and 1 as non-prime and 2 as prime',()=>{
        expect(isPrime(0)).toBe(false)
        expect(isPrime(1)).toBe(false)
                expect(isPrime(2)).toBe(true)
    })
    it('returns false for all even numbers >2',()=>{
        expect(isPrime(4)).toBe(false)
    })
    it('identifies  common  primes',()=>{
      expect(isPrime(3)).toBe(true)
    })
    it('returns false for perfect squares reliably',()=>{
      expect(isPrime(49)).toBe(false)
    })
     it('returns false for non-integers',()=>{
      expect(isPrime(4.5)).toBe(false)
    })
     it('it throws an error for  non-number input',()=>{
        const badCall = ()=>isPrime('asibul')
        expect(badCall).toThrow()
    })
})  


describe('example.shippingCost',()=>{
   
it('charges  correct amount for different weights',()=>{
    expect(shippingCost(0.5)).toBe(3.99)
    expect(shippingCost(3)).toBe(5.99)
    expect(shippingCost(10)).toBe(8.99)
    expect(shippingCost(25)).toBe(14.99)  
})

// boudnary test
it('charges  correct amount for different weights',()=>{
    expect(shippingCost(1)).toBe(3.99)
    expect(shippingCost(5)).toBe(5.99)
    expect(shippingCost(20)).toBe(8.99)
})



})