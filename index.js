var addDays = require('date-fns/addDays');

const getDateAfterXDays = (days) => {
    const targetDate = addDays(new Date(2020, 07, 22), days);
    return `${targetDate.getDate()}-${targetDate.getMonth()+1}-${targetDate.getFullYear()}`;
}

module.exports = getDateAfterXDays;