import {styleStrToObject} from './utils'

const IconBack =(props:svgProps) => {
  const { width = 24,height = 24 } = props;
  return (
    <svg  class="icon" style={styleStrToObject(`display: block; height: ${height}px; width: ${width}px; fill: currentcolor;`)}
    viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5112" width="200" height="200"><path d="M538.288 198.624l-11.312-11.312a16 16 0 0 0-22.64 0L187.312 504.336a16 16 0 0 0 0 22.64L504.336 844a16 16 0 0 0 22.64 0l11.312-11.312a16 16 0 0 0 0-22.624l-294.4-294.4 294.4-294.4a16 16 0 0 0 0-22.64z" fill="#000000" p-id="5113"></path></svg>
  )
}

export default IconBack