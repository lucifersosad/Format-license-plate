import './App.css';
import { useState } from 'react';

function App() {
  const [formattedNum, setFormattedNum] = useState("");

  const formatNum = () => {
    var licenseNum = document.querySelector("#licenseNum").value;
    console.log(formatBienSo(licenseNum))
    setFormattedNum(formatBienSo(licenseNum))
  }

  function formatBienSo(bienSo) {
    var firstPart = "";
    var secondPart = "";
    var hyphen = "-";
  
    try {
      var trimmedBienSo = bienSo.trim();
      for (var i = 0; i < trimmedBienSo.length; i++) {
        var char = trimmedBienSo[i];
        if (isAlphaNumeric(char) && firstPart.length < 4) {
          firstPart += char;
        } else {

          if (isNumeric(char) && secondPart.length < 5) {
            secondPart += char;
          }
        }
      }
      
      if (trueLicenseNum(firstPart.toUpperCase() + hyphen + secondPart)){
        return firstPart.toUpperCase() + hyphen + secondPart
      }
      return "Không thể format. Liên hệ dev để biết thêm chi tiết";
  
    } catch (error) {
      return bienSo;
    }
  }

  function isNumeric(char) {
    return !isNaN(parseFloat(char)) && isFinite(char);
  }
  
  function isAlphaNumeric(char) {
    return /^[a-zA-Z0-9]*$/.test(char);
  }

  function trueLicenseNum(chuoi) {
    var regex = /^[A-Z0-9]{3,4}-[0-9]{1,5}$/;
    return regex.test(chuoi);
  }

  return (
    <>
      <div style={{padding:"0 15px"}}>
        <h2>Format lisense number by Lucifer</h2>
        <div>
          Nhập biển số máy:
        </div>
        <span>
          <input id="licenseNum" type="text"/>
          <button onClick={formatNum}>Format</button>
        </span>
        <div style={{marginTop: "15px"}}>
          Biển số xe của bạn là:
          <span style={{color: "red", marginLeft: "10px"}}>
            {formattedNum}
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
