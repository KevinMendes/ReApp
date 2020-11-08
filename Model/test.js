let currentData = new Date()


let passedDate = new Date("Sun, 18 Oct 2020 04:13:02 GMT");

const DateDiff = (datePassed, currentDate) => {
    let difference = {seconds: null, minutes: null, hours: null}
    let diffTemp = Math.floor((currentDate - datePassed)/1000)

    difference.seconds = diffTemp%60
    diffTemp = Math.floor((diffTemp-difference.seconds)/60)
    difference.minutes = diffTemp%60
    diffTemp = Math.floor((diffTemp-difference.minutes)/60)
    difference.hours = diffTemp%24
    return difference
}


console.log(DateDiff(passedDate, currentData))

