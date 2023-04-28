import './App.css';
import React, { useState } from 'react';
import { Button, Data, Display, SideData, Config, Result, Header } from './components';

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const [totalInvestments, setTotalInvestment] = useState(Number(0));//総投資
  const [investments, setInvestment] = useState(Number(0));// 投資金額（パッキーカード）
  const [credits, setCredit] = useState(Number(0));// クレジット（上皿）
  const [mochidama, setMochidama] = useState(Number(0));// 持ち球
  const [bonusTimes, setBonusTime] = useState(Number(0));// 大当たり回数
  const [isChanceTime, setIsChanceTime] = useState(false);// 確率変動
  const [start, setStart] = useState(Number(0));//回転数
  const [totalStart, setTotalStart] = useState(Number(0));//総回転数

  const [probabilityOfLeft, setProbabilityOfLeft] = useState(Number(process.env.REACT_APP_PROBABILITY_OF_LEFT))
  const [probabilityOfRight, setProbabilityOfRight] = useState(Number(process.env.REACT_APP_PROBABILITY_OF_RIGHT))
  const [weightOfChanceTime, setWeightOfChanceTime] = useState(Number(process.env.REACT_APP_WEIGHT_OF_CHANCE_TIME))
  const [weightOfNotChanceTime, setWeightOfNotChanceTime] = useState(Number(process.env.REACT_APP_WEIGHT_OF_NOT_CHANCE_TIME))
  const [leftBonus, seLeftBonus] = useState(Number(process.env.REACT_APP_LEFT_BONUS))
  const [superBigBonus, setSuperBigBonus] = useState(Number(process.env.REACT_APP_SUPER_BIG_BONUS))
  const [bigBonus, setBigBonus] = useState(Number(process.env.REACT_APP_BIG_BONUS))
  const [regularBonus, setRegularBonus] = useState(Number(process.env.REACT_APP_REGULAR_BONUS))
  const [weightOfSBB, setWeightOfSBB] = useState(Number(process.env.REACT_APP_WEIGHT_OF_SBB))
  const [weightOfBB, setWeightOfBB] = useState(Number(process.env.REACT_APP_WEIGHT_OF_BB))

  const [flg, setFlg] = useState(false)
  const [finish, setFinish] = useState(false);
  const [isQuick, setIsQuick] = useState(false);

  return (
    <div className="">
      <Header
        isQuick={isQuick}
        setIsQuick={setIsQuick}
      />
      <Config className=''
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        probabilityOfLeft={probabilityOfLeft}
        setProbabilityOfLeft={setProbabilityOfLeft}
        probabilityOfRight={probabilityOfRight}
        setProbabilityOfRight={setProbabilityOfRight}
        weightOfChanceTime={weightOfChanceTime}
        setWeightOfChanceTime={setWeightOfChanceTime}
        weightOfNotChanceTime={weightOfNotChanceTime}
        setWeightOfNotChanceTime={setWeightOfNotChanceTime}
        leftBonus={leftBonus}
        seLeftBonus={seLeftBonus}
        superBigBonus={superBigBonus}
        setSuperBigBonus={setSuperBigBonus}
        bigBonus={bigBonus}
        setBigBonus={setBigBonus}
        regularBonus={regularBonus}
        setRegularBonus={setRegularBonus}
        weightOfSBB={weightOfSBB}
        setWeightOfSBB={setWeightOfSBB}
        weightOfBB={weightOfBB}
        setWeightOfBB={setWeightOfBB}
      />
      <div className='container'>
        <Button className='hoge'
          investments={investments}
          setInvestment={setInvestment}
          credits={credits}
          setCredit={setCredit}
          mochidama={mochidama}
          setMochidama={setMochidama}
          totalInvestments={totalInvestments}
          setTotalInvestment={setTotalInvestment}
          finish={finish}
          setFinish={setFinish}
        />
        <Data
          bonusTimes={bonusTimes}
          start={start}
          totalStart={totalStart}
        />
        <SideData
          investments={investments}
          totalInvestments={totalInvestments}
          mochidama={mochidama}
        />
        <Display
          probabilityOfLeft={probabilityOfLeft}
          probabilityOfRight={probabilityOfRight}
          weightOfChanceTime={weightOfChanceTime}
          weightOfNotChanceTime={weightOfNotChanceTime}
          leftBonus={leftBonus}
          superBigBonus={superBigBonus}
          bigBonus={bigBonus}
          regularBonus={regularBonus}
          weightOfSBB={weightOfSBB}
          weightOfBB={weightOfBB}
          credits={credits}
          setCredit={setCredit}
          bonusTimes={bonusTimes}
          setBonusTime={setBonusTime}
          isChanceTime={isChanceTime}
          setIsChanceTime={setIsChanceTime}
          start={start}
          setStart={setStart}
          totalStart={totalStart}
          setTotalStart={setTotalStart}
          mochidama={mochidama}
          setMochidama={setMochidama}
          flg={flg}
          setFlg={setFlg}
          isQuick={isQuick}
          setIsQuick={setIsQuick}
        />
        <Result
          finish={finish}
          setFinish={setFinish}
          credits={credits}
          mochidama={mochidama}
          totalInvestments={totalInvestments}
          setCredit={setCredit}
          setBonusTime={setBonusTime}
          setIsChanceTime={setIsChanceTime}
          setStart={setStart}
          setTotalStart={setTotalStart}
          setMochidama={setMochidama}
          setInvestment={setInvestment}
          setTotalInvestment={setTotalInvestment}
          setFlg={setFlg}
        />
      </div>
      <div className='openAnimation'>
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default App;
