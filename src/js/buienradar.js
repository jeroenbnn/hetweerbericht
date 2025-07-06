export const buienRadar = async (data) => {
  /*
  if (data.lat && data.lon) {
    locationFrame.innerHTML = `<iframe src="https://gadgets.buienradar.nl/gadget/zoommap/?lat=${data.lat}&lng=${data.lon}&overname=2&zoom=8&size=13&voor=0" scrolling=no width=500 height=500 frameborder=no></iframe>`;
  } else {
    locationFrame.innerHTML = `<iframe src="https://gadgets.buienradar.nl/gadget/zoommap/?lat=50.10&lng=4.29&overname=2&zoom=8&size=13&voor=0" scrolling=no width=500 height=500 frameborder=no></iframe>`;
  }
  */
  mapBelgium.innerHTML = `<img border="0" src="https://image.buienradar.nl/2.0/image/animation/RadarMapRainWebmercatorBE?height=500&width=500&extension=png&renderBackground=True&RenderBranding=false&renderText=True&history=0&forecast=36&skip=1">`;
    
}
