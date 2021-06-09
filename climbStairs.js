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
    dp[2] = 2;
    
    for(let i=3; i<=n; i++){   
        dp[i] = dp[i-1] + dp[i-2]; 
    }
    
    if(dp[n]) return dp[n];
};
