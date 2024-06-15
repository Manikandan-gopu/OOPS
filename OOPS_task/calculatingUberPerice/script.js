// Using Class we are calculating the Uber Price

class uberPrice{
    constructor(depature,destination,baseprice,costPerKm,waitingcharge,distancetravalled){


        this.depature = depature;
        this.destination =destination;
        this.baseprice = baseprice;
        this.costPerKm = costPerKm;
        this.waitingcharge = waitingcharge;
        this.distancetravalled = distancetravalled
    }
getdetails(){
    console.log(`
The starting Point is ${this.depature}, the destination was ${this.destination}
the cost per KM is ${this.costPerKm} and the signal and other waiting charges is ${this.waitingcharge} and the total distance travelled is ${this.distancetravalled} `)
}
getPrice(){
    if (this.distancetravalled === 2){
        console.log(`price:${this.baseprice+this.waitingcharge}`)
    }else{
    let Price = (this.costPerKm*this.distancetravalled)+this.waitingcharge
    console.log(Price.toFixed(2))
}
}
}

const pricefordestination1 = new uberPrice("anna Nagar","vadapalani",100,30,15,2)
console.log(pricefordestination1)
pricefordestination1.getdetails()
pricefordestination1.getPrice()

const pricefordestination2 = new uberPrice("shollinganllur","kodungaiyur",100,30,111,34)
console.log(pricefordestination2)
pricefordestination2.getdetails()
pricefordestination2.getPrice()


