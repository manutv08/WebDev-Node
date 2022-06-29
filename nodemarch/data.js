db.flightdata.insertOne({
    departureAirport:"Tvm",
    arrivalAirport:"Koc",
    aircraft:"Airbus 320",
    distance:400,
    interContinental:false
})
db.flightdata.insertOne({
    departureAirport:"Koc",
    arrivalAirport:"Bom",
    aircraft:"Airbus 320",
    distance:1200,
    interContinental:false
})

db.flightdata.insertMany([
    {
        departureAirport:"Tvm",
        arrivalAirport:"Koc",
        aircraft:"Airbus 320",
        distance:400,
        interContinental:false
    },
    {
    departureAirport:"Koc",
    arrivalAirport:"Bom",
    aircraft:"Airbus 320",
    distance:1200,
    interContinental:false
}
])

var Employee = [
    {
        empid:1,
        empname:"Ajesh"
    },
    {
        empid:1,
        empname:"Binu"
    },
    {
        empid:1,
        empname:"Raji"
    },
]