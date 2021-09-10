import React, {useState}from 'react';
import QrReader from 'react-qr-reader';
import "../styles/App.css";

const App = () => {
  //cambio de states a hook
  const [Qr, setQr] = useState({
    result: 'Escanea tu QR',
    camara: 'user'
  })
  const [mirror, setMirror] = useState({mirrorVideo: false});

  const [camara, setCamara] = useState('user')
 
  const handleOnChange = e =>{
    setQr({
      ...Qr,
      [e.target.name]: e.target.value,
    })
  }

  const handleScan = data => {
    if (data) {
      setQr({
        ...Qr,
        result: data
      })
    }
  }
  const handleError = err => {
    console.error(err)
  }
  const test = () =>{
    console.log(Qr);
  }

  return (
    <React.Fragment>
    <header>
      <img width ="180px" height ="80px" src='http://baluher.com/wp-content/uploads/2018/04/baluher_logo_w.png' alt="I'm an easter egg" />
      <h1>Tech demo</h1>
    </header>
    
    <center>
      <QrReader
        delay={50}
        onError={handleError}
        onScan={handleScan}
        onLoad={mirror.mirrorVideo}
        facingMode={Qr.camara}
        style={{ width: '30%' }}
      />
      <select name='camara' onChange={handleOnChange}>
        <option value="user">User</option>
        <option value="environment">environment</option>
      </select>
    
      <h2>{Qr.result}</h2>
    </center>
    </React.Fragment>
  )
}


export default App;