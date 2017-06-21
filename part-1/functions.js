
module.exports = {

  weekday: (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return days[date.getDay()]
  },

  snippet: (string, maxlength) => {

  },

  numProps: (obj) => {
    return Object.keys(obj).length
  },

  filterBetween: () => {


  }

}
