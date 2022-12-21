import React from 'react';
import NavBar from '../components/NavBar';
import Signin from './sign-in';
import Footer from '../components/Footer';
import Signup from './sign-up';
function Register() {
  return (
    <>
      <NavBar />
      <Signup />
      <Footer />
    </>
  );
}

export default Register;
