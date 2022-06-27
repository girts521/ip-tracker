import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header/Header'
import Map from './Map/Map'
import InfoPopUp from './InfoPopUp/InfoPopUp';

function App() {
const [inputText, setInputText] = useState<string | null>('')
const [resData, setResData] = useState<any> (null)

const getInputText = (text: string) => {
 setInputText(text)
}

const getData = (data:any) => {
  setResData(data)
  console.log('data:', data)
}

  return (
    <>   
<Header passText={getInputText} />
<InfoPopUp data={resData} />
<Map passData={getData} inputText={inputText!} />
    </>
  );
}

export default App;
