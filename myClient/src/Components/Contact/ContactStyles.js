import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(()=>({
    contactItem:{
        width:"65%",
        fontSize: '1rem',
        fontWeight: 'bold',
        display: "flex",
       // justifyContent: "flex-end",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
        padding: "0.3rem",
        margin: "1rem 0",
        borderRadius: "19px",
    },
    contactDes:{
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
        borderRadius: "19px",
        padding: "0.3rem",
        margin: "1rem 0",
        backgroundColor: "gray",
        display: "flex",
        justifyContent: "space-between"

    },
    centerDiv: {
        display: "flex",
        justifyContent: "center"
    },
    root: {
        width: '30vw',
        backgroundColor: "lightblue",
        marginTop: '1vw',
    },
    actions:{
        display: 'flex',
        justifyContent: 'center'
    }
   
}))

export default useStyles;