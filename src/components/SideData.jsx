import React from 'react'

const SideData = (props) => {
    return (
        <div className='sideData'>
            <div className='totalInvestments'>
                <p>総投資</p>
                <p>{props.totalInvestments}円</p>
            </div>
            <div className='investments'>
                <p>カード残高</p>
                <p>{props.investments}円</p>
            </div>
            <div className='mochidama'>
                <p>持球</p>
                <p>{props.mochidama}玉</p>
            </div>
            {/* <p>上皿：{props.credits}</p> */}
        </div>
    )
}

export default SideData