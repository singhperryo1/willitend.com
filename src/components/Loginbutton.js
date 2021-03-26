import Button from '@material-ui/core/Button';
import Loginicon from '../Icon/login.png';
const Loginbutton = ({ style }) =>
{
    return(
        <div>
            <Button variant="contained" href="#contained-buttons" style={style}>
                <img src={Loginicon} width ={15} height={15}/>
                Sign In
            </Button>
        </div>
    );
}
export default Loginbutton;