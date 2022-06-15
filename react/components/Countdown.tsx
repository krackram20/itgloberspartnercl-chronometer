import React, { useEffect, useState } from "react";

type Props={
  promotionEndDate : string,
  containerClassName : string,
  contentClassName : string,
  numberClassName: string
}

const Countdown = (
  {promotionEndDate = "2022-08-01T04:30:00Z",
   containerClassName,
   contentClassName,
   numberClassName
  } :Props) => {

  const countDownDate = new Date(promotionEndDate).getTime()

  const [timeTillDate, setTimeTillDate] = useState<number>(
    countDownDate - new Date().getTime()
  )

  useEffect(() => {
    const interval = setInterval( () => {
      setTimeTillDate(countDownDate - new Date().getTime())
    }, 1000)
    return () => clearInterval(interval)
  }, [countDownDate])



    // calculamos tiempo hasta fin de promocion y especificamos dos digitos cuando el contador este entre 0 y 10


    const days = Math.floor(
      timeTillDate / (1000 * 60 * 60 * 24))
      .toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

    // usamos el operador % para saber el excedente de tiempo una vez calculados los dias y definimos las horas, minutos y segundos a partir de este excedente

    const hours = Math.floor(
      (timeTillDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      .toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

    const minutes = Math.floor(
      (timeTillDate % (1000 * 60 * 60)) / (1000 * 60))
      .toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

    const seconds = Math.floor(
      (timeTillDate % (1000 * 60)) / 1000)
      .toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

    return  (
      <div className= {containerClassName}
      style ={
        {
          width: '300px',
          display: 'flex',
          alignItems: 'center'

        }
      }>
          <div className= {numberClassName}>
            {days}
            <p className= {contentClassName}>days</p>
          </div>
          <div className= {numberClassName}>
            {hours}
            <p className= {contentClassName}>hours</p>
          </div>
          <div className= {numberClassName}>
            {minutes}
            <p className= {contentClassName}>minutes</p>
          </div>
          <div className= {numberClassName}>
            {seconds}
            <p className= {contentClassName}>seconds</p>
          </div>

      </div>
    )
  };



export default Countdown
