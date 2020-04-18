import React from 'react';
import {jsx, css} from '@emotion/core';
/**@jsx jsx */
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {LandingPageProps} from './types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const style = css`
    width: 100%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .footer{
        position: absolute;
        bottom: 370px;
    }

    .scrollbar{
        .slide-button{
            font-size: 30px;
            outline: none;
            border: initial;
            background-color: initial;
            cursor: pointer;
            margin: 0;
            text-indent: 0px;
            text-shadow: none;
            display: inline-block;
            text-align: center;
            align-items: flex-start;
            font-weight: 400;
            padding: 1px 6px;

            :hover{
                transform: scale(1.25);
                transition: transform 150ms ease;
            }
        }

        .slide-selector{
            font-size: 36px;
            line-height: 48px;
            height: 20px;
            width: 20px;
            font-weight: 300;
            color: #42494f;
            outline: none;
            cursor: pointer;
            letter-spacing: normal;
            display: inline-block;
            text-align: center;
            align-items: flex-start;
            padding: 1px 6px;
            transition: transform 200ms ease 0s, color 200ms ease 0s;
            border: 2px solid rgb(179, 187, 193);
            background-color: rgb(255, 255, 255);
            transform: scale(0.6);
            border-radius: 100%;
            margin: 0px 8px;
        }

        .inactive{
            :hover{
                transform: scale(0.75);
                background-color: rgb(179, 187, 193);
                transition: transform 150ms ease 0s, color 150ms ease 0s;
            }
        }

        .active{
            transition: transform 200ms ease 0s, color 200ms ease 0s;
            border: 2px solid #f3802d;
            background-color: #f3802d;
            transform: scale(1);
            border-radius: 100%;
            margin: 8px 0px;
        }
        
    }


`

export default function LandingPageMobile(props : LandingPageProps){

        const [index, setIndex] = React.useState(0); // Index of the currently displayed slide
        const maxIndex = props.slides.length; // maximum allowable index - equal to length of slide because it is all slides + title slide (0-based index)

        const incrementIndex = () => {
            if (index === maxIndex) {
                setIndex(0);
            } else {
                setIndex(index+1);
            }
        }

        const decrementIndex = () => {
            if (index === 0) {
                setIndex(maxIndex);
            } else {
                setIndex(index - 1);
            }
        }

        return(
            <div css={style} className="fade-in">
                <div className="logo w-full w-max-600">
                    <img src={props.logo} />
                </div>

                {
                    index === 0 ?
                    <div className="text-container">
                        <h1>{props.title}</h1>
                        <h3 className="w-max-435">{props.subtitle}</h3>
                    </div>

                    :
                    
                    <div className="text-container">
                        <h2>{props.slides[index-1].title}</h2>
                        <h6 className="w-max-435">{props.slides[index-1].content}</h6>
                    </div>
                }

                <div className="footer">
                    <Button 
                        variant="contained" 
                        color="primary"
                        component={Link}
                        to="/contribute"
                        >
                            {props.btnText}
                    </Button>

                    <div className="scrollbar fl-row fl-center">
                        <button className="slide-button prev-slide"><FontAwesomeIcon icon={faAngleLeft} onClick={decrementIndex}/></button>
                        {
                            [...Array(maxIndex+1)].map((_, i) => {
                                return(
                                    <div style={{cursor:"pointer"}}>
                                        {
                                            i === index ?
                                            <button className="slide-selector active" id={i.toString()} onClick={(e : React.MouseEvent) => {setIndex(+(e.target as Element).id)}}></button>
                                            :
                                            <button className="slide-selector inactive" id={i.toString()} onClick={(e : React.MouseEvent) => {setIndex(+(e.target as Element).id)}}></button>
                                        }
                                    </div>
                                )
                            })
                        }
                        <button className="slide-button next-slide"><FontAwesomeIcon icon={faAngleRight} onClick={incrementIndex}/></button>
                    </div>
                </div>
            </div>
        );

            // <div className="fl h-full" css={style}>
            //         <div className="logo w-full w-max-600">
            //             <img src={props.logo} />
            //         </div>
            //             <div className="m-auto fl-column fl-center">
                            
            //                 <div className="w-full">
            //                     <div className="text-container w-full w-max-600 h-full fl fl-items-center">
            //                         {
            //                             index === 0 ?
            //                             <div className="w-full">
            //                                 <h1 className="m0">{props.title}</h1>
            //                                 <h3 className="m-0 w-max-435" style={{padding:"0 30px"}}>{props.subtitle}</h3>
                                            // <Button 
                                            //     variant="contained" 
                                            //     color="primary"
                                            //     component={Link}
                                            //     to="/contribute"
                                            //     >
                                            //         {props.btnText}
                                            // </Button>
            //                             </div>

            //                             :

            //                             <div className="w-full">
            //                                 <h2 className="m0">{props.slides[index-1].title}</h2>
            //                                 <h6 className="m-0 w-max-435" style={{padding:"0 30px"}}>{props.slides[index-1].content}</h6>
            //                                 <Button 
            //                                     variant="contained" 
            //                                     color="primary"
            //                                     component={Link}
            //                                     to="/contribute"
            //                                     >
            //                                         {props.btnText}
            //                                 </Button>
            //                             </div>

            //                         }
                                    
            //                     </div>
            //                 </div>

                        //     <div className="scrollbar fl-row fl-center">
                        //         <button className="slide-button prev-slide"><FontAwesomeIcon icon={faAngleLeft} onClick={decrementIndex}/></button>
                        //         {
                        //             [...Array(maxIndex+1)].map((_, i) => {
                        //                 return(
                        //                     <div style={{cursor:"pointer"}}>
                        //                         {
                        //                             i === index ?
                        //                             <button className="slide-selector selected"></button>
                        //                             :
                        //                             <button className="slide-selector"></button>
                        //                         }
                        //                     </div>
                        //                 )
                        //             })
                        //         }
                        //         <button className="slide-button next-slide"><FontAwesomeIcon icon={faAngleRight} onClick={incrementIndex}/></button>
                        //     </div>
                        // </div>
            // </div>
}