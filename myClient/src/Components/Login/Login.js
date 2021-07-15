
import React, {useEffect, useState} from 'react';
import useStyles from './LoginStyles';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setUser } from '../../Redux/User/UserSlice';

const Login = () => {
    const classes = useStyles();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const  onLoginHandler = async () =>{
        try{
            let user = await axios.post('http://localhost:5000/accounts/login',{
                username: username,
                password: password
            })
            console.log(user);
             dispatch(setUser({
                 userName: user.data.username,
                 id: user.data.user_id,
                 phonenumber: user.data.phonenumber
                 
             }))
             history.push('/HistoryCalls')
            
         } catch(err) 
         {
             alert("No such user, please reenter.");
            }
        }
    

    return(
        <div className={classes.root}>
           
        <Paper elevation={3} className={classes.card}>
            <TextField id="outlined-basic" label="User Name" variant="outlined" onChange = {(event)=> setUserName(event.target.value)} value={username} />
            
            <TextField id="outlined-basic" label="Password" variant="outlined" onChange = {(event)=> setPassword(event.target.value)} value={password}  />
            
            <Button variant="contained" color="primary" className = {classes.button} onClick = {onLoginHandler}>
                Login!
            </Button>
            
            
            
            
        </Paper>
        
  </div>
    )
}

export default Login;