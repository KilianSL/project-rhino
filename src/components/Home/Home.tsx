import React from 'react';
import {LandingPage, Rhino} from '../../components';
import logo from '../../images/logo.png';
import background from '../../images/background.jpg';

// const landingPageValues = {
//     title: "Save the Rhino",
//     subtitle: "Crowdsource intelligence to combat rhino poaching in Botswana",
//     logo,
//     slides : [
//         {
//             title : "Our Mission",
//             content : "In partnership with Adarga, we are going to crowdsource a dataset to help military operations to tackle rhino poaching in Botswana and North of the Zambezi river. Phase 1 consists of finding URLs that can point to potentially useful data sources. The next phase will consist of extracting data from these links, categorising it and cleaning it. This next phase will being within the next 2 weeks."
//         },
//         {
//             title : "How you can help",
//             content : "All kinds of resources may be useful. For example you can submit articles, research papers, links to sources of satellite imagery or other telemetry data"
//         },
//         {
//             title : "Final Aim",
//             content : "A useful final output of this project would be code for producing different geographical heatmap overlays which then could be combined. For example, we could produce a heatmap of likely rhino watering holes, or heatmaps of difficult terrain for either poachers or rhinos. The eventual combination of these heatmaps will hopefully be able to inform where forces on the ground should deploy their resources."
//         }
//     ],
//     btnText : "Contribute",
//     btnLink : Rhino
// };

const landingPageValues = {
    title : "Save the Rhinos",
    subtitle : "Crowdsource intelligence to combat rhino poaching in Botswana",
    logo : logo,
    background : background,
    button1 : {
        text : "Contribute",
        to : "/contribute"
    },
    button2 : {
        text : "Learn More",
        to : "/about"
    },
    footer : "The AI Core"
}

export default function home(props : object){
    return(
        <LandingPage {...landingPageValues}/>
    );
}