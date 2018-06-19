const mapboxgl = require('mapbox-gl')

mapboxgl.accessToken =
  'pk.eyJ1IjoibGlhbTIiLCJhIjoiY2ppbTR3ZjZxMDBlcTNwbzJwMW95a2V3eCJ9.Gd_svi7S4Ij1eXEonPpjTg'

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
})

const icons = {
  hotel: 'url(http://i.imgur.com/D9574Cu.png)',
  activity: 'url(http://i.imgur.com/WbMOfMl.png)',
  restaurant: 'url(http://i.imgur.com/cqR6pUI.png)',
}

const marker = (coords, img) => {
  const pin = document.createElement('div') // Create a new, detached DIV
  pin.style.width = '30px'
  pin.style.height = '30px'
  pin.style.backgroundImage = img

  new mapboxgl.Marker(pin).setLngLat(coords).addTo(map)
}

const createMarker = (type, coords) => {
  switch (type) {
    case 'hotel':
      marker(coords, icons.hotel)
      break
    case 'activity':
      marker(coords, icons.activity)
      break
    case 'restaurant':
      marker(coords, icons.restaurant)
      break
    default:
      marker(coords)
      break
  }
}

module.exports = createMarker
