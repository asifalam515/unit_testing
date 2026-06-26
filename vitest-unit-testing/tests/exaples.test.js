import { describe, expect, it } from "vitest";
import { longestString } from "../src/example";
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