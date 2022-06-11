import { useEffect, useState } from "react"

export default function Time({newQuiz, isFinished}) {
    const [seconds, setSeconds] = useState(0)
    const [intervalId, setIntervalId] = useState(0)
    
    useEffect(() => {
          const newIntervalId = setInterval(() => {
            setSeconds(time => time + 1)
          }, 1000)
          setIntervalId(newIntervalId)
          return () => clearInterval(intervalId)
    }, [newQuiz]) 

    useEffect(() =>{
        clearInterval(intervalId)
    },[isFinished])

    useEffect(() =>{
        setSeconds(0)
    },[newQuiz])

    const sec = seconds%60 > 9 ? seconds%60 : '0' + seconds%60
    const min = (Math.floor(seconds/60))%60 > 9 ? (Math.floor(seconds/60))%60 : '0' + (Math.floor(seconds/60))%60 
    const hr = Math.floor(seconds/3600) > 9 ? Math.floor(seconds/3600) : '0' + Math.floor(seconds/3600)
    const showTime = hr + ':' + min + ':' + sec
  
    
    return (
      <span>
        {showTime}
      </span>
    );
}