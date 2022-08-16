import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import RecomCompo from "./RecomCompo";
import rd from "../Images/Logos/rd.png";
import js from "../Images/Logos/js.png";
import lj from "../Images/Logos/lj.png";
import ck from "../Images/Logos/ck.png";


function Recommendation() {

    return (
        <Container fluid>
            <RecomCompo
                quate="Isuru Soysa is one of the students under my supervision for several software development projects
                 at his undergraduate degree level at the University of Kelaniya. He is a creative-minded individual,
                 passionate about front-end development and a good team player who puts his maximum effort to achieve
                 goals as a team member. Also, he is good at leadership, communication, and flexibility in dynamic environments."
                author="Janaka Senanayake"
                description1="PhD Student at Robert Gordon University, UK."
                description2="Lecturer at University of Kelaniya, Sri Lanka."
                linkedInLink="https://www.linkedin.com/in/janaka-senanayake-01059825/"
                fbLink="https://www.facebook.com/janaka.senanayake"
                pic={js}
            />
            <RecomCompo
                quate="Isuru is an enthusiastic young talent who always accept whatever the challenge comes in his way.
                 As a designer and as a project member, he always deliver his best. Getting the chance to work with him,
                  I have noticed that whenever he point out a bottleneck, he always come up with a solution for the same
                   at the same point. He is a good marketer and a resource to any organization.
                   Wishing him all the best for his future endeavors..."
                author="Lakmini Jayasekara"
                description1="HR Professional"
                description2="Hayleys Advantis Limited"
                linkedInLink="https://www.linkedin.com/in/lakmini-jayasekara-03282215b/"
                fbLink="https://www.facebook.com/lakmini.jayasekara.988"
                pic={lj}
            />
             <RecomCompo
                quate="Isuru is a creative and committed teammate who has a passion towards making creative business content for the social media. Isuru is not only a reliable, self motivated individual but also an enthusiastic team player who has a positive attitude towards work. Isuru always strives to do a solid work in whatever the task he is been assigned to. 

                During Isuru's internship, he was actively involved in creating content for the company and coming up with plans to improve the social media reach. His solid work encouraged us to continually involve him in on going projects and recommend anyone else to do the same."
                author="Charu Katuwawala"
                description1="Marketing and Business Development"
                description2="Hayleys Advantis Limited"
                linkedInLink="https://www.linkedin.com/in/charu-katuwawala/"
                // fbLink="https://www.facebook.com/lakmini.jayasekara.988"
                pic={ck}
            />
            <RecomCompo
                quate="Isuru proved to be a fantastic person to work with. He worked with me as a project manager and
                the head of designs for Exposition 2020. At Exposition, he gave a spectacular performance. . Give him
                the most difficult assignments, the ones that everyone else is having trouble with, and he will get them
                 done. Isuru consistently maintains positive relationships with his teammates and demonstrates strong
                 leadership abilities. I've always thought of Isuru as one of the best teammates I've ever had the pleasure
                 of working with."
                author="Ravindu Deshan"
                description1="Editor In Chief - Exposition Magazine 16th Issue"
                description2="Software Engineering Undergraduate - Level IV"
                linkedInLink="https://www.linkedin.com/in/ravindu-deshan/"
                fbLink="https://www.facebook.com/ravi.deshan"
                pic={rd}
            />
        </Container>
    );
}

export default Recommendation;
