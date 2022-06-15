import React from "react";
import Countdown from "./Countdown";
import { useCssHandles } from 'vtex.css-handles'

type Props = {
  promotionEndDate: string,
  promotionImage: string
}


const Chronometer = ({promotionEndDate, promotionImage}: Props) => {

const CSS_HANDLES = ['main__container',
                      'image',
                      'chronometer__container',
                      'chronometer__content',
                      'chronometer__number'
                    ]

const handles = useCssHandles(CSS_HANDLES)


  return (
    <div className={handles.main__container}
        style = {
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }
        }>
        <div
        style = {
          {
            height: "150px",
            width: "1080px"
          }
        }>
          <img  className={handles.image} src={promotionImage}  alt = "Promotion Image" />
        </div>
        <Countdown
          promotionEndDate={promotionEndDate}
          containerClassName={handles.chronometer__container}
          contentClassName = {handles.chronometer__content}
          numberClassName = {handles.chronometer__number} />
    </div>

  )
}


Chronometer.schema = {
  title: "Chronometer",
  type: "object",
  properties: {
    promotionImage: {
      title: "imagen para el cronometro",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    promotionEndDate: {
      title: "Fin de promocion",
      type: "string",
      widget: {
        "ui:widget": "date-time"
      }
    }
  }

}




export default Chronometer
