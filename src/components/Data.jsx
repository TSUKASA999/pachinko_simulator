import React from 'react'

const Data = (props) => {

  return (
    <div className='data'>
      <p className='bonusTimes'>大当
        <span>{props.bonusTimes}</span>
      </p>
      <p className='start'>スタート
        <span>{props.start}</span>
      </p>
      <p className='totalStart'>総スタート
        <span>{props.totalStart}</span>
      </p>
    </div>
  )
}

export default Data