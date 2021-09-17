import React from 'react'
import classes from "./Login.module.css";
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
// import { makeStyles } from '@material-ui/core/styles';

export default function Login() {
    return (
        <main className={classes.main}>
          <div className={classes.imgBox}>
             <img src="https://freerangestock.com/sample/89060/sunset-clouds.jpg" alt="sunset"/>
             <h3>
                 Klip
             </h3>
             <small>
                 Key Life Indicator Plan
            </small>
          </div> 
          <div className={classes.contentBox}>
             <div className={classes.formBox}>
                 <h3>
                     <strong>Log in</strong>
                 </h3>
                <Button
                    className={classes.btnField}
                    variant="outlined" 
                    size="large"
                    >Sign in using Google
                </Button>
                <Button
                    className={classes.btnField}
                    variant="outlined" 
                    size="large"
                    >Sign in using Microsoft
                </Button>
                <h5><span>OR</span></h5>
                <form>
                    <TextField className={classes.inputField}
                        variant="outlined"
                        type="email"
                        label="Email"
                        placeholder="email@email.com"
                        color="secondary"
                        size="small"
                     />
                    <TextField className={classes.inputField}
                        variant="outlined"
                        type="password"
                        label="password"
                        color="secondary"
                        size="small"
                    />
                    <FormControlLabel
                        control ={<Checkbox 
                        />} 
                        label="Remember me"
                    />
                    <Button 
                        className={classes.btnLgnField}
                    >Login Now</Button>
                </form>
                <p className={classes.forgtPass}>
                    <a href="/">Forgot Password?</a>
                </p>
                <p className={classes.signUpLink}>
                     Is this your First Time? 
                    <a href="/">Sign up Now</a>
                </p>
             </div>
          </div>
        </main>
    )
}
                    
                    
