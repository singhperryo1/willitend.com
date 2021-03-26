import Box from '@material-ui/core/Box';
import Copyright from "./components/Copyright.js";
import Path from "./components/Path.js"; 

function App() {
  return (
  	<>
    <Path />
    <Box mt={5}>
        <Copyright />
    </Box>
      </>
  );
}

export default App;

