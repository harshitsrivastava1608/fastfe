
import ButtonAppBar from "./components/appbar";
import OutlinedButton from "./components/button";
import BasicPie from "./components/pie";
import BasicTextFields from "./components/textfield";
import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';

function App() {
  const [ctc,setCtc]=useState(0)
  const [inhand,setInhand]=useState(0)
  const [expend,setExpend]=useState(0)
  
  return (
   <>
   <ButtonAppBar/>
   <Grid container spacing={2}>
    <Grid size={6}>
   <BasicTextFields input={ctc} title="CTC" onChange={setCtc}/>
   <BasicTextFields input={inhand} title="In Hand" onChange={setInhand}/>
   <BasicTextFields input={expend} title="Expenditure" onChange={setExpend}/>
   <OutlinedButton  title="Try It Out" />
   </Grid>
   <Grid size={6}>
   <BasicPie a={ctc} b={inhand} c={expend}/>
   </Grid>
   </Grid>
   </>

  );
}

export default App;
