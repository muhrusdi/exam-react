import React from 'react';
import { Link } from 'react-router-dom';
import { postLogin } from '../../config/endpoint';

import {
    Form,
    FormGroup,
    FormText,
    Input,
    CustomInput,
    Button,
    Label,
    EmptyLayout,
    ThemeConsumer
} from './../../components';

import { HeaderAuth } from "../components/Pages/HeaderAuth";
import { FooterAuth } from "../components/Pages/FooterAuth";



const Login = () => {  

  // const [data, setData] = useState({

  // })

  // useEffect( () => {
  //   const data = new FormData()
  //   data.append("Username", )
  //   postLogin()
  // },
  //   [],
  // );

  // const handleChange = e => {
  //   setData({
  //     ...data, 
  //     []
  //   })
  // }

  const handleSubmit = e => {
    const data = new FormData(e.target)
    postLogin(data) 
  }

  return (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <HeaderAuth 
                title="Sign In to Application"
            />
            { /* END Header */}
            { /* START Form */}
            <Form className="mb-3" onSubmit={ handleSubmit }>
                <FormGroup>
                    <Label for="emailAdress">
                        Email Adress
                    </Label>
                    <Input type="text" name="username" id="emailAdress" placeholder="Enter email..." className="bg-white" />
                    <FormText color="muted">
                        We&amp;ll never share your email with anyone else.
                    </FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Password
                    </Label>
                    <Input type="password" name="password" id="password" placeholder="Password..." className="bg-white" />
                </FormGroup>
                <FormGroup>
                    <CustomInput type="checkbox" id="rememberPassword" label="Remember Password" inline />
                </FormGroup>
                <ThemeConsumer>
                {
                    ({ color }) => (
                        <Button color={ color } block>
                            Sign In
                        </Button>
                    )
                }
                </ThemeConsumer>
            </Form>
            { /* END Form */}
            { /* START Bottom Links */}
            <div className="d-flex mb-5">
                <Link to="/pages/forgotpassword" className="text-decoration-none">
                    Forgot Password
                </Link>
                <Link to="/pages/register" className="ml-auto text-decoration-none">
                    Register
                </Link>
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
  );
} 

export default Login;
