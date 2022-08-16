import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <Card>
            <div className='about'>
                <h1>About</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nisl nec aliquam tincidunt, nunc nisl aliquam
                    tortor, vel aliquam nisl nunc vel nisl. Sed euismod, nisl nec
                    aliquam tincidunt, nunc nisl aliquam tortor, vel aliquam nisl
                    nunc vel nisl.
                </p>
                <Link to='/'>Go back</Link>
            </div>
        </Card>
    );
}

export default AboutPage;