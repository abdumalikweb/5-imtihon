import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { getUser } from '../../server/common';

const Portfolios = () => {
const columns = [
  {
    title: 'url',
    dataIndex:'url',
    key: 'url'
  },
  {
    title: 'photo',
    dataIndex: 'photo.photo',
    key: 'photo'
  },  {
    title: 'Actions',
    width: 100,
    
   render: ({})=>(
    <>
<div className='btnnnnn'>
      <Button type='primary'> <EditOutlined /> </Button>
    <Button  type='primary'  danger> <DeleteOutlined /> </Button>

</div>
    </>
   )
  },

];

  const[ Portfolios, setPortfolos]=useState([]);
  const[loading, setLoading]= useState(false);
 
  
 useEffect(()=>{
      getPortfolios();
    },[]);

    function getPortfolios(){
      setLoading(true)
      getUser ("portfolios").then((res)=>{
        setPortfolos(res.data.data)
      }).finally(()=>{
        setLoading(false);
      });
    }

  return (
   <>
    <Table 
    title ={()=>(
      
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <h1>Portfolios</h1>
        <Button type="primary" >Add </Button>
      </div>
    )}
    dataSource={Portfolios}
    columns={columns} 
    loading = {loading }
    scroll={{x:600}}/>
   </>
  )
}

export default Portfolios