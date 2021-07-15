import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(()=>({
    root: {
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
            
        },
        card:{
            margin: '2vh',
            width: '20vw',
            height: '25vh',
            padding: '4vh',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
        },
        button:{
            width: '10vw',
            marginTop: '2vh'
        }
    

}))
export default useStyles;