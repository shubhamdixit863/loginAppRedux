import React,{useState} from 'react'
import { Row, Col } from 'antd';
import { Fragment } from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import {fetchUserByUserName} from "../thunks"
import {useDispatch} from "react-redux";

function Login() {
  const dispatch=useDispatch();

const [state,setState]=useState({

  username:"",
  password:""
})


const handleChange=(event)=>{
  setState({...state,[event.target.name]:event.target.value});

}

const login=()=>{


dispatch(fetchUserByUserName(state));
}

    return (
        <Fragment>
        
        <Row style={{marginTop:"200px"}}>
          <Col span={12} offset={6}>
              <h1>Login Here</h1>
          <Input placeholder="Username"  style={{padding:"10px"}}  name="username" onChange={handleChange}/>
          <Input placeholder="Password"   name="password"  style={{padding:"10px" ,marginTop:"20px"}} onChange={handleChange}/>

          <Button type="primary" style={{marginTop:"20px"}}
          
          onClick={login}
          
          
          >Login</Button>

          </Col>
        </Row>
      </Fragment>
    )
}

export default Login
