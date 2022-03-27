import {Col, Container, Row} from "react-bootstrap";
import SkillComponent from "./SkillComponent";

function Skills() {
    const skillSet = [
        {
        "topic": "Programming Languages, Frameworks and Libraries",
        "skills": ["ReactJs","JavaScript","HTML","css","Typescript","SCSS","Redux","C","C++","Java","C#","NodeJs",
            "MongoDB","MySQL","ExpressJs","Boostrap","React Bootstrap","Rest API","NodeMailer","DAX","Xamarin Forms"]
        },
        {
            "topic": "Industry Practices and Tools",
            "skills": ["Agile","Scrum","KanBan","Git","GitHub","Bitbucket","GitHub Workflow","Jira Software","Adobe Photoshop",
                "Adobe XD","Figma","Power BI","WebStorm IDE","Visual Studio IDE","Vs Code","Postman","MongoDB Compass",
                "Wondershare Filmora", "Microsoft Office Package","Excel Macro","SharePoint",
                "Power Automate","Power Apps","Google Analytics","IBM SPSS"]
        },
        {
            "topic": "Academic Contents: IT",
            "skills": ["Fundamentals of Computing","Programming Concepts","Discrete Mathematics for Computing",
                "Object Oriented Programming","Database Design and Development","Data Structures and Algorithms",
                "Information Systems Modelling","Interactive Application Development","Web Application Development",
                "Computer Architecture and Operating Systems","Business Information Systems","Human Factors in Information Technology",
                "Computer Networks","Embedded Systems Development","Project Management","Statistical Techniques for Data Analysis"]
        },
        {
            "topic": "Academic Contents: Management",
            "skills": ["Principles of Management","Statistics Basics","Economics","Optimization Methods in Management Science"
            ,"Accounting Concepts and Costing","Leadership and Management Communication","Marketing Management","Operations Management",
            "Management of Technology","Human Resources Management","Managerial Finance","Strategic Management",
            "Computer based tools for Management Applications", "Strategic Marketing and International Trade","Research Methods"]
        },
        {
            "topic": "Inter Personal Skills",
            "skills": ["Leadership","Effective Communication","Team work","Public Speaking","Listening","Creativity",
                        "Self Confidant","Out of Box Thinking","People Management","Pressure Handling"]
        },
        {
            "topic": "Other Skills",
            "skills": ["Poetry","Mobile Photography","Graphic Designing","Teaching","Video Editing","Content Creation",
                        "Social Media Handling"]

        }
    ]

    const skillSetRender = skillSet.map((skillItem)=>{
       return <SkillComponent key={skillItem.id} topic={skillItem.topic} skills={skillItem.skills}/>
    })

    return (
        < >
            {skillSetRender}
        </>);
}

export default Skills;