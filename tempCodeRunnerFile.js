st str = 'Electronica'
let a = ''
const len = str.length - 1
console.log(len)
for (let i = len; i >= 0; i--) {
	console.log(str[i])
	a += str[i]
	console.log(a)
	// a = a + str[i]
}
console.log(a)