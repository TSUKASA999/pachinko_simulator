import React, { useState, useEffect } from 'react'

const Result = (props) => {
    const [results, setResults] = useState(Number(0))
    const showResult = () => {
        if (props.finish) {
            props.setFlg(false)
            setResults((props.mochidama + props.credits) * 4 - props.totalInvestments)
            console.log(results)
        }
    }

    useEffect(() => {
        showResult()
    }, [props.finish])

    const handleContinue = () => {
        // stateはそのまま
        props.setFinish(false)
    }

    const handleReset = () => {
        // 設定以外のstateをリセット
        props.setCredit(0)
        props.setBonusTime(0)
        props.setIsChanceTime(0)
        props.setStart(0)
        props.setTotalStart(0)
        props.setInvestment(0)
        props.setTotalInvestment(false)
        props.setMochidama(0)
        props.setFinish(false)
    }

    return (
        <div className={props.finish ? 'is-show modal-wrapper' : 'modal-wrapper'}>
            <div className='modalContents'>
                <h2>RESULT</h2>
                <table className='result'>
                    <thead>
                        <tr>
                            <td>総投資</td><td className={props.finish ? 'resultTotalInvestment' : ''}>{props.totalInvestments}円</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>持ち球</td><td className={props.finish ? 'resultMochidama' : ''}>{props.mochidama + props.credits}玉</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>結果</td><td className={props.finish ? 'results' : ''}>{results >= 0 ? '+' + results : results}円</td>
                        </tr>
                    </tbody>
                </table>
                {results >= 0 ?
                    <p className={props.finish ? 'win' : ''}
                        >YOU WIN</p>
                    :
                    <p className={props.finish ? 'lose' : ''}>
                        YOU LOSE</p>
                }
                <p>
                    <button className='resultButton' onClick={handleContinue}>Continue</button>
                    <button className='resultButton' onClick={handleReset}>reset</button>
                </p>
            </div>
        </div>
    )
}

export default Result