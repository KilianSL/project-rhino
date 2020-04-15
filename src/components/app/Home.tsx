import React from 'react';
import LandingPage from './LandingPage';
import Rhino from './Rhino';
import logo from '../../logo.svg';

const landingPageValues = {
    title : "MongoDB Atlas",
    subtitle : "Cloud-hosted MongoDB service on AWS, Azure, and GCP. Deploy, operate, and scale a MongoDB database in just a few clicks.",
    logo,
    slides : [
        {
            title : "Trusted by thousands of companies, from startup to enterprise",
            content : "“With MongoDB Atlas, time is being spent on development and innovation rather than checking and optimizing for database speed. I would recommend that anyone interested in using MongoDB start with MongoDB Atlas and learn about the query language rather than focusing on the underlying mechanics of the database.”— Alex Oberg, Ticketmaster"
        },
        {
            title : "Fully automated and elastic",
            content : "MongoDB Atlas automates infrastructure provisioning, setup, and deployment so your teams can get the database resources they need, when they need them. Patches and minor version upgrades are applied automatically. And when you need to modify your cluster — whether it’s to scale out or perform an upgrade — MongoDB Atlas lets you do so in a few clicks with no downtime window required.",
        },
        {
            title : "Always on and durable",
            content : "With MongoDB Atlas, your self-healing clusters are made up of geographically distributed database instances to ensure no single point of failure. Want even better availability guarantees? Get multi-region fault tolerance by enabling cross-region replication. MongoDB Atlas also includes powerful features to enhance reliability for your mission-critical production databases, such as continuous backups and point-in-time recovery."
        },
        {
            title: "Secure from the start",
            content: "MongoDB Atlas makes it easy to control access to your database. Your database instances are deployed in a unique Virtual Private Cloud (VPC) to ensure network isolation. Other security features include IP whitelisting or VPC Peering, always-on authentication, encryption at rest and encryption in transit, sophisticated role-based access management, and more."
        },
        {
            title: "The metrics and tools you need, all in one platform",
            content: "MongoDB Atlas includes an integrated set of features that take the pain out of database monitoring and optimization. Get deep visibility into your cluster using optimized charts tracking dozens of key metrics, easily customize and send alerts, see what’s happening in your cluster in real-time, and take advantage of automatically generated suggestions on how to improve query performance."
        },
        {
            title: "Available in a nearby region on your preferred cloud",
            content: "If your application has a global user base, MongoDB Atlas can also automatically distribute the data you want to any number of regions of your choice for low-latency read and write access."
        }
    ],
    btnText : "Contribute",
    btnLink : Rhino
};

export default function home(props : object){
    return(
        <LandingPage {...landingPageValues}/>
    );
}