import React, {useState}from 'react';
import QrReader from 'react-qr-reader';
import "../styles/App.css";
const App = () => {
  //cambio de states a hook
  const [Qr, setQr] = useState({
    result: 'Escanea tu QR'
  })
 
  const handleScan = data => {
    if (data) {
      setQr({
        result: data
      })
    }
  }
  const handleError = err => {
    console.error(err)
  }

  return (
    <React.Fragment>
    <h1>Tech demo</h1>
    <QrReader
      delay={300}
      onError={handleError}
      onScan={handleScan}
      style={{ width: '30%' }}
    />
    <h2>{Qr.result}</h2>
    </React.Fragment>
  )
}


export default App;