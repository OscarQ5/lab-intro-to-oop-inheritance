// Create class below

class Food{
    constructor(name, daysToSpoil, fresh = true){
        this.name = name
        this.daysToSpoil = daysToSpoil
        this.fresh = fresh
    }
    prepare(){
        console.log(`${this.name} is being prepared.`)
    }
    isFresh(){
        if(this.daysToSpoil > 0){
            console.log(`There are ${this.daysToSpoil} day(s) left before ${this.name} has spoiled.`)
        } else {
            console.log(`${this.name} has spoiled.`)
        }
    }
    aDayPasses(){
        this.daysToSpoil--
        if(this.daysToSpoil <= 0) this.fresh = false
        this.isFresh()
    }
}
// const ham = new Food("Ham", 1)
// ham.prepare()
// ham.isFresh()
// ham.aDayPasses()
// console.log(ham)

// Do not edit below this line
module.exports = Food;
