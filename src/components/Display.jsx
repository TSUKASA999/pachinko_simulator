import React, { useRef, useEffect } from 'react'

const Display = (props) => {
    const normalHit = 1;//通常時大当たり
    const kakuhenHit = 1;

    const speedOfNormalShoot = Number(process.env.REACT_APP_SPEED_OF_NORMAL_SHOOT)
    const speedOfQuickShoot = Number(process.env.REACT_APP_SPEED_OF_QUICK_SHOOT)

    const isQuickRef = useRef(props.isQuick)
    isQuickRef.current = props.isQuick
    const creditsRef = useRef(props.credits)
    creditsRef.current = props.credits
    const startRef = useRef(props.start)
    startRef.current = props.start
    const totalStartRef = useRef(props.totalStart)
    totalStartRef.current = props.totalStart

    const isKakuhen = () => {
        const data = { '確変': props.weightOfChanceTime, '通常': props.weightOfNotChanceTime }
        const rand = Math.floor(Math.random() * 100)
        let rate = 0
        for (const prop in data) {
            rate += data[prop]
            if (rand <= rate) {
                window.alert('通常')
                break
            } else {
                window.alert('確変')
                props.setIsChanceTime(true)
                break
            }
        }
    }

    const kakuhenLottery = () => {
        props.setStart(startRef.current + 1)
        props.setTotalStart(totalStartRef.current + 1)
        const number = Math.floor(Math.random() * props.probabilityOfRight)
        if (kakuhenHit === number) {
            window.alert('BONUS')
            clearInterval()
            props.setFlg(false)
            bonusLottery()
        } else {
            console.log('NEXT')
        }
    }

    const bonusLottery = () => {
        const data = {
            'SUPER BIG BONUS': props.weightOfSBB,//SBの確率
            'BIG BONUS': props.weightOfBB,//BBの確率
            //100 - SB -BB = RBの確率
        }
        const rand = Math.floor(Math.random() * 100)
        let result = '';
        let rate = 0
        for (const prop in data) {
            rate += data[prop]
            if (rand <= rate) {
                result = prop;
                break
            } else {
                result = 'BONUS'
            }
        }

        props.setBonusTime(props.bonusTimes + 1);

        switch (result) {
            case 'SUPER BIG BONUS':
                window.alert('SUPER BIG BONUS')
                props.setMochidama(props.mochidama + props.superBigBonus)
                break;
            case 'BIG BONUS':
                window.alert('BIG BONUS')
                props.setMochidama(props.mochidama + props.bigBonus)
                break;
            case 'BONUS':
                props.setMochidama(props.mochidama + props.regularBonus)
                props.setIsChanceTime(false)
                window.alert('左打ちに戻してくれ')
                break;
            default:
                window.alert('係員を呼んでください')
        }
        props.setStart(0)
    }

    // n回転/1kの処理
    const normalHandle = () => {
        if (creditsRef.current <= 0) {
            window.alert('玉がありません')
            clearInterval()
            props.setFlg(false)
            return
        } else {
            props.setCredit(creditsRef.current - 1)
            const number = Math.floor(Math.random() * 10)
            if (number === normalHit) {
                normalLottery()
            }
        }
    }

    // 通常時の抽選
    const normalLottery = () => {
        const number = Math.floor(Math.random() * props.probabilityOfLeft)
        if (number === normalHit) {
            clearInterval()
            props.setFlg(false)
            window.alert('大当たり!')
            props.setMochidama(props.mochidama + props.leftBonus)
            props.setBonusTime(props.bonusTimes + 1)
            isKakuhen();
            props.setStart(0)
        } else {
            console.log('next')
            props.setStart(startRef.current + 1)
        }
        props.setTotalStart(totalStartRef.current + 1)
    }


    let interval = null

    useEffect(() => {
        if (props.flg) {
            console.log('開始')
            interval = setInterval(() => {
                if (!props.isChanceTime) {
                    normalHandle()
                } else {
                    kakuhenLottery()
                }
            },
                isQuickRef.current ? speedOfQuickShoot : speedOfNormalShoot
            )
            return () => {
                console.log('停止')
                clearInterval(interval)
            }
        }
    }, [props.flg, isQuickRef.current])


    return (
        <>
            <button onClick={() => props.setFlg(!props.flg)} className={props.flg ? 'active handle' : 'handle'}>handle</button>
            <div className='display'>
                {props.isChanceTime
                    ?
                    '確変'
                    :
                    '通常'
                }
            </div>
        </>
    )
}

export default Display