import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { getUser } from '../../server/common';

const Portfolios = () => {
const columns = [
  {
    title: 'name',
    dataIndex:'name',
    key: 'name'
  },
  {
    title: 'percent%',
    dataIndex: 'percent',
    key: 'percent'
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

  const[ Skill, setSkill]=useState([]);
  const[loading, setLoading]= useState(false);
 
  
 useEffect(()=>{
      getSkills();
    },[]);

    function getSkills(){
      setLoading(true)
      getUser ("skills").then((res)=>{
        setSkill(res.data.data)
      }).finally(()=>{
        setLoading(false);
      });
    }

  return (
   <>
    <Table 
    title ={()=>(
      
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <h1>Skill</h1>
        <Button type="primary" >Add Skill</Button>
      </div>
    )}
    dataSource={Skill}
    columns={columns} 
    loading = {loading }
    scroll={{x:600}}/>
   </>
  )
}

export default Portfolios