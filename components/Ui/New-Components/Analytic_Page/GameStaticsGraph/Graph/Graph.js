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
  Legend,
  {
    id: 'uniqueid5', //typescript crashes without id
    afterDraw: function (chart, easing) {
      if (chart.tooltip._active && chart.tooltip._active.length) {
        const activePoint = chart.tooltip._active[0];
        const ctx = chart.ctx;
        const x = activePoint.element.x;
        const topY = chart.scales.y.top;
        const bottomY = chart.scales.y.bottom;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#5d6182';
        ctx.stroke();
        ctx.restore();
      }
    }
  }
);

function Graph(props){

  const getSelectedVal = (frame, player) => {
    switch(props.selectedBtn.txt){
      case "Damage Dealt":
        return frame[`participant${player?.standingId}`]?.totalDamageDoneToChampions
      case "Creep Score":
        return frame[`participant${player?.standingId}`]?.stats?.creepScore
      case "Gold":
        return frame[`participant${player?.standingId}`]?.totalGold
      case "Experience":
        return frame[`participant${player?.standingId}`]?.xp
    }
  }

  const dataFetcher = (player) => {
    const data = []
    props.frames?.forEach((frame, index) => {
      if(index << frames.length-2){
         data.push(
          {x:`${index}:00`,y:getSelectedVal(frame, player)}
         )
      }
    });

    console.log(data);
    return data;
    
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    
    plugins: {
      legend: {
        display: false
      },
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
        <Line
          options={{
            ...options,
            interaction: {
              mode: 'index',
              intersect: false,
            }}} 
          data={data}
          // style={{width: "58vw", height: "32vh"}}
            style={{width: '900px', height: '180px'}}
        />
      </>
  )
}

export default Graph;