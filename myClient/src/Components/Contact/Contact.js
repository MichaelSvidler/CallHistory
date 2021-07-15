import React, {useState} from 'react';
import useStyles from './ContactStyles';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import EditContact from '../EditContact/EditContact';

const Contact =(props)=>{
  const {contact, load} = props;
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);

  const onDeleteHandler = () =>{
      axios.delete(`http://localhost:5000/accounts/contacts/${contact.contact_id}`)
      .then(()=>{
        alert("contact is deleted!");
        load();
    }).catch()
  }
  const handleEdit = () => {
    setIsEditing(!isEditing)
  }

  return (
   <>
   <Card className={classes.root}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom className = {classes.text}>
            Name: {contact.name}
          </Typography>
          <Typography color="textSecondary" gutterBottom className = {classes.textSec}>
            phonenumber: {contact.phonenumber}
           
          </Typography>
         
        </CardContent>
        <CardActions className ={classes.actions}>
            <IconButton onClick = {onDeleteHandler}><DeleteIcon></DeleteIcon></IconButton>
            <IconButton onClick={handleEdit} ><EditIcon ></EditIcon></IconButton>
        </CardActions>
        
      </Card>
      <EditContact open = {isEditing} onClose = {handleEdit} load={load} contact={contact}></EditContact>
       </>
  );
}

export default Contact;
