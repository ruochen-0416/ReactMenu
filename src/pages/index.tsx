import React, { useState } from 'react';
import { render } from 'react-dom';
import styles from './index.less';
import Menu from '../componets/menu'
import Main from './main';


export default function HomePage() {
  const [inputValue, setInputValue] = useState("子菜单1-1");
  const [subArray, setSubArray] = useState(["子菜单1-1","子菜单1-2","子菜单2-1","子菜单2-2"]);
  const [subKey, setSubKey] = useState("子菜单1-1");

  return (
    <div className={styles.content}>
      <Menu subArray={subArray} setSubArray={setSubArray} subKey={subKey} setSubKey={setSubKey} inputValue={inputValue} setInputValue={setInputValue} />
      <Main subArray={subArray} setSubArray={setSubArray} subKey={subKey} setSubKey={setSubKey} inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
}