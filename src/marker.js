const mapboxgl = require('mapbox-gl')

mapboxgl.accessToken =
  'pk.eyJ1IjoibGlhbTIiLCJhIjoiY2ppbTR3ZjZxMDBlcTNwbzJwMW95a2V3eCJ9.Gd_svi7S4Ij1eXEonPpjTg'

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
})

const hotelMarker = coords => {
  const pin = document.createElement('div') // Create a new, detached DIV
  pin.style.width = '30px'
  pin.style.height = '30px'
  pin.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)'

  new mapboxgl.Marker(pin).setLngLat([coords[0], coords[1]]).addTo(map)
}

const activityMarker = coords => {
  const pin = document.createElement('div') // Create a new, detached DIV
  pin.style.width = '30px'
  pin.style.height = '30px'
  pin.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'

  new mapboxgl.Marker(pin).setLngLat([coords[0], coords[1]]).addTo(map)
}

const restaurantMarker = coords => {
  const pin = document.createElement('div') // Create a new, detached DIV
  pin.style.width = '30px'
  pin.style.height = '30px'
  pin.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)'

  new mapboxgl.Marker(pin).setLngLat([coords[0], coords[1]]).addTo(map)
}

const createMarker = (type, coords) => {
  switch (type) {
    case 'hotel':
      hotelMarker(coords)
      break
    case 'activity':
      activityMarker(coords)
      break
    case 'restaurant':
      restaurantMarker(coords)
      break
    default:
      hotelMarker(coords)
      break
  }
}

module.exports = createMarker
