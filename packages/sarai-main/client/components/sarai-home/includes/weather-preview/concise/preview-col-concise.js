Template.PreviewColConcise.onCreated(() => {
  Meteor.subscribe('weather-data-30', () => {
    console.log("subscriptions finished")
    const data = WeatherData.find({})
    console.log(data.fetch())
  })
})

Template.PreviewColConcise.onRendered(() => {

})

Template.PreviewColConcise.helpers({
  accumulatedRain: (stationID) => {
    const weatherData = WeatherData.find({id: stationID})

    // console.log(stationID)
    // console.log(weatherData.fetch())
    console.log(stationID)
    console.log(weatherData.fetch())
    if (weatherData) {
      const rainfall = Meteor.previewHelpers.get30DayRainfall(weatherData.fetch())
      return rainfall
    }

  },

  format: (label) => {
    const newLabel = Meteor.previewHelpers.formatLabel(label)
    return newLabel
  },

  idSuffix: (label) => {
    const suffix = label.replace(/ /g, '-').toLowerCase()

    return suffix
  }
})

Template.PreviewColConcise.events({

})