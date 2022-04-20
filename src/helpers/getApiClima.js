export const getApiClima = async (ciudad, pais) => {

  const appId = '1d7aa7a069feb96798ffe1165d9875b3';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
  
    const resp = await fetch(url);
    const data = await resp.json();
    return data;

}
