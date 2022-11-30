import * as React from 'react';
import {useState, useEffect} from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

//MUI data grind get function


//modal style
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



//table columns 
const columns: GridColDef[] = [ 
  { field: 'no', headerName: 'No', width: 70, type : 'number',editable: true, },
  { field: 'sessionName', headerName: '구분', width: 130,editable: true, },
  { field: 'privateIp', headerName: 'private_ip', width: 130, editable: true, },
  { field: 'privatePort', headerName: 'private_port', width: 90, editable: true,},
  { field: 'publicIp', headerName: 'public_ip', width: 160, editable: true,},
  { field: 'publicPort', headerName: 'public_port', width: 160, editable: true,},
];

//table origin Data (백단에서 select 해온것.)
let originRows = [
    // { id: 1, no: 1, type: 'pri_inspector_1', privateIp : '10.10.118.10', privatePort: 10000, publicIp : '110.46.166.10', publicPort : '10000'},
    // { id: 2, no: 2, type: 'pri_inspector_2', privateIp : '10.10.118.10', privatePort: 10000, publicIp : '110.46.166.10', publicPort : '10000'},
    // { id: 3, no: 3, type: 'pri_inspector_3', privateIp : '10.9.26.10', privatePort: 10000, publicIp : 'NULL', publicPort : '0'}
];

