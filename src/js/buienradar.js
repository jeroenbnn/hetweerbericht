export const buienRadar = async (data) => {
  
  if (data.lat && data.lon) {
    locationFrame.innerHTML = `<iframe src="https://gadgets.buienradar.nl/gadget/zoommap/?lat=${data.lat}&lng=${data.lon}&overname=2&zoom=8&size=3&voor=0" scrolling=no width=550 height=512 frameborder=no></iframe>`;
  } else {
    locationFrame.innerHTML = `<iframe src="https://gadgets.buienradar.nl/gadget/zoommap/?lat=50.10&lng=4.29&overname=2&zoom=8&size=3&voor=0" scrolling=no width=550 height=512 frameborder=no></iframe>`;
  }
  
  mapBelgium.innerHTML = `<img border="0" src="https://image.buienradar.nl/2.0/image/animation/RadarMapRainWebmercatorBE?height=512&width=550&extension=png&renderBackground=True&RenderBranding=true&renderText=True&history=3&forecast=3&skip=1">`;
    
}
