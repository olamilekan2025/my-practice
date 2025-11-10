import { CountUp, useCountUp } from 'use-count-up'


function Stat({ end,label,duration=2}) {
    const {value} = useCountUp({isCounting : true, end,label,duration});
    return (
      <div className="CountUp-stat">
        <span className='CountUp-value'>{value}</span>
        <span className='CountUp-label'>{label}</span>
      </div>
    )
}

function CountUpStats(){
    return (
          <div className="Countup-stat-container">
            <Stat  end={6000} label="Land" duration={2.5}/>
            <Stat  end={300} label="house" duration={2.5}/>
            <Stat  end={600} label="cars" duration={2.5}/>
        </div>
    )
}

export default CountUpStats;
