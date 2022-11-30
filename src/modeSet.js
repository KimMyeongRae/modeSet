import React, { Fragment } from "react";
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Button from '@mui/material/Button';
import {styled} from "@mui/material/styles"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import {useState} from 'react';
import { CheckBox, ConstructionOutlined } from "@mui/icons-material";

// import { makeStyles } from "@mui/material";
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
const typographyStyle = {
  fontSize : "0.875rem",
  fontWeight : 900,
  webkitUserSelect:"none",
  mozUserSelect:"none",
  msUserSelect:"none",
  userSelect:"none",
  cursor : "pointer",
}
const SearchBtn = styled(Button)({  
  height : "24.5",
  padding : "0",  
  minWidth : "20px",
})
const TableRowCell = styled(TableCell)({
  border : "1px solid rgba(224, 224, 224, 1)",
  
  
  textAlign : "center",
})

const TableHeadCell = styled(TableCell)({
  background : "rgba(210, 210, 210, 1)",
  fontWeight : "900",
  textAlign : "center",
})
const dashOriginBoardData = [
  {
    modelId: "20210908-01",
    modeSetName : "Home Inspector1",
    desc: ["개발용", "mode 테스트용", null, null, null, null],
    liveAppId: ["home", "alaska", "channel", "kids", "clud", "answer"],
    modeAppId: ["home", "alaska", null, null, null, null],
    debug: ["TRUE", "FALSE", null, null, null, null],
    privateSession:[null, "Live", null, null, null, null],
    publicSession:[null,"Modeset",null,null,null,null],
    privateService:["pri_inspector_1", null, null, null, null, null],
    publicService:["pub_inspector_1", null, null, null, null, null]
  },
  {
    modelId: "20210908-02",
    modeSetName : "Home Inspector2",
    desc: ["개발용", null, null, null, null, null],
    liveAppId: ["home", "alaska", "channel", "kids", "clud", "answer"],
    modeAppId: ["home", "alaska", null, null, null, null],
    debug: ["TRUE", null, null, null, null, null],
    privateSession:[null, null, null, null, null, null],
    publicSession:[null,null,null,null,null,null],
    privateService:["pri_inspector_2", null, null, null, null, null],
    publicService:[null, null, null, null, null, null]
  },{
    modelId: "20210908-03",
    modeSetName : "Home Inspector3",
    desc: ["개발용", null, null, null, null, null],
    liveAppId: ["home", "alaska", "channel", "kids", "clud", "answer"],
    modeAppId: ["home", "alaska", null, null, null, null],
    debug: ["TRUE", null, null, null, null, null],
    privateSession:[null, null, null, null, null, null],
    publicSession:[null,null,null,null,null,null],
    privateService:["pri_inspector_3", null, null, null, null, null],
    publicService:[null, null, null, null, null, null]
  },{
    modelId: "20210908-04",
    modeSetName : "Home Inspector4",
    desc: ["개발용", null, null, null, null, null],
    liveAppId: ["home", "alaska", "channel", "kids", "clud", "answer"],
    modeAppId: ["home", "alaska", null, null, null, null],
    debug: ["TRUE", null, null, null, null, null],
    privateSession:[null, null, null, null, null, null],
    publicSession:[null, null, null ,null ,null ,null],
    privateService:["pri_inspector_4", null, null, null, null, null],
    publicService:["pub_inspector_4", null, null, null, null, null]
  },
];
// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing(3),
//     overflowX: "auto"
//   },
//   table: {
//     minWidth: 700
//   }
// }));


