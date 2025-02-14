/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // step 1
    var longestarr = [];
    var currentarr= [];
// step 2
    for(let i=0; i<s.length; i++){
        // step 3
        if(currentarr.includes(s[i])){
            if(currentarr.length > longestarr.length){
                longestarr = [...currentarr]
            }

// step 4
            let index = currentarr.indexOf(s[i]);
            currentarr = currentarr.slice(index + 1);
        }
        // step 5
        currentarr.push(s[i]);
    }
// step 6
    if(currentarr.length > longestarr.length){
       longestarr = [...currentarr]
    }
// step 7
    return longestarr.length;
};
