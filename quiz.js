// Assuming you have already done "npm install fernet"
//let fernet = require('./fernet')
import fernet from 'fernet'

let secret = new fernet.Secret('TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=')
// Oh no! The code is going over the edge! What are you going to do?
let message = 'gAAAAABcGQ7QQ5VpkkcN_RFU7oXCWMb7yyFO5EI1gxkxh2AgKaqwH69-3nH1pvbCAKzfmF8O_Uk6jzXofE5GImfC-EN3AzR4z9RkjSqcJUhIdylcGBs1Nuhs1VrmSCnJIZeS66FZObtPZ7iiASH7SSMDaSuATqb3gxeS2SE4GcbUWzJS5eLL3IJmpuQsNwN2PoADEcAC9aHZ'
let token = new fernet.Token({secret: secret, token: message, ttl:0})
console.log(token)
console.log(token.decode())
//token.decode(]
//saccharine