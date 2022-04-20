import React, {useState, useEffect} from 'react';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import reportDataService from "../../services/report.service";
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
)


const BarChartSuscripcione = ({/*arrayLabels, arrayData, bckgC, bC*/}) => {

    const [arrayLabels, setLabels] = useState([]);
    const [arrayData, setData] = useState([]);
    
    useEffect( async () => {
        const {data:datos} = await reportDataService.getMasSuscripciones();
        const [Labels, Data] = obtenerArray(datos);
        setLabels(Labels);
        setData(Data);        
    }, []);    
        
    let data = {
        labels: arrayLabels,
        datasets: [{
            label: '# Categorias con más suscripciones',
            data: arrayData,
            backgroundColor: [
                'rgba(255, 90, 122, 0.2)',
                'rgba(54, 172, 225, 0.2)',
                'rgba(250, 216, 96, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 172, 225, 1)',
                'rgba(250, 216, 96, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'                
            ],
            borderWidth: 1
        }]
    }
        let options = {
            scales: {
            }
        }            
    	
    function obtenerArray(datos){        
        const arrayNombres = [];
        const arrayCantidad = [];
        datos.map( (item) => {
            arrayNombres.push(item.nombre);
            arrayCantidad.push(item.cantidad);
        });        
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
