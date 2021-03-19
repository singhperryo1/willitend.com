import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
export default function Subscriptionbutton()
{
    return(
        <Grid item xs={12}>
            <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="By selecting this box, you will receive email regarding the update information, including the herd immunity numbers having crucial changes in your area, from us."
            />
        </Grid>
    );
}