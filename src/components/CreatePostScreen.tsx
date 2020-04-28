import React from 'react';
import { Input, Button, Slide, Backdrop, Grid, TextField, Typography, fade } from '@material-ui/core';
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';


interface props {
    toggleVisible : VoidFunction,
    visible : boolean
}

const useStyles = makeStyles((theme : Theme) => 
    createStyles({
        root : {
            padding: '15px',
            width: "100%",
            height: "100%",
            backgroundColor: theme.palette.primary.main,
            color: "white",
            zIndex : 1,
            display: "flex",
            flexDirection: "column"
        },
        form : {

        },
        input : {
            color : "white",
            margin: "5px 0",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
        },
        closeButton : {
            color : theme.palette.primary.light,
            fontWeight : "bold",
            alignSelf : "flex-end",
            fontSize : "24px",
        },
        submitButton : {
            width: "100%",
            padding: "10px",
            margin: "5px 0",
            borderRadius: theme.shape.borderRadius,
        }
    })
)

export default function CreatePostScreen(props : props){

    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [links, setLinks] = React.useState("");

    const handleTitleUpdate = (e : React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const handleDescriptionUpdate = (e : React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }
    const handleLinkUpdate = (e : React.ChangeEvent<HTMLInputElement>) => {
        setLinks(e.target.value);
    }
    const handleSubmit = () => {
        console.log("Submitted");
        props.toggleVisible();
    }

 
    const classes = useStyles();
    return(
        <Slide in={props.visible} direction="up">
            <Backdrop className={classes.root} open={true}>
                    <Button onClick={props.toggleVisible} className={classes.closeButton}>X</Button>
                    <Grid container direction="column" justify="space-evenly">
                        <Typography variant="h3" style={{marginBottom : "10px"}}>Create New Post</Typography>
                        <form noValidate autoComplete="off" onSubmit={()=>console.log("Submitted")}>
                            <TextField id="title" label="Title" variant="filled" fullWidth className={classes.input} placeholder="Give your post a title..." onChange={handleTitleUpdate}/>
                            <TextField 
                                id="links" 
                                label="Links to Resources" 
                                variant="filled" 
                                multiline 
                                fullWidth 
                                rows={2} 
                                className={classes.input}
                                placeholder="Enter one link per line..."
                                onChange={handleLinkUpdate}
                            />
                            <TextField 
                                id="description" 
                                label="Description" 
                                variant="filled" 
                                multiline 
                                fullWidth 
                                rows={5} 
                                className={classes.input}
                                placeholder="Give your post a description..."
                                onChange={handleDescriptionUpdate}
                            />
                            <Button color="secondary" variant="contained" className={classes.submitButton} onClick={handleSubmit}>Submit Post</Button>
                        </form>
                    </Grid>
            </Backdrop>
        </Slide>

    )
}
