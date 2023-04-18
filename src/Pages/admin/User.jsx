import React, { useState } from 'react'
import {Button, Form, Input, Modal, Select, Table,} from "antd"
import { useEffect } from 'react';
import { getUser, putUser, sendData } from '../../server/common';
import { USER_ROLES } from '../../const';
import { Slide, toast, ToastContainer } from 'react-toastify';
import {EditOutlined,DeleteOutlined} from "@ant-design/icons";



const Users = () => {
const [users, setUser]=useState([]);
const [isModalOpen, setIsModalOpen] = useState(false);
const[loading,setLoading]=useState(false);
  const [selected, setSelected]= useState (null);

useEffect(()=>{
userData();
},[])


function userData() {
    setLoading(true);
getUser("users").then((res)=>{
  
  setUser(res.data.data);
  // console.log(res.data.data);
}).finally(()=>{
  setLoading(false);
})
}


const columns = [
  {
    title: 'FirstName',
    dataIndex:'first_name',
    key: 'first_name'
  },
  {
    title: 'LastName',
    dataIndex: 'last_name',
    key: 'last_name'
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Actions',
    width: 180,
    
   render: ({_id})=>(
    <>
<div className='btnnnnn'>
      <Button type='primary' onClick={()=> editUser(_id)}> <EditOutlined /> </Button>
    <Button  type='primary' onClick={()=> deleteUser(_id)} danger> <DeleteOutlined /> </Button>

</div>
    </>
   )
  },
];


  function editUser(id){
showModal();
setSelected(id)

getUser(`users/${id}`).then((res)=>{
  console.log(res.data);
  form.setFieldsValue(res.data);
});


}
  
  function deleteUser() {
    
  }



  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    form.validateFields().then((values)=>{
      delete values.confirm;
  if(selected){
putUser(`users/${selected}`,values).then(()=>{
userData()
  setIsModalOpen(false);

})
  }else{
    sendData("users", values)
      .then(()=>{userData();})
      .catch(()=>{
    toast.error("Server Error !",{ autoClose: 1000, })
   })
  }
      // console.log(values);
// sendData("users", values)
//       .then(()=>{userData();})
//       .catch(()=>{
//     toast.error("Server Error !",{ autoClose: 1000, })
//    })
  

  });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [form] = Form.useForm();

const openFormModal = () =>{
  showModal();
  form.resetFields();
};


  return (
    <>
     <ToastContainer  transition={Slide}/>
    <Table 
    title ={()=>(
      
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <h1>User</h1>
        <Button type="primary"  onClick={openFormModal}>Add User</Button>
      </div>
    )}
    dataSource={users}
    columns={columns} 
    loading = {loading }
    scroll={{x:600}}/>

 <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Add user">
<Form
  labelCol={{
   span: 24,}}
    wrapperCol={{
      span: 24,
    }}
      form={form}
      name="user"
      initialValues={{role:"user"}}

   
    >
      <Form.Item
        name="first_name"
        label="Fist Name"
        rules={[
          {
            required: true,
            message: 'Please input your field!',
          },
        ]}
      >
        <Input placeholder='Fist Name'/>
      </Form.Item>

            <Form.Item
        name="last_name"
        label="Last Name"
        rules={[
          {
            required: true,
            message: 'Please input your field!',
          },
        ]}
      >
        <Input placeholder='Last Name'/>
      </Form.Item>

          <Form.Item
        name="username"
        label="User Name"
        rules={[
          {
            required: true,
            message: 'Please input your field!',
          },
        ]}
      >
        <Input placeholder='User Name'/>
      </Form.Item>

         <Form.Item
        name="role"
        label="Role"
        rules={[
          {
            required: true,
            message: 'Please input your role!',
          },
        ]}
      >
        <Select options={USER_ROLES.map((role)=>({label:role,value:role}))}/>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder='Password'/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password  placeholder='Confirm password'/>
      </Form.Item>

   
</Form>
      </Modal>

    </>
    
  )
}

export default Users