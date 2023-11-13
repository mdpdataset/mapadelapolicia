import constants from "../constants/constants";

export const violenciasFetch = async () => {
const responseViolencias = await fetch(constants.sheetUrl);
const data = await responseViolencias.json();
const values = data.values.slice(1);

let parsedValues = [];
values.forEach((c) => {
    if (c.length === 10){
        const [latitude, longitude] = c[1].split(",").map(parseFloat);

        const event ={
            id: parseInt(c[0]),
            coords: {
                latitude,
                longitude,
            },
            fecha: c[2],
            hora: c[3],
            direccion: c[4],
            barrio: c[5],
            titulo: c[6] ,
            tipo: c[7],
            fuerza: c[8] ,
            cronica: c[9],
            link: c[10],
            video: c[11],

        };
        if (longitude !== undefined && event.date !== "") {
            parsedValues.push(event);
    }
} else {
    console.log(c)
  }
})

return parsedValues;

};