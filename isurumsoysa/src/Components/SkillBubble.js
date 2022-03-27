import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SkillBubble(props) {
    return (
        <div>
            <p className="skill-bubble py-2 px-3 m-1">{props.skill}</p>
        </div>
    );
}

export default SkillBubble;
