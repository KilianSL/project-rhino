import React from 'react';
import {withStyles, WithStyles, createStyles} from '@material-ui/styles';
import {Theme, Container, Select, Box, MenuItem, Typography, useMediaQuery, useScrollTrigger, Slide, CircularProgress} from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import {AppBar} from '../../components';
import {PostCard} from '../../components';
import {CreatePostCard, PopUpButton, CreatePostScreen} from '../../components';
import Async from 'react-async'
import getPosts from './getPosts'
 
// DUMMY CONTENT FOR DISPLAYING POSTS
import {Post} from '../../interfaces';

// const posts1 : Array<Post>= [
//     {
//         postID : "",
//         title : "Rhino migration patterns",
//         description : "A Collection of CSV files showing how rhinos travelled over the last 13 months.",
//         likes : 5,
//         content : "wikipedia.com/rhino"
//     },
//     {
//         postID : "",
//         title : "Rhino migration patterns",
//         description : "A Collection of CSV files showing how rhinos travelled over the last 13 months.",
//         likes : 5,
//         content : "wikipedia.com/rhino"
//     },
//     {
//         postID : "",
//         title : "Rhino migration patterns",
//         description : "A Collection of CSV files showing how rhinos travelled over the last 13 months.",
//         likes : 5,
//         content : "wikipedia.com/rhino"
//     },
//     {
//         postID : "",
//         title : "Rhino migration patterns",
//         description : "A Collection of CSV files showing how rhinos travelled over the last 13 months.",
//         likes : 5,
//         content : "wikipedia.com/rhino"
//     },
//     {
//         postID : "",
//         title : "Rhino migration patterns",
//         description : "A Collection of CSV files showing how rhinos travelled over the last 13 months.",
//         likes : 5,
//         content : "wikipedia.com/rhino"
//     },
//     {
//         postID : "",
//         title : "Rhino migration patterns",
//         description : "A Collection of CSV files showing how rhinos travelled over the last 13 months.",
//         likes : 5,
//         content : "wikipedia.com/rhino"
//     },
// ]


const styles = ({palette} : Theme) => createStyles({
    root : {
        backgroundColor : "#000",
    },
    sortToolbar : {
        width: "100%",
        display : "flex",
        justifyContent : "space-evenly",
        alignItems : 'center',
        padding: "5px 0",
        borderColor : palette.primary.main,
        backgroundColor: palette.primary.main,
        color: "white",
        // borderBottom: "10px solid black"
    },
    sortSelect : {
        minWidth: 120,
        color: "white",
        marginTop: "3px",
        backgroundColor: palette.primary.light,
        padding: "0 5px"
    }
})

interface props extends WithStyles<typeof styles>{

}

function BrowsePage(props : props){
    const {classes} = props;
    const [sort, setSort] = React.useState("new");
    const [createPostVisible, setCreatePostVisible] = React.useState(false);
    const isMobile = useMediaQuery('(max-width:640px)')

    const handleSortSelectChange = (e : React.ChangeEvent<{value: unknown}>) => {
        console.log("Sorting by", e.target.value);
        setSort(e.target.value as string);
    }

    const handleCreatePostVisible = () => {
        setCreatePostVisible(!createPostVisible);
    }

    // console.log("Create Post visible: ", createPostVisible);
    return(
            <>
            <AppBar />
            <Box className={classes.sortToolbar} borderTop={1} borderBottom={1}>
                <Typography variant="h6">Sort Feed By: </Typography>
                {/* MAYBE IMPLMENT THIS AS TABS FOR A LATER RELEASE - USE REACT-SWIPEABLE-VIEWS*/}
                <Select
                    value={sort}
                    onChange={handleSortSelectChange}
                    className={classes.sortSelect}
                >
                    <MenuItem value="new">New</MenuItem>
                    <MenuItem value="best">Best</MenuItem>
                </Select>
            </Box>
            <Container className={classes.root} maxWidth="lg" disableGutters={isMobile}>
                <CreatePostCard onClick={handleCreatePostVisible}/>
                <Async promiseFn={getPosts}>
                    <Async.Loading><CircularProgress color="secondary" /></Async.Loading>
                    <Async.Fulfilled>
                        {
                            (data : Array<Post>) => {
                                data.map(p => {
                                    <PostCard {...p} />
                                })
                            }
                        }
                    </Async.Fulfilled>
                    <Async.Rejected>
                        Something went wrong... please try again later :(
                    </Async.Rejected>
                </Async>
                <PopUpButton ariaLabel="post" direction="up" onClick={handleCreatePostVisible}>
                    <PostAddIcon />
                </PopUpButton>
            </Container>

            <CreatePostScreen visible={createPostVisible} toggleVisible={handleCreatePostVisible} />

            </>
    )
}

export default withStyles(styles)(BrowsePage);
