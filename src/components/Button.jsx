import React, { } from 'react'

const Button = (props) => {
  // const [price, setPrice] = useState(Number(1000));
  // const handleChange = (e) => {
  //   setPrice(e.target.value);
  // }

  const handleInvestment = (e) => {
    if (props.investments === 0) {
      props.setInvestment(props.investments + Number(e.target.value));
    }
  }

  const handleTamakashi = () => {
    if (props.mochidama >= 125) {
      props.setCredit(props.credits + 125);
      props.setMochidama(props.mochidama - 125)
    } else if (props.mochidama > 0) {
      props.setCredit(props.credits + props.mochidama)
      props.setMochidama(0)
    } else if (props.investments >= 500) {
      props.setCredit(props.credits + 125);
      props.setInvestment(props.investments - 500)
      props.setTotalInvestment(props.totalInvestments + 500)
    } else {
      window.alert('入金して下さい')
    }
  }

  const handleFinish = () => {
    props.setFinish(true)
  }

  return (
    <>
      <div className="cash">
        <button value="1000" onClick={handleInvestment}>1000</button>
        <button value="5000" onClick={handleInvestment}>5000</button>
        <button value="10000" onClick={handleInvestment}>10000</button>
      </div>
      <div className='tamakashi'>
        <p className='uwazara'>上皿</p>
        <p className='credits'>
          <span>{props.credits}</span>
          玉
        </p>
        <button className='tamakashiBtn' onClick={handleTamakashi}>玉貸</button>
        <button className='finishBtn' onClick={handleFinish}>返却</button>
      </div>
    </>
  )
}

export default Button