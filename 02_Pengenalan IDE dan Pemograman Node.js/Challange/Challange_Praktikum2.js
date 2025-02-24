import process from "process"
import readline from "readline"

const input = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

var diskon = "Diskon Besar"
const total = "3"

console.log(`Masukan Jumlah Barang : ${total}`)

input.question("Masukan Harga barang ke-1 : " , (harga1) =>{
    input.question("Masukan Harga barang ke-2 : " , (harga2) =>{
        input.question("Masukan Harga barang ke-3 : " , (harga3) =>{

            harga1 = Number(harga1)
            harga2 = Number(harga2)
            harga3 = Number(harga3)

            function jumlah(harga1, harga2, harga3) {
                let result = harga1 + harga2 + harga3
                return result
            }

            const totalHarga = jumlah(harga1, harga2, harga3)
            console.log(`Total Harga : ${totalHarga}`)
            console.log(`Jumlah Barang : ${total}`)
            console.log(`Kategori Diskon : ${diskon} \n`)

            console.log("informasi tambahan untuk barang ke-1" )
            console.log("informasi tambahan untuk barang ke-2")
            console.log("informasi tambahan untuk barang ke-3")
            
            input.close()
        })      
    })
});



