
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = startDate
  }

  yearsExperienceFromBeginningOf(year) {
    let startYear = this.startDate.split(" ")[2]
    return year - startYear
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {

  }

  estimatedTime(peak) {
    if (peak === true) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}