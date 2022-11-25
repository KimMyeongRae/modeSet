import React, { Fragment } from "react";
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
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
import {useState} from 'react';

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
export default function SpanningTable() {
  // const classes = useStyles();

  const [dashBoardRowData, setDashBoardRowData] = React.useState(dashOriginBoardData);

  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [modeOpen, setModeOpen] = React.useState(false);
  const handleModeOpen = () => setModeOpen(true);
  const handleModeClose = () => setModeOpen(false);

  const [isModelIdSort, setModelIdSort] = React.useState(false);
  const [isModeSetSort, setModeSetSort] = React.useState(false);
  
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

    <Table>
        <TableHead>
          <TableRow>
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
        <MakeTableBody rowData ={dashBoardRowData}/>
      </Table>
      </>
  );
}


function MakeTableBody(props){
  
    return(
      <>
        <TableBody>
            {props.rowData.map(item => (              
              <Fragment>
                <TableRow>
                  <TableRowCell rowSpan={item.liveAppId.length + 1}>
                    {item.modelId}
                  </TableRowCell>
                  <TableRowCell rowSpan={item.liveAppId.length + 1}>
                    {item.modeSetName}
                  </TableRowCell>
                </TableRow>              
                {item.desc.map((desc,index) => (           
                <TableRow>              
                  <TableRowCell title="test">{desc === null ? "" : desc}</TableRowCell>
                  <TableRowCell>{item.liveAppId[index]}</TableRowCell>
                  <TableRowCell>{item.modeAppId[index] === null ? "" : item.modeAppId[index]}</TableRowCell>
                  <TableRowCell>{item.debug[index] === null ? "" : item.debug[index]}</TableRowCell>
                  
                  <CreateSessionServiceRow item = {item} index = {index}></CreateSessionServiceRow>
                  
                  {/* <TableRowCell>{item.privateSession[index] === null ? "" : item.privateSession[index]}</TableRowCell>
                  <TableRowCell>{item.publicSession[index] === null ? "" : item.publicSession[index]}</TableRowCell>
                  <TableRowCell>{item.privateService[index] === null ? "" : item.privateService[index]}</TableRowCell>
                  <TableRowCell>{item.publicService[index] === null ? "" : item.publicService[index]}</TableRowCell> */}
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