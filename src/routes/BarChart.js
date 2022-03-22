import { useMemo } from "react";

import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,  
}  from "chart.js";

import {Bar} from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const scores = [6,5,6,2,4,9,3,5,8,3,7,9]
const labels = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dec"]


const options = {
    fill:true,
    responsive:true,
    scales:{
        y:{
            min:0
        },
    },
}
export default function LineChart(){
        const data = useMemo(function (){
                return{
                    datasets:[
                        {
                            label:"Bodas Confirmadas 2022",
                            data:scores,
                            tension:0.3,
                            borderColor:"rgb(75,192,192)",
                            pointRadius:6,
                            pointBackgroundColor:"rgb(75,192,89)",
                            backgroundColor:"rgb(235, 129, 203,.5)",
                        },
                    ],
                    labels
                };
        },[]);

    return <Bar data={data} options={options}/>
}