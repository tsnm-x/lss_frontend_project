import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Graph(props){

  const dataFetcher = (player) => {
    const data = []
    props.frames?.forEach((frame, index) => {
      if(index << frames.length-2){
         data.push(
          {x:`${index}:00`,y:frame[`participant${player?.standingId}`]?.totalDamageDoneToChampions}
         )
      }
    });

    console.log(data);
    return data;
    
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const getFramesNumber = () => {
    const nums = [];
    for(let i = 0; i < props.frames?.length-2; i++){
      nums.push(`${i}:00`)
    }

    return nums
  }

  const data = {
    labels: [...getFramesNumber()],
    datasets: [
      ...props.selectedPlayers?.map((player)=> {
        return {
          label: `${player?.summonerName}`,
          data: dataFetcher(player),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          showLine: true
        }
      })
    ],
  };

  return (
      <>
        {props.selectedPlayers && 
        <Line
          options={options}
          data={data}
        />}
      </>
  )
}

export default Graph;