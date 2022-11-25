import * as React from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'no', headerName: 'No', width: 70, type : 'number' },
  { field: 'appId', headerName: 'AppID', width: 130 },
  { field: 'appURL', headerName: 'appURL', width: 400 },  
];

const rows = [
  { id: 1, no: 1, appId: 'home', appURL : 'http://10.10.118.20:6080/ICUI/home/0.0.1/'},
  { id: 2, no: 2, appId: 'alaska', appURL : 'http://10.10.118.20:6080/ICUI/home/0.0.1/'},
  { id: 3, no: 3, appId: 'channel', appURL : 'http://10.10.118.20:6080/ICUI/home/0.0.1/'},
  { id: 4, no: 4, appId: 'kids', appURL : 'http://10.10.118.20:6080/ICUI/home/0.0.1/'},
  { id: 5, no: 5, appId: 'clud', appURL : 'http://10.10.118.20:6080/ICUI/home/0.0.1/'},
  { id: 6, no: 6, appId: 'answer', appURL : 'http://10.10.118.20:6080/ICUI/home/0.0.1/'}, 
];



export default function serviceSet(){
    return(
        <>       
        
        <Grid container spacing={2}>
            <Grid xs = {12}>
                <Typography sx ={{mt : 2}} variant="h4">Private AppID</Typography> 
            </Grid>
            <Grid xs ={10}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx ={{mt : 2}}>
                    <Button>추가</Button>
                    <Button>삭제</Button>
                    <Button>위로</Button>
                    <Button>아래로</Button>
                </ButtonGroup>
            </Grid>
            <Grid xs = {2}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx ={{mt : 2}}>            
                    <Button>원래대로</Button>
                    <Button>적용</Button>
                </ButtonGroup>
            </Grid>   
            <Grid xs = {12}>
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={6}
                rowsPerPageOptions={[5]}
                checkboxSelection
                sx = {{mt : 2}}
            />
            </div>    
            </Grid>         

            

            <Grid xs = {12}>
                <Typography sx ={{mt : 4}} variant="h4">Public AppID</Typography> 
            </Grid>
            <Grid xs ={10}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx ={{mt : 2}}>
                    <Button>추가</Button>
                    <Button>삭제</Button>
                    <Button>위로</Button>
                    <Button>아래로</Button>
                </ButtonGroup>
            </Grid>
            <Grid xs = {2}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx ={{mt : 2}}>            
                    <Button>원래대로</Button>
                    <Button>적용</Button>
                </ButtonGroup>
            </Grid>   
            <Grid xs = {12}>
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={6}
                rowsPerPageOptions={[5]}
                checkboxSelection
                sx = {{mt : 2}}
            />
            </div>    
            </Grid>     
        </Grid>




        </>
    )
}