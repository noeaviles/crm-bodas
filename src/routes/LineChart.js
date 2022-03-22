import { useMemo } from "react";

import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,  
}  from "chart.js";

import {Line} from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const scores = [6,5,6,2,4,9,3]
const labels = [100,200,300,400,500,600,700]


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
                            label:"Bodas Activas",
                            data:scores,
                            tension:0.3,
                            borderColor:"rgb(75,192,192)",
                            pointRadius:6,
                            pointBackgroundColor:"rgb(75,192,89)",
                            backgroundColor:"rgb(75,192,192,0.3)",
                        },
                    ],
                    labels
                };
        },[]);

    return <Line data={data} options={options}/>
}