function getAllLiveAppId(){
  let liveAppIds = [];
  // fetch('http://localhost:3001/liveAppID')
  // .then(res => {
  //     return res.json();
  // })
  // .then(data => {            
  //     const json = JSON.parse(JSON.stringify(data));                    

  //     for(var i = 0; i < json.liveAppId; i++){
  //       liveAppIds.push(json.liveAppId[i]);
  //     }                  
  // })
  return liveAppIds;
}
export default function SpanningTable() {
  // const classes = useStyles();

    const [dashBoardRowData, setDashBoardRowData] = React.useState(dashOriginBoardData);


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [modeOpen, setModeOpen] = React.useState(false);
    const handleModeOpen = () => setModeOpen(true);
    const handleModeClose = () => setModeOpen(false);

    const [addOpen, setAddOpen] = React.useState(false);
    const handleAddOpen = () => setAddOpen(true);
    const handleAddClose = () => setAddOpen(false);

    const [isModelIdSort, setModelIdSort] = React.useState(false);
    const [isModeSetSort, setModeSetSort] = React.useState(false);

    
    const [checked, setChecked] = React.useState([false, false, false, false]);      

    const parentCheckHandle = (event: React.ChangeEvent<HTMLInputElement>) => {      
      setChecked([event.target.checked, event.target.checked, event.target.checked, event.target.checked]);
    };

    const checkHandleChild1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1], checked[2], checked[3]]);
    };

    const checkHandleChild2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked, checked[2], checked[3]]);
    };
    const checkHandleChild3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], checked[1], event.target.checked, checked[3]]);
    };

    const checkHandleChild4 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], checked[1], checked[2], event.target.checked]);
    };
    const checkHandleChilds = [checkHandleChild1, checkHandleChild2, checkHandleChild3, checkHandleChild4];
   

 
  let tempData =[];
  return (
    //className={classes.table}
    
    
    <>
    <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        >
        <Box sx={style}>
            <TextField id="modelId" label="ModelID" variant="filled" fullWidth sx = {{mb : 3}}/>                                  
            <Button variant="contained" fullWidth onClick={() =>{
              let modelId = document.getElementById("modelId").value;                              

              dashOriginBoardData.map((item,index)=>{
                if(item.modelId.includes(modelId)){
                  tempData.push(item);
                }
              })
              setDashBoardRowData(tempData);
              handleClose();
          }}>Search</Button>               
        </Box>
    </Modal>
          
    <Modal
      keepMounted
      open={modeOpen}
      onClose={handleModeClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
      >
      <Box sx={style}>
          <TextField id="modeSetName" label="modeSetName" variant="filled" fullWidth sx = {{mb : 3}}/>                                  
          <Button variant="contained" fullWidth onClick={() =>{
              let modeSetName = document.getElementById("modeSetName").value;                              

              dashOriginBoardData.map((item,index)=>{
                if(item.modeSetName.includes(modeSetName)){
                  tempData.push(item);
                }
              })
              setDashBoardRowData(tempData);
              handleModeClose();
          }}>Search</Button>            
      </Box>
    </Modal>

    <Modal
      keepMounted
      open={addOpen}
      onClose={handleAddClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
      >
      <Box sx={style}>
        <TextField id="modeSetName" label="modeSetName" variant="filled" fullWidth sx = {{mb : 3}}/>
        <TextField id="modeSetName" label="modeSetName" variant="filled" fullWidth sx = {{mb : 3}}/>
        <TextField id="modeSetName" label="modeSetName" variant="filled" fullWidth sx = {{mb : 3}}/>
        {/* <><CreateModeAppIdInputs liveAppIDs = {getAllLiveAppId()}/></> */}

      </Box>
    </Modal>



    <Grid container>            
            <Grid xs = {12}>
                <Typography sx ={{mt : 2}} variant="h4">ModeSet</Typography> 
            </Grid>      

            <Grid xs ={10} sx ={{mt : 4}}>            
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={handleAddOpen}>추가</Button>
                    <Button>삭제</Button>
                </ButtonGroup>                
            </Grid>
            <Grid xs = {2} sx ={{mt : 4, mb : 3}}>
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button>원래대로</Button>
                  <Button>적용</Button>
                  <Button>confirm</Button>
              </ButtonGroup>
            </Grid>   
            
            <Table>
              <TableHead>
                <TableRow>        
                  <TableHeadCell width = "50">
                    <Checkbox onChange={parentCheckHandle} checked={(((checked[0] && checked[1]) && checked[2]) && checked[3])}
                    />
                  </TableHeadCell>    
                  <TableHeadCell width="120">
                    <Stack direction="row">
                      <Typography sx = {typographyStyle} onClick={()=>{
                        var sortData = [];                  
                        dashBoardRowData.map((item) =>{
                          sortData.push(item);

                        })                  
                        if(isModelIdSort === false){
                          //내림차순 정렬.
                          setDashBoardRowData(sortData.sort((a,b) => {
                            if(a.modelId < b.modelId) return 1;
                            else if(a.modelId > b.modelId) return -1;
                            
                          }));
                          setModelIdSort(true);                    
                        }else if(isModelIdSort === true){                    
                          //오름차순 정렬
                          setDashBoardRowData(sortData.sort((a,b) => {
                            if(a.modelId > b.modelId) return 1;
                            else if(a.modelId < b.modelId) return -1;
                            
                          }));

                          setModelIdSort(false);
                        }
                        
                        // setDashBoardRowData(sortData);

                      }}>
                        ModelID
                      </Typography>
                      <SearchBtn sx = {{p : 0}} variant="text" onClick={handleOpen}>
                      <SearchIcon/>
                      </SearchBtn>
                    </Stack>
                  </TableHeadCell>
                  <TableHeadCell width="100">
                    <Stack direction="row">
                      <Typography  sx = {typographyStyle} onClick={() =>{
                        var sortData = [];
                        
                        dashBoardRowData.map((item) =>{
                          sortData.push(item);
                        })

                        if(isModeSetSort === false){
                          //내림차순 정렬.
                          setDashBoardRowData(sortData.sort((a,b) => {
                            if(a.modeSetName < b.modeSetName) return 1;
                            else if(a.modeSetName > b.modeSetName) return -1;                    
                          }));
                          setModeSetSort(true);

                        }else if(isModeSetSort === true){
                          // console.log("조건확인");
                          //오름차순 정렬
                          setDashBoardRowData(sortData.sort((a,b) => {
                            if(a.modeSetName > b.modeSetName) return 1;
                            else if(a.modeSetName < b.modeSetName) return -1;                      
                          }));

                          setModeSetSort(false);
                        }


                      }}>
                        ModeSet
                      </Typography>
                      <SearchBtn sx = {{p : 0}} variant="text" onClick={handleModeOpen}>
                      <SearchIcon/>
                      </SearchBtn>
                    </Stack>
                  </TableHeadCell>
                  <TableHeadCell width="140">desc</TableHeadCell>
                  <TableHeadCell wdith="100">liveAppID</TableHeadCell>
                  <TableHeadCell wdith="100">modeAppID</TableHeadCell>
                  <TableHeadCell wdith="80">Debug</TableHeadCell>
                  <TableHeadCell wdith="90">PrivateSession</TableHeadCell>
                  <TableHeadCell wdith="100">PublicSession</TableHeadCell>
                  <TableHeadCell wdith="100">PrivateService</TableHeadCell>
                  <TableHeadCell wdith="100">PublicService</TableHeadCell>
                </TableRow>
              </TableHead>
              <MakeTableBody rowData ={dashBoardRowData} checked = {checked} checkHandleChilds = {checkHandleChilds} />
            </Table>
        </Grid>    
      </>
  );
}


function MakeTableBody(props){  
  console.log(props.checked);
    return(
      <>
        <TableBody>
            {props.rowData.map((item, index) => (              
              <Fragment>
                <TableRow>                    
                    <TableRowCell rowSpan={item.liveAppId.length + 1}>                      
                    <Checkbox checked={props.checked[index]} onChange={props.checkHandleChilds[index]}/>
                    </TableRowCell>
                    <TableRowCell rowSpan={item.liveAppId.length + 1}>{item.modelId}</TableRowCell>
                    <TableRowCell rowSpan={item.liveAppId.length + 1}>{item.modeSetName}</TableRowCell>
                </TableRow>              



                {item.desc.map((desc,index) => (                               
                <TableRow>              
                    <TableRowCell title="test">{desc === null ? "" : desc}</TableRowCell>
                    <TableRowCell>{item.liveAppId[index]}</TableRowCell>
                    <TableRowCell>{item.modeAppId[index] === null ? "" : item.modeAppId[index]}</TableRowCell>
                    <TableRowCell>{item.debug[index] === null ? "" : item.debug[index]}</TableRowCell>                  
                    <CreateSessionServiceRow item = {item} index = {index}></CreateSessionServiceRow>                                    
                </TableRow>
                ))}
              </Fragment>
            ))}
          </TableBody>
      </>
      
    )
  }
function CreateSessionServiceRow(props){
  var content;
  // console.log(props.item.debug);

  if(props.item.debug[props.index] == "TRUE"){      
    content = <><TableRowCell>{props.item.privateSession[props.index] === null ? "" : props.item.privateSession[props.index]}</TableRowCell>
    <TableRowCell>{props.item.publicSession[props.index] === null ? "" : props.item.publicSession[props.index]}</TableRowCell>
    <TableRowCell title = "service_server : 110.46.166.206:35001&#13;inspector_port:36001&#13;appUrl:http://10..10.118.20:6080/ICUI/home/0.0.1/">{props.item.privateService[props.index] === null ? "" : props.item.privateService[props.index]}</TableRowCell>
    <TableRowCell title ="service_server : 110.46.166.206:35001&#13;inspector_port:36001&#13;appUrl:http://10..10.118.20:6080/ICUI/home/0.0.1/">{props.item.publicService[props.index] === null ? "" : props.item.publicService[props.index]}</TableRowCell></>
  }else{      
    content = <><TableRowCell title = "session_server : 110.46.166.206:35001&#13;inspector_port:36001&#13;appUrl:http://10..10.118.20:6080/ICUI/home/0.0.1/">{props.item.privateSession[props.index] === null ? "" : props.item.privateSession[props.index]}</TableRowCell>
    <TableRowCell title = "session_server : 110.46.166.206:35001&#13;inspector_port:36001&#13;appUrl:http://10..10.118.20:6080/ICUI/home/0.0.1/">{props.item.publicSession[props.index] === null ? "" : props.item.publicSession[props.index]}</TableRowCell>
    <TableRowCell>{props.item.privateService[props.index] === null ? "" : props.item.privateService[props.index]}</TableRowCell>
    <TableRowCell>{props.item.publicService[props.index] === null ? "" : props.item.publicService[props.index]}</TableRowCell></>
  }
  return content;
}


function CreateModeAppIdInputs(props){
  var content;
  
  for(var i = 0; i < props.liveAppIds.length; i++){
    content += <TextField id= {"modeAppId" + i} label={props.liveAppIds[i]} variant="filled" fullWidth sx = {{mb : 3}}/>    
  }
  
  return content;
}
