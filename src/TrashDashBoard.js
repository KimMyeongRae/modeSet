import * as React from 'react';
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';

const columns = [
    {field : 'modelId', headerName : 'ModelID', width : 110},
    {field : 'modeName', headerName : 'ModeName', width : 130},
    {field : 'desc', headerName : 'desc', width : 350},
    {field : 'liveAppId', headerName : 'Live appID', width : 100},
    {field : 'modeAppId', headerName : 'modeAppID', width : 130},
    {field : 'debug', headerName : 'Debug', width : 70},
    {field : 'privateSession', headerName : 'Private session', width : 120},
    {field : 'publicSession', headerName : 'Public session', width : 120},
    {field : 'privateService', headerName : 'Private service', width : 120},
    {field : 'publicService', headerName : 'Public service', width : 120}
];

const rows = [
    {id : '1', modelId : '20210908-01', modeName : 'HomeInspector1', desc : '개발용', liveAppId :'home', modeAppId : 'home', debug : 'TRUE', privateSession : ' ', publicSession : ' ', privateService : 'pri_inspector_1', publicService : 'pub_inspector_1'},
    {id : '2', modelId : '20210908-01', modeName : 'HomeInspector1', desc : 'mode테스트용', liveAppId :'alaska', modeAppId : 'alaska', debug : 'FALSE', privateSession : 'Live', publicSession : 'Modeset', privateService : ' ', publicService : ' '},
    {id : '3', modelId : '20210908-01', modeName : 'HomeInspector1', desc : ' ', liveAppId :'channel', modeAppId : ' ', debug : ' ', privateSession : ' ', publicSession : ' ', privateService : ' ', publicService : ' '},
    {id : '4', modelId : '20210908-01', modeName : 'HomeInspector1', desc : ' ', liveAppId :'kids', modeAppId : ' ', debug : ' ', privateSession : ' ', publicSession : ' ', privateService : ' ', publicService : ' '},
    {id : '5', modelId : '20210908-01', modeName : 'HomeInspector1', desc : ' ', liveAppId :'clud', modeAppId : ' ', debug : ' ', privateSession : ' ', publicSession : ' ', privateService : ' ', publicService : ' '},
    {id : '6', modelId : '20210908-01', modeName : 'HomeInspector1', desc : ' ', liveAppId :'answer', modeAppId : ' ', debug : ' ', privateSession : ' ', publicSession : ' ', privateService : ' ', publicService : ' '},
    
    {id : '7', modelId : '20210908-01', modeName : 'HomeInspector1', desc : '개발용', liveAppId :'home', modeAppId : 'home', debug : 'TRUE', privateSession : ' ', publicSession : ' ', privateService : 'pri_inspector_1', publicService : 'pub_inspector_1'},
    {id : '8', modelId : '20210908-01', modeName : 'HomeInspector1', desc : 'mode테스트용', liveAppId :'alaska', modeAppId : 'alaska', debug : 'FALSE', privateSession : 'Live', publicSession : 'Modeset', privateService : ' ', publicService : ' '},
    {id : '9', modelId : '20210908-01', modeName : 'HomeInspector1', desc : ' ', liveAppId :'channel', modeAppId : ' ', debug : ' ', privateSession : ' ', publicSession : ' ', privateService : ' ', publicService : ' '},
    {id : '10', modelId : '20210908-01', modeName : 'HomeInspector1', desc : ' ', liveAppId :'kids', modeAppId : ' ', debug : ' ', privateSession : ' ', publicSession : ' ', privateService : ' ', publicService : ' '},
    {id : '11', modelId : '20210908-01', modeName : 'HomeInspector1', desc : ' ', liveAppId :'clud', modeAppId : ' ', debug : ' ', privateSession : ' ', publicSession : ' ', privateService : ' ', publicService : ' '},
    {id : '12', modelId : '20210908-01', modeName : 'HomeInspector1', desc : ' ', liveAppId :'answer', modeAppId : ' ', debug : ' ', privateSession : ' ', publicSession : ' ', privateService : ' ', publicService : ' '},


    {id : '13', modelId : '20210908-01', modeName : 'HomeInspector1', desc : '개발용', liveAppId :'home', modeAppId : 'home', debug : 'TRUE', privateSession : ' ', publicSession : ' ', privateService : 'pri_inspector_1', publicService : 'pub_inspector_1'},
    {id : '14', modelId : '20210908-01', modeName : 'HomeInspector1', desc : 'mode테스트용', liveAppId :'alaska', modeAppId : 'alaska', debug : 'FALSE', privateSession : 'Live', publicSession : 'Modeset', privateService : ' ', publicService : ' '},
    {id : '15', modelId : '20210908-01', modeName : 'HomeInspector1', desc : ' ', liveAppId :'channel', modeAppId : ' ', debug : ' ', privateSession : ' ', publicSession : ' ', privateService : ' ', publicService : ' '},
    {id : '16', modelId : '20210908-01', modeName : 'HomeInspector1', desc : ' ', liveAppId :'kids', modeAppId : ' ', debug : ' ', privateSession : ' ', publicSession : ' ', privateService : ' ', publicService : ' '},
    {id : '17', modelId : '20210908-01', modeName : 'HomeInspector1', desc : ' ', liveAppId :'clud', modeAppId : ' ', debug : ' ', privateSession : ' ', publicSession : ' ', privateService : ' ', publicService : ' '},
    {id : '18', modelId : '20210908-01', modeName : 'HomeInspector1', desc : ' ', liveAppId :'answer', modeAppId : ' ', debug : ' ', privateSession : ' ', publicSession : ' ', privateService : ' ', publicService : ' '},


    {id : '19', modelId : '20210908-01', modeName : 'HomeInspector1', desc : '개발용', liveAppId :'home', modeAppId : 'home', debug : 'TRUE', privateSession : ' ', publicSession : ' ', privateService : 'pri_inspector_1', publicService : 'pub_inspector_1'},
    {id : '20', modelId : '20210908-01', modeName : 'HomeInspector1', desc : 'mode테스트용', liveAppId :'alaska', modeAppId : 'alaska', debug : 'FALSE', privateSession : 'Live', publicSession : 'Modeset', privateService : ' ', publicService : ' '},
    {id : '21', modelId : '20210908-01', modeName : 'HomeInspector1', desc : ' ', liveAppId :'channel', modeAppId : ' ', debug : ' ', privateSession : ' ', publicSession : ' ', privateService : ' ', publicService : ' '},
    {id : '22', modelId : '20210908-01', modeName : 'HomeInspector1', desc : ' ', liveAppId :'kids', modeAppId : ' ', debug : ' ', privateSession : ' ', publicSession : ' ', privateService : ' ', publicService : ' '},
    {id : '23', modelId : '20210908-01', modeName : 'HomeInspector1', desc : ' ', liveAppId :'clud', modeAppId : ' ', debug : ' ', privateSession : ' ', publicSession : ' ', privateService : ' ', publicService : ' '},
    {id : '24', modelId : '20210908-01', modeName : 'HomeInspector1', desc : ' ', liveAppId :'answer', modeAppId : ' ', debug : ' ', privateSession : ' ', publicSession : ' ', privateService : ' ', publicService : ' '},


];
export default function ExportDefaultToolbar() {
  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 24,
    maxColumns: 10
  });

  return (
    
    <div style={{ height: 1360, width: '100%' }}>
      <DataGrid columns={columns} rows={rows}  />
    </div>
  );
}