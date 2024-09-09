import * as React from 'react';
import Button from '@mui/material/Button';
import "./button.css";
export default function OutlinedButton(props) {
  const click = ()=>{
    props.onClick()
  }
  return (
    <div className='div'>
    <Button variant="outlined" onClick={click}>{props.title||''}</Button>
    </div>
  );
}