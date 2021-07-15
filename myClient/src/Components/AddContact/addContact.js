import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector } from 'react-redux';
import axios from 'axios';

const AddContact = (props) =>{
    const {open, onClose, load} = props;
    let [name, setName]= useState("");
    let [phonenumber, setPhonenumber]= useState("");
    const userAccount = useSelector(state => state.user);


    async function onAddContactHandler(){
        try{
            var user = await axios.post('http://localhost:5000/accounts/contacts',{
                name: name,
                phonenumber: phonenumber,
                accountUserId: userAccount.id
            });
            alert(user.data.name + " have been created!")
            onClose();
            load();
        }catch(err) {alert(err)}
    }

    return(
        <div>
                <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Hi!
                Please add a contact to your list!!
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Enter Name"
                type="email"
                fullWidth
                onChange = {(event)=> setName(event.target.value)}
                value = {name}
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Enter Phone number"
                
                fullWidth
                onChange = {(event)=> setPhonenumber(event.target.value)}
                value = {phonenumber}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={onClose} color="primary">
                Cancel
            </Button>
            <Button onClick={onAddContactHandler} color="primary">
                Create
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    )
}

export default AddContact;