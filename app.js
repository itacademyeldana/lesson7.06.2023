// var euSize = 'M'
// switch (euSize){
//     case 'S':
//     case 's':
//         console.log('42')
//         break
//     case 'M':
//     case 'm':
//         console.log('44')
//         break
//     case 'L':
//     case 'l':
//         console.log('46')
//         break
//     default:
//         console.log('unknown size')
}

//null
// var address = null
// console.log(typeof null)

//undefined
// let name;
// console.log(typeof name)

//object
var objectUser = {
    name: 'Eldana',
    surname: 'Maksatbekova',
    number: 0555555555,
    address: null,
    isMarried: false,
    object: {
        undef: undefined
    }
}

console.log(objectUser)
console.log(objectUser.surname)
console.log(objectUser.object.undef)

objectUser.course = 'Geeks'
