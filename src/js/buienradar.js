export const buienradarImage = async (data, key) => {
  if (data.lat && data.lon) {
    locationFrame = `<iframe src="https://gadgets.buienradar.nl/gadget/zoommap/?lat=${data.lat}&lng=${data.lon}&overname=2&zoom=8&size=3&voor=0" scrolling=no width=550 height=512 frameborder=no></iframe>`;
  } else {
    locationFrame = `<iframe src="https://gadgets.buienradar.nl/gadget/zoommap/?lat=50.10&lng=4.29&overname=2&zoom=8&size=3&voor=0" scrolling=no width=550 height=512 frameborder=no></iframe>`;
  }
}
  
