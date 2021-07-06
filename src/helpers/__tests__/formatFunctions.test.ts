import { formatDate } from "../dateFormat";
import { formatPrice } from "../priceFormat";
import { formatTitle } from "../stringFormat";
import data from "./data.json";

describe("Test all formats", () => {

    it("Title - expect 30 chars & ...", () => {
        expect(formatTitle(data.strings.tests[0])).toBe(data.strings.results[0])
        expect(formatTitle(data.strings.tests[1])).toBe(data.strings.results[1])
        expect(formatTitle(data.strings.tests[2])).toBe(data.strings.results[2])
        expect(formatTitle(data.strings.tests[3])).toBe(data.strings.results[3])
        expect(formatTitle(data.strings.tests[4])).toBe(data.strings.results[4])
    })

    it("Date - Month (letters) day year", () => {
        expect(formatDate(data.dates.tests[0])).toBe(data.dates.results[0])
        expect(formatDate(data.dates.tests[1])).toBe(data.dates.results[1])
        expect(formatDate(data.dates.tests[2])).toBe(data.dates.results[2])
        expect(formatDate(data.dates.tests[3])).toBe(data.dates.results[3])
        expect(formatDate(data.dates.tests[4])).toBe(data.dates.results[4])
    })
    
    
    it("Price - expect currency CHF & divide numbers", () => {
        // Pure copy cat due to Unicode errors. It will just help to maintain the origin function over time
        const pureFormatPriceCopy = jest.fn((n) => new Intl.NumberFormat('de-CH', { style: 'currency', currency: 'CHF' }).format(n/100))
        
        expect(formatPrice(data.numbers.tests[0])).toMatch(pureFormatPriceCopy(data.numbers.tests[0]))
        expect(formatPrice(data.numbers.tests[1])).toMatch(pureFormatPriceCopy(data.numbers.tests[1]))
        expect(formatPrice(data.numbers.tests[2])).toMatch(pureFormatPriceCopy(data.numbers.tests[2]))
    })

})