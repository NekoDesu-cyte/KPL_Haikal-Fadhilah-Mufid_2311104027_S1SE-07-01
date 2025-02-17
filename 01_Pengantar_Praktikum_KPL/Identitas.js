import process from "process"
import redline from "readline"

const input = redline.createInterface({
    input : process.stdin,
    output : process.stdout
})

input.question("Siapa nama kamu?" , (nama) => {
    console.info(`Hello ${nama}`)

    input.close()
})
