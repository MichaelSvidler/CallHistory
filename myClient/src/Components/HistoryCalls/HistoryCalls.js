import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Contact from '../Contact/Contact';
import Button from '@material-ui/core/Button';
import AddContact from '../AddContact/addContact';
import { Collapse } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import useStyles  from './HistoryCallsStyles';

const HistoryCalls = () => {
    const classes = useStyles();
    const user = useSelector(state => state.user);
    let [calls, setCalls] = useState([]);
    let [contacts, setContacts] = useState([])
    const LoadCalls= ()=>{
           
        axios.get(`http://localhost:5000/accounts/calls/${user.id}`)
        .then((result)=>setCalls(result.data))
        .catch((err)=> console.log(err))
    
    }

    const LoadContacts= ()=>{
           
        axios.get(`http://localhost:5000/accounts/contacts/${user.id}`)
        .then((result)=>setContacts(result.data))
        .catch((err)=> console.log(err))
    
    }

useEffect(()=> {
    LoadCalls();
    LoadContacts();

}, []);
const [open, setOpen] = useState(false);
const [isCollapseShown, setIsCollapseShown] = useState(false)

  const handleClickOpen = () => {
    setOpen(!open);
  };
    
    return(
       <>
       {user.id !== -1?
        <>

            <div>Hello user {user.userName}</div>
            <h1> View your call history:</h1>
            <div>
                {calls.map((call) => {
                return (<div>
                    <h3> call date: {call.calldate}</h3>
                    </div>)
                })}
            </div>  
            <div className={classes.contacts}>
                <Button variant="contained" color="secondary" onClick = {handleClickOpen}>
                    Add Contact
                </Button>
                <Button variant="contained" color="primary"  onClick = {() => setIsCollapseShown(!isCollapseShown)}>
                    View Contacts
                </Button>
                <Collapse in={isCollapseShown} timeout="auto">
                    {contacts.map((contact) => <Contact contact ={contact} load = {LoadContacts}/>)}
                </Collapse>
        </div>          
        </>: <div>not allowed</div>
        } <AddContact open = {open} onClose = {handleClickOpen} load={LoadContacts} />
       </>
    )
}

export default HistoryCalls;