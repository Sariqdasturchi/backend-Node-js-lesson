const path = require('path')

console.log(path.basename(__filename)); // fayl nomini olib beradi
console.log(path.dirname(__filename)); // fayl turgan asosiy pakagacha bo'lgan manzil
console.log(path.extname(__filename)); // fayl kengaytmasini olib beradi
console.log(path.parse(__filename)); // obshi strukturani object ko'rinishda olib beradi
console.log(path.join(__dirname, 'test', 'index.html')); // birlashtirib beradi
console.log(path.resolve(__dirname, '/test', 'index.html')); // join bilan bir xil, lekin faylni hma olib beradi
