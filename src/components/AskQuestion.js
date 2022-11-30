import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';





export default function AskQuestion () {
    return (
        <>
            <h1>Ask your pet question</h1>
                <Box>
                    <TextField label="Question Title">Question: </TextField><br></br>
                    <TextField label="Question"></TextField>
                    <Button label="Submit" variant="outlined">Submit</Button>
                </Box>
        </>
    )
}