function compareDateTime(arrivalTimeString, departureTimeString) {
    let arrivalDateTime = new Date(arrivalTimeString);
    let departureDateTime = new Date(departureTimeString);
    return arrivalDateTime.getTime() < departureDateTime.getTime();
}

module.exports = {
    compareDateTime
}