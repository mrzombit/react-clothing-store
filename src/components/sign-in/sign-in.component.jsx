import React, { Component } from 'react'
import CustomButton from '../custom-buttom/custom-button.component'
import FormInput from '../form-input/form-input.component'
import { auth, signInWithGoogle } from '../../firebase/firebse.utils'

import './sign-in.styles.scss'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault() //we wanna access full control what sub it is gonna do
        
        const { email, password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', password:''})
        }catch(error){
            console.log(error)
        }
    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label='email'
                        name='email'
                        type='email'
                        onChange={this.handleChange}
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        label='password'
                        name='password'
                        type='password'
                        onChange={this.handleChange}
                        value={this.state.password}
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}Sign In with GOOGLE{' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn