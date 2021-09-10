import React, {useState}from 'react';
import QrReader from 'react-qr-reader';

const App = () => {
  const [Qr, setQr] = useState({
    result: 'No result'
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
    <div>
    <QrReader
      delay={300}
      onError={handleError}
      onScan={handleScan}
      style={{ width: '30%' }}
    />
    <p>{Qr.result}</p>
  </div>
  )
}


export default App;