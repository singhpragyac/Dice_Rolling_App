import { useState, useCallback, useEffect } from 'react'

function App() {
  let parentdiv = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    backgroundColor:"white"
  }

   let dicestyle = {
    height: "200px", 
    width: "200px", 
    backgroundColor:" purple", 
    display:" flex", 
    justifyContent: "center", 
    alignItems: "center",
    fontSize: "110px",
    color:"white"
   } 

   const [onedice, setOneDice] = useState();
   const [twodice, setTwoDice] = useState();

   let randomenumber = useCallback(() => {

    let fdice = "";
    let sdice = "";

    let dicenumbers = "123456";
    let pickforone = Math.floor(Math.random() * dicenumbers.length + 1);
    let pickfortwo = Math.floor(Math.random() * dicenumbers.length + 1);

    fdice = pickforone;
    sdice = pickfortwo;
    setOneDice(fdice);
    setTwoDice(sdice);

   },[onedice,twodice]);

  //  useEffect(() => {
  //   randomenumber()
  //  }, [onedice,twodice, randomenumber])

  return (
    <>
      <div
      style={parentdiv}>
      <div style={{display: "flex", gap: "20px" }}>

        <div style={dicestyle}>
          {onedice}
        </div>

        <div style={dicestyle}>
          {twodice}
        </div>

      </div>

      <button type='button' style={{height:"50px", width:"100px",backgroundColor:"black"}} onClick={randomenumber}>Roll Dice!</button>
    </div>
    </>
  )
}

export default App
