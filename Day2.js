/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    // Step 1: Create the Roman numeral value map
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 
        'C': 100, 'D': 500, 'M': 1000
    };

    let total = 0;

    // Step 2: Loop through the string to process each character
    for(let i = 0; i < s.length; i++) {
        let current = romanMap[s[i]];         // Get the value of the current Roman numeral
        let next = romanMap[s[i + 1]];        // Get the value of the next Roman numeral (if any)

        // Step 3: Check if we need to subtract
        if(next > current) {
            total = total - current;          // Subtract the current value if the next value is greater
        } else {
            total = total + current;          // Otherwise, add the current value
        }
    }

    // Step 4: Return the final total
    return total;
};
