import { describe, expect, it } from "vitest";
import { createCards } from "../src/createCard";

describe('createCards',()=>{
    const  suits = ['hearts','diamonds','clubs','spades']
    const values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
    it('return an array of card objects',()=>{
        const cards = createCards({
            suits,values
        })
        expect(Array.isArray(cards)).toBe(true)
    })
    it("creates a deck of 52 cards",()=>{
        const cards =  createCards({suits,values})
    })

})