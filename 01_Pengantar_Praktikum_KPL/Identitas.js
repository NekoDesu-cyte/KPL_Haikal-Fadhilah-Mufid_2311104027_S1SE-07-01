import process from "process"
import readline from "readline"

const input = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

input.question("Siapa nama kamu? " , (nama) => {
    console.info(`Hello ${nama}`)
    input.question("Apa jurusan kamu?", (jurusan) => {
        console.info(`${jurusan}`)
        input.question("Di Universitas mana?", (universitas) => {
            console.info(`di Universitas${universitas}`)
            input.question("Berapa umurnya?", (umur) => {
                console.info(`${umur} tahun`)

                
              
                input.close()
            })
          
        })
      
    })
})