function deleteApiCall(queryString){
    console.log(queryString);    
    fetch(queryString,
    {
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    method: "DELETE"
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
}


function updateApiCall(queryString){
    fetch(queryString, {
    headers :{
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    },
    method: "PATH"
    })
    .then(function(res){console.log(res)})
    .catch(function(res){console.log(res)})    
}




export default function SessionSet(){

    
    useEffect(()=> {        
        fetch('http://localhost:3001/session')
        .then(res => {
            return res.json();
        })
        .then(data => {            
            const json = JSON.parse(JSON.stringify(data));                    
            let rows = (json.sessionServer);
            for(var i = 0; i < rows.length; i++) rows[i].no = i+1;
            console.log(rows)
            originRows = rows;
            setRows(originRows);
        })
        
    },[])        

    
      


    //조회 기능관련 state, 사용 변수
    //rows가 조회될 데이터들이며 처음에는 originRows로 초기화한다.
    const [rows, setRows] = useState(originRows);

    
    // 임시 저장변수
    let temporaryRows =[];
    


    // Modal 관련 state
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);  

    //update 확인용 변수
    const [updateRows, setUpdateRows] = React.useState(false);
    


    
    return(
        <>       
        
        <Grid container>
            
            <Grid xs = {12}>
                <Typography sx ={{mt : 2}} variant="h4">Session Server</Typography> 
            </Grid>

            <Grid xs = {12} sx = {{mt : 2}}>
                <Box>                                              
                    <TextField id="keywordTextField" label="구분" variant="filled"/> 
                    
                    <Button variant="contained" sx = {{mt : 1, ml : 2}} onClick={() =>{                                                
                        //조회 버튼 event 

                        //수정사항이 있을경우
                        if(updateRows === true){                            
                            // modal 로 수정 error , suc 
                            if(!window.confirm("지금 조회하신다면 현재 SessionServer에 대한 작업사항이 사라집니다.")){                                                                
                                return;
                            }
                        }

                        var key = document.getElementById("keywordTextField").value;
                        originRows.map((obj, index)=>{
                            if(obj.type.search(key) > -1){
                                temporaryRows.push(obj);
                                // console.log(temporaryRows[index]);                                
                            }                                                                                    
                        })
                        setUpdateRows(false);
                        setRows(temporaryRows);

                    }}>조회</Button>
                </Box>
            </Grid>            

            <Grid xs ={10} sx ={{mt : 4}}>            
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={handleOpen}>추가</Button>
                    <Button onClick={() =>{                                                
                        var checkBoxs = document.getElementsByClassName("PrivateSwitchBase-input");
                        //임시 저장소 생성
                        rows.map((obj, index)=>{
                            temporaryRows.push(obj);
                        });
                        var queryString = "http://localhost:3001/session?";                        
                        var isQueryString = false;                        
                        for(var i = checkBoxs.length-1; i > 0; i--)
                            if(checkBoxs[i].checked){                                
                                if(isQueryString == false){queryString += "id="+ temporaryRows[i-1].id; isQueryString=true;}                                    
                                else queryString += "&id="+temporaryRows[i-1].id;                                
                                temporaryRows.splice(i-1,1);   
                            }                                

                        // console.log(temporaryRows);
                        setRows(temporaryRows);       
                        deleteApiCall(queryString);         
                        setUpdateRows(true);                        
                    }}>삭제</Button>
                    {/* <Button onClick={() =>{
                        var checkBoxs = document.getElementsByClassName("PrivateSwitchBase-input");
                        rows.map((obj, index)=>{
                            temporaryRows.push(obj);
                        });

                        
                        for(var i = 1; i < checkBoxs.length; i++){
                            
                            if(checkBoxs[i].checked  && i > 1){ // check 된 상태이며 i가 1보다 클때.                                
                                checkBoxs[i].checked = false;
                                var changeRow=[];
                                changeRow.push(temporaryRows[i-1]);// 현재 원소                                                                
                                changeRow.push(temporaryRows[i-2]); // 위에있는 원소
                                
                                //ID NO swap 
                                
                                changeRow[0].id = i-1;
                                changeRow[0].no = i-1;
                                
                                changeRow[1].id = i;
                                changeRow[1].no = i;

                                // console.log(changeRow);
                                temporaryRows.splice(i-2,2, changeRow[0], changeRow[1]); 
                                // console.log(temporaryRows);                                
                            }
                        }
                        setRows(temporaryRows);
                        
                    }}>위로</Button>
                    <Button onClick={() =>{

                        var checkBoxs = document.getElementsByClassName("PrivateSwitchBase-input");
                        originRows.map((obj, index)=>{
                            temporaryRows.push(obj);
                        });

                        
                        for(var i = 1; i < checkBoxs.length; i++){
                            
                            if(checkBoxs[i].checked  && checkBoxs.length-1 > i){ // check 된 상태이며 i가 1보다 클때.                                
                                checkBoxs[i].checked = false;
                                var changeRow=[];
                                changeRow.push(temporaryRows[i]); // 아래에 있는 원소
                                changeRow.push(temporaryRows[i-1]);// 현재 원소                                                                
                                //ID NO swap 
                                
                                changeRow[0].id = i;
                                changeRow[0].no = i;
                                
                                changeRow[1].id = i+1;
                                changeRow[1].no = i+1;

                                // console.log(changeRow);
                                temporaryRows.splice(i-1,2, changeRow[0], changeRow[1]); 
                                // console.log(temporaryRows);                                
                            }
                        }
                        setRows(temporaryRows);
                    }}>아래로</Button> */}
                </ButtonGroup>
                
            </Grid>
            <Grid xs = {2} sx ={{mt : 4}}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={() =>{
                    //원복
                    setRows(originRows);
                    setUpdateRows(false);
                }}>원래대로</Button>
                <Button onClick={() =>{
                    //적용시 DB 접근
                    setUpdateRows(false);   
                    // updateApiCall();                 
                }}>적용</Button>
            </ButtonGroup>
            </Grid>   
            <CreateTable rowData = {rows}/>
        </Grid>


        <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        >
        <Box sx={style}>
            <Typography id="keep-mounted-modal-title" variant="h6" component="h2" sx = {{mb : 3}}>
            Session Server 추가
            </Typography>
            
            <TextField id="typeTextField" label="구분" variant="filled" fullWidth sx = {{mb : 3}} required/>
            <input type="number" name = "no" id="no" value = {originRows.length} hidden required/>
            <TextField id="privateIp" label="private_ip" variant="filled" fullWidth sx = {{mb : 3}} required/>
            <TextField id="privatePort" label="private_port" variant="filled" fullWidth sx = {{mb : 3}} required/>
            <TextField id="publicIp" label="public_ip" variant="filled" fullWidth sx = {{mb : 3}} required/>
            <TextField id="publicPort" label="public_port" variant="filled" fullWidth sx = {{mb : 3}} required/>
            <Button type="submit" variant="contained" fullWidth onClick={() =>{
                let typeTextField = document.getElementById("typeTextField").value;
                let no = document.getElementById("no").value * 1 + 1;
                let privateIp = document.getElementById("privateIp").value;
                let privatePort = document.getElementById("privatePort").value;
                let publicIp  = document.getElementById("publicIp").value;
                let publicPort  = document.getElementById("publicPort").value;
                 
                originRows.map((obj, index)=>{
                    temporaryRows.push(obj);
                });
                temporaryRows.push({id : no, no: no, type: typeTextField, privateIp : privateIp, privatePort: privatePort, publicIp : publicIp, publicPort : publicPort});                                         
                setRows(temporaryRows);                
                setUpdateRows(true);
                handleClose();
            }}>추가</Button>
            

        </Box>
        </Modal>

        </>
    )
}



function CreateTable(props){
    
    return(
        <>
            <Grid xs = {12}>
            <Box style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={props.rowData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection    
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}            
                sx = {{mt : 2}}
            />
            </Box>    
            </Grid>
        </>
    )
}