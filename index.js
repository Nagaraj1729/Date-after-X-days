var addDays = require('date-fns/addDays');

const targetDateAfterXDays = (days) => {
    const targetDate = addDays(new Date(2020, 7, 22), days);
    return `${targetDate.getDate()}-${targetDate.getMonth()+1}-${targetDate.getFullYear()}`;
}


module.exports = targetDateAfterXDays;