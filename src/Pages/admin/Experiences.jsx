import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { getUser } from '../../server/common';
import { ROLE, USER_ID } from '../../utils';

const Experiences = () => {
const columns = [
  {
    title: 'work_name',
    dataIndex:'work_name',
    key: 'work_name'
  },
  {
    title: 'company_name',
    dataIndex: 'company_name',
    key: 'company_name'
  },
    {
    title: 'description',
    dataIndex: 'description',
    key: 'description'
  },
    {
    title: 'start_date',
    dataIndex: 'start_date',
    key: 'start_date'
  },
   {
    title: 'end_date',
    dataIndex: 'end_date',
    key: 'end_date'
  },  
  {
    title: 'Actions',
    width: 100,
    
   render: ({_id})=>(
    <>
<div className='btnnnnn'>
      <Button type='primary'> <EditOutlined /> </Button>
    <Button  type='primary'  danger> <DeleteOutlined /> </Button>

</div>
    </>
   )
  },

];

  const[ experiences, setExperiences]=useState([]);
  const[loading, setLoading]= useState(false);
 
  
 useEffect(()=>{
      getExperiences();
    },[]);

    function getExperiences(){
      setLoading(true);
      let url= `experiences${ROLE === "client" ? `?user[in]=${USER_ID}`:""}`;
      getUser (url).then((res)=>{
        setExperiences(res.data.data)
      }).finally(()=>{
        setLoading(false);
      });
    }

  return (
   <>
    <Table 
    title ={()=>(
      
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <h1>Experiences</h1>
        <Button type="primary" >Add </Button>
      </div>
    )}
    dataSource={experiences}
    columns={columns} 
    loading = {loading }
    scroll={{x:600}}/>
   </>
  )
}

export default Experiences