import React, { useState } from 'react'

const Config = (props) => {
    // ミドルスペック
    const middleProbabilityOfLeft = Number(process.env.REACT_APP_MIDDLE_PROBABILITY_OF_LEFT)
    const middleProbabilityOfRight = Number(process.env.REACT_APP_MIDDLE_PROBABILITY_OF_RIGHT)
    const middleWeightOfChanceTime = Number(process.env.REACT_APP_MIDDLE_WEIGHT_OF_CHANCE_TIME)
    const middleWeightOfNotChanceTime = Number(process.env.REACT_APP_MIDDLE_WEIGHT_OF_NOT_CHANCE_TIME)
    const middleLeftBonus = Number(process.env.REACT_APP_MIDDLE_LEFT_BONUS)
    const middleSuperBigBonus = Number(process.env.REACT_APP_MIDDLE_SUPER_BIG_BONUS)
    const middleBigBonus = Number(process.env.REACT_APP_MIDDLE_BIG_BONUS)
    const middleRegularBonus = Number(process.env.REACT_APP_MIDDLE_REGULAR_BONUS)
    const middleWeightOfSBB = Number(process.env.REACT_APP_MIDDLE_WEIGHT_OF_SBB)
    const middleWeightOfBB = Number(process.env.REACT_APP_MIDDLE_WEIGHT_OF_BB)
    const middleWeightOfRB = Number(process.env.REACT_APP_MIDDLE_WEIGHT_OF_RB)
    // ライトミドルスペック
    const lightMiddleProbabilityOfLeft = Number(process.env.REACT_APP_LIGHT_MIDDLE_PROBABILITY_OF_LEFT)
    const lightMiddleProbabilityOfRight = Number(process.env.REACT_APP_LIGHT_MIDDLE_PROBABILITY_OF_RIGHT)
    const lightMiddleWeightOfChanceTime = Number(process.env.REACT_APP_LIGHT_MIDDLE_WEIGHT_OF_CHANCE_TIME)
    const lightMiddleWeightOfNotChanceTime = Number(process.env.REACT_APP_LIGHT_MIDDLE_WEIGHT_OF_NOT_CHANCE_TIME)
    const lightMiddleLeftBonus = Number(process.env.REACT_APP_LIGHT_MIDDLE_LEFT_BONUS)
    const lightMiddleSuperBigBonus = Number(process.env.REACT_APP_LIGHT_MIDDLE_SUPER_BIG_BONUS)
    const lightMiddleBigBonus = Number(process.env.REACT_APP_LIGHT_MIDDLE_BIG_BONUS)
    const lightMiddleRegularBonus = Number(process.env.REACT_APP_LIGHT_MIDDLE_REGULAR_BONUS)
    const lightMiddleWeightOfSBB = Number(process.env.REACT_APP_LIGHT_MIDDLE_WEIGHT_OF_SBB)
    const lightMiddleWeightOfBB = Number(process.env.REACT_APP_LIGHT_MIDDLE_WEIGHT_OF_BB)
    const lightMiddleWeightOfRB = process.env.REACT_APP_LIGHT_MIDDLE_WEIGHT_OF_RB
    // 甘デジスペック
    const amaProbabilityOfLeft = Number(process.env.REACT_APP_AMA_PROBABILITY_OF_LEFT)
    const amaProbabilityOfRight = Number(process.env.REACT_APP_AMA_PROBABILITY_OF_RIGHT)
    const amaWeightOfChanceTime = Number(process.env.REACT_APP_AMA_WEIGHT_OF_CHANCE_TIME)
    const amaWeightOfNotChanceTime = Number(process.env.REACT_APP_AMA_WEIGHT_OF_NOT_CHANCE_TIME)
    const amaLeftBonus = Number(process.env.REACT_APP_AMA_LEFT_BONUS)
    const amaSuperBigBonus = Number(process.env.REACT_APP_AMA_SUPER_BIG_BONUS)
    const amaBigBonus = Number(process.env.REACT_APP_AMA_BIG_BONUS)
    const amaRegularBonus = Number(process.env.REACT_APP_AMA_REGULAR_BONUS)
    const amaWeightOfSBB = Number(process.env.REACT_APP_AMA_WEIGHT_OF_SBB)
    const amaWeightOfBB = Number(process.env.REACT_APP_AMA_WEIGHT_OF_BB)
    // const amaWeightOfRB = process.env.REACT_APP_AMA_WEIGHT_OF_RB

    const [isMiddle, setIsMiddle] = useState(false)
    const [isLightMiddle, setIsLightMiddle] = useState(false)
    const [isAma, setIsAma] = useState(false)

    const handleOpenMiddle = () => {
        setIsMiddle(true)
        setIsLightMiddle(false)
        setIsAma(false)
    }
    const handleOpenLightMiddle = () => {
        setIsMiddle(false)
        setIsLightMiddle(true)
        setIsAma(false)
    }
    const handleOpenAma = () => {
        setIsMiddle(false)
        setIsLightMiddle(false)
        setIsAma(true)
    }

    const handleSetMiddle = () => {
        if (window.confirm('このスペックでよろしいですか？')) {
            props.setProbabilityOfLeft(middleProbabilityOfLeft)
            props.setProbabilityOfRight(middleProbabilityOfRight)
            props.setWeightOfChanceTime(middleWeightOfChanceTime)
            props.setWeightOfNotChanceTime(middleWeightOfNotChanceTime)
            props.seLeftBonus(middleLeftBonus)
            props.setSuperBigBonus(middleSuperBigBonus)
            props.setBigBonus(middleBigBonus)
            props.setRegularBonus(middleRegularBonus)
            props.setWeightOfSBB(middleWeightOfSBB)
            props.setWeightOfBB(middleWeightOfBB)
            props.setModalOpen(true)
        }
    }
    const handleSetLightMiddle = () => {
        if (window.confirm('このスペックでよろしいですか？')) {
            props.setProbabilityOfLeft(lightMiddleProbabilityOfLeft)
            props.setProbabilityOfRight(lightMiddleProbabilityOfRight)
            props.setWeightOfChanceTime(lightMiddleWeightOfChanceTime)
            props.setWeightOfNotChanceTime(lightMiddleWeightOfNotChanceTime)
            props.seLeftBonus(lightMiddleLeftBonus)
            props.setSuperBigBonus(lightMiddleSuperBigBonus)
            props.setBigBonus(lightMiddleBigBonus)
            props.setRegularBonus(lightMiddleRegularBonus)
            props.setWeightOfSBB(lightMiddleWeightOfSBB)
            props.setWeightOfBB(lightMiddleWeightOfBB)
            props.setModalOpen(true)
        }
    }
    const handleSetAma = () => {
        if (window.confirm('このスペックでよろしいですか？')) {
            props.setProbabilityOfLeft(amaProbabilityOfLeft)
            props.setProbabilityOfRight(amaProbabilityOfRight)
            props.setWeightOfChanceTime(amaWeightOfChanceTime)
            props.setWeightOfNotChanceTime(amaWeightOfNotChanceTime)
            props.seLeftBonus(amaLeftBonus)
            props.setSuperBigBonus(amaSuperBigBonus)
            props.setBigBonus(amaBigBonus)
            props.setRegularBonus(amaRegularBonus)
            props.setWeightOfSBB(amaWeightOfSBB)
            props.setWeightOfBB(amaWeightOfBB)
            props.setModalOpen(true)
        }
    }

    return (
        <div className={!props.modalOpen ? 'is-show modal-wrapper' : 'modal-wrapper'}>
            <div className='modalContents'>
                <h2>SPEC SELECT</h2>
                <div className='specSelect'>
                    <button className='selectMiddle' onClick={handleOpenMiddle}>MIDDLE</button>
                    <button className='selectLightMiddle' onClick={handleOpenLightMiddle}>LIGHT MIDDLE</button>
                    <button className='selectAma' onClick={handleOpenAma}>AMA</button>
                    <table className={isMiddle ? 'aboutMiddle' : 'hidden'}>
                        <thead>
                            <tr>
                                <th>通常時大当たり確率</th><th></th><th>1/{middleProbabilityOfLeft}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>右打ち時大当たり確率</td><td></td><td>1/{middleProbabilityOfRight}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>確変突入率</td><td></td><td>{middleWeightOfChanceTime}%</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>非確変突入率</td><td></td><td>{middleWeightOfNotChanceTime}%</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>初当たり時出玉</td><td>{middleLeftBonus}玉</td><td></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>SUPER BIG BONUS</td><td>{middleSuperBigBonus}玉</td><td>{middleWeightOfSBB}%</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>BIG BONUS</td><td>{middleBigBonus}玉</td><td>{middleWeightOfBB}%</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>REGULAR BONUS</td><td>{middleRegularBonus}玉</td><td>{middleWeightOfRB}%</td>
                            </tr>
                        </tbody>

                    </table>
                    <table className={isLightMiddle ? 'aboutLightMiddle' : 'hidden'}>
                        <thead>
                            <tr>
                                <th>通常時大当たり確率</th><th></th><th>1/{lightMiddleProbabilityOfLeft}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>右打ち時大当たり確率</td><td></td><td>1/{lightMiddleProbabilityOfRight}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>確変突入率</td><td></td><td>{lightMiddleWeightOfChanceTime}%</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>非確変突入率</td><td></td><td>{lightMiddleWeightOfNotChanceTime}%</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>初当たり時出玉</td><td>{lightMiddleLeftBonus}玉</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>SUPER BIG BONUS</td><td>{lightMiddleSuperBigBonus}玉</td><td>{lightMiddleWeightOfSBB}%</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>REGULAR BONUS</td><td>{lightMiddleRegularBonus}玉</td><td>{lightMiddleWeightOfRB}%</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={isAma ? 'aboutAma' : 'hidden'}>
                        <thead>
                            <tr>
                                <th>通常時大当たり確率</th><th></th><th>1/{amaProbabilityOfLeft}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>右打ち時大当たり確率</td><td></td><td>1/{amaProbabilityOfRight}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>確変突入率</td><td></td><td>{amaWeightOfChanceTime}%</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>非確変突入率</td><td></td><td>{amaWeightOfNotChanceTime}%</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>初当たり時出玉</td><td>{amaLeftBonus}玉</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>SUPER BIG BONUS</td><td>{amaSuperBigBonus}玉</td><td>{amaWeightOfSBB}%</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>BIG BONUS</td><td>{amaBigBonus}玉</td><td>{amaWeightOfBB}%</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>REGULAR BONUS</td><td>{amaRegularBonus}玉</td><td>{100 - amaWeightOfSBB - amaWeightOfBB}%</td>
                            </tr>
                        </tbody>
                    </table>
                    {isMiddle ? <button className='startMiddle' onClick={handleSetMiddle}>このスペックで遊ぶ</button> : ''}
                    {isLightMiddle ? <button className='startLightMiddle' onClick={handleSetLightMiddle}>このスペックで遊ぶ</button> : ''}
                    {isAma ? <button className='startAma' onClick={handleSetAma}>このスペックで遊ぶ</button> : ''}
                </div>
            </div>
        </div>
    )
}

export default Config