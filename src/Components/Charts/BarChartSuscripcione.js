import React, {useState, useEffect} from 'react';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import reportDataService from "../../services/report.service";
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
    Legend
)


const BarChartSuscripcione = ({seleSus}) => {

    const [arrayLabels, setLabels] = useState([]);
    const [arrayData, setData] = useState([]);
    
    useEffect( async () => {
        const {data:datos} = await reportDataService.getMasSuscripciones(seleSus);
        const [Labels, Data] = obtenerArray(datos);
        setLabels(Labels);
        setData(Data);        
    }, [seleSus]);    
        
    let data = {
        labels: arrayLabels,
        datasets: [{
            label: 'Categoria con mas suscripciones',            
            data: arrayData,
            backgroundColor: [
                'rgba(54, 172, 225, 0.2)',
                'rgba(255, 90, 122, 0.2)',                
                'rgba(250, 216, 96, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'                
            ],
            borderColor: [
                'rgba(54, 172, 225, 1)',
                'rgba(255, 99, 132, 1)',                
                'rgba(250, 216, 96, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'                
            ],
            borderWidth: 1,
            hoverBorderWidth: 3,
        }]
    }
    const options = {
        plugins: {
          legend: {
            display: true,
            labels: {
              font: {
                size: 14
              },
            },
          },
        },
      };        
            
    	
    function obtenerArray(datos){        
        const arrayNombres = [];
        const arrayCantidad = [];
        if(Array.isArray(datos)){
            datos.map( (item) => {
                arrayNombres.push(item.nombre);
                arrayCantidad.push(item.cantidad);
            });        
        }        
        return [arrayNombres, arrayCantidad];
    }
    return(
	<>
		<Bar 
			data={data}
			height={100}            
			options={options}		
		/>
			
	 </>);
}

export default BarChartSuscripcione;
