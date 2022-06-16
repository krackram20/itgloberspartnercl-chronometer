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



    // Calculates the time left till the end of the promo, and adds a cero to digits between 0 and 9


    const days = Math.floor(
      timeTillDate / (1000 * 60 * 60 * 24))
      .toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

    // We use the operator % to calculate the time left after calculating the days until the end,
    // and then we use the excess time to calculate the hours minutes and seconds

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
