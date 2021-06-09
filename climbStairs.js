/**
 * Find the number of different ways to climb n stairs,
 * if either one or two steps can be taken at any time
 *
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    let dp = [];
    
    dp[0] = 0;
    dp[1] = 1;
    
    for(let i=2; i<=n; i++){
        
        if(i % 2 === 0) {
            // add 2 possibilities for even numbered stairs
            dp[i] = dp[i-1] + 2;
        } else {
            // add one possibility for odd numbered stairs 
            dp[i] = dp[i-1] + 1;
        }
    }
    
    if(dp[n]) return dp[n];
};
