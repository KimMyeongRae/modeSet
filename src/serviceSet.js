import * as React from 'react';
import {useState} from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'no', headerName: 'No', width: 70, type : 'number' },
  { field: 'serverName', headerName: '서버 이름', width: 130 },
  { field: 'ip', headerName: 'ip', width: 130 },
  { field: 'port', headerName: 'port', width: 90},
  { field: 'inspectorPort', headerName: 'inspector_port', width: 160},
];

const rows = [
  { id: 1, no: 1, serverName: 'pri_inspector_1', ip : '10.10.118.206', port: 35001, inspectorPort : '36001' },
  { id: 2, no: 2, serverName: 'pri_inspector_2', ip : '10.10.118.206',port: 35002, inspectorPort : '36002' },
  { id: 3, no: 3, serverName: 'pri_inspector_3', ip : '10.10.118.206',port: 35003, inspectorPort : '36003' },
  { id: 4, no: 4, serverName: 'pri_inspector_4', ip : '10.10.118.206',port: 35004, inspectorPort : '36004' },
  { id: 5, no: 5, serverName: 'pri_inspector_5', ip : '10.10.118.207',port: 35001, inspectorPort : 'NULL' },
  { id: 6, no: 6, serverName: 'pri_inspector_6', ip : '10.10.118.207',port: 35002, inspectorPort : 'NULL' },
  { id: 7, no: 7, serverName: 'pri_inspector_7', ip : '10.10.118.207',port: 35003, inspectorPort : 'NULL' },
  { id: 8, no: 8, serverName: 'pri_inspector_8', ip : '10.10.118.207',port: 35004, inspectorPort : 'NULL' },
];



function PrivateServiceServer(){
    return(
        <>
            <Grid xs = {12}>
                <Typography sx ={{mt : 2}} variant="h4">Private Service Server</Typography> 
            </Grid>
            <Grid xs ={10}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx ={{mt : 2}}>
                    <Button>추가</Button>
                    <Button>삭제</Button>
                </ButtonGroup>
            </Grid>
            <Grid xs = {2}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx ={{mt : 2}}>            
                    <Button>원래대로</Button>
                    <Button>적용</Button>
                </ButtonGroup>
            </Grid>   
            <Grid xs = {12}>
                <Box style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        sx = {{mt : 2}}
                    />
                </Box>    
            </Grid>         
        </>
    )
}


function PublicServiceServer(){
    return(
        <>
        <Grid xs = {12}>
                <Typography sx ={{mt : 4}} variant="h4">Public Service Server</Typography> 
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
            <Box style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    sx = {{mt : 2}}
                />
            </Box>    
        </Grid>     
        </>
    )
}

export default function ServiceSet(){
    var content;
    const [page, setPage] = useState(1);
    
    if(page == 1)content = <PrivateServiceServer></PrivateServiceServer>
    else content = <PublicServiceServer></PublicServiceServer>
    
    return(
        <>       
        {/* {page = 1 ? <Button onClick = {() => {setPage(2)}}>Private</Button> : <Button onClick = {() => {setPage(1)}}>Public</Button>} */}
        
        <Grid container spacing={2}>
            

            {content}

            
        </Grid>




        </>
    )
}