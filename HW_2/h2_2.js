for (let star = "*"; star.length < 8; star += "*")
    console.log(star)

for (let i = 1; i <= 101; i++) {
    if (i % 3 === 0) {
        console.log(i, "Fizz");
    } else if (i % 5 === 0) {
        console.log(i, "Buzz");
    } else if (i % 15 === 0) {
        console.log(i, "FizzBuzz");
    } else {
        console.log(i)
    }
}