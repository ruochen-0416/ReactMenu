import React, { useState } from 'react'
import { Button, Input } from 'antd';
import styles from './index.less';

export default function index(props: any) {
  let {subArray , setSubArray , subKey , setSubKey , inputValue , setInputValue} = props

  const editValue = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
    setInputValue(e.target.value)
  }

  const save = () =>{
    setSubArray(inputValue)
    if(inputValue !== ""){
      let newArr: any[] = []
      subArray.map((item: any)=>{
        if(item !== subKey){
          newArr.push(item)
        }else{
          newArr.push(inputValue)
        }
      })
      setSubArray(newArr)
      setSubKey(inputValue)
    }else{
      alert("子菜单不能为空")
      setSubArray(subArray)
    }
  }
  return (
    <div className={styles.content}>
        <Input value={inputValue} onChange={editValue} style={{height:"34px"}}/>
        <Button type="primary" onClick={save}>保存</Button>
    </div>
  )
}
