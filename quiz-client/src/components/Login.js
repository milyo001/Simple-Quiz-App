import React from 'react'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Center from './Center'
import useForm from '../hooks/useForm'
import { createAPIEndpoint, ENDPOINTS } from '../api'
import useStateContext from '../hooks/useStateContext'
import { useNavigate } from 'react-router-dom'


const getFreshModel = () => ({
    name: '',
    email: ''
})

export default function Login() {

    const { context, setContext } = useStateContext();
    const navigate = useNavigate();

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    const login = e => {
        //To prenent the form from reloding
        e.preventDefault();
        if(validate()) {
            createAPIEndpoint(ENDPOINTS.partisipant)
                .post(values)
                .then(res => {
                    setContext({ participantId: res.data.id })
                    navigate('/quiz');
                })
                .catch(err => console.log(err))
        }

    }
    const validate = () => {
        let temp = {};
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid!";
        temp.name = values.name !== "" ? "" : "The name field is required!";
        setErrors(temp);
        // Check if all variables in temp object are equal to ""
        return Object.values(temp).every(x => x === "")
    }

    return (
        <Center>
            <Card sx={{ width: 400 }}>
                <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h3" sx={{ marginY: 3 }}>
                        Ready for the Quiz?</Typography>
                    <Box sx={{
                        '& .MuiTextField-root': {
                            margin: 1,
                            width: '90%'
                        }
                    }}>
                        <form noValidate autoComplete='on' onSubmit={login}>
                            <TextField
                                label="Email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.email && {error:true, helperText: errors.email})}
                                />
                            <TextField
                                label="Name"
                                name="name"
                                value={values.name}
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.name && {error:true, helperText: errors.name})}
                                />
                            <Button sx={{ width: '90%' }}
                                type='submit'
                                variant='contained'
                                size='large'
                            >Begin</Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>
    )
}
