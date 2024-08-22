import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
<section class="mb-4  border-2 mx-3 lg:mt-[130px]">


<h2 class="h1-responsive font-weight-bold text-center my-4 font-bold text-5xl">Contact us</h2>

<p class=" w-responsive mx-auto mb-5 text-center lg:w-[700px]">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>

<div class="row">
 
    <div class="col-md-3 text-center">
        <ul class="list-unstyled mb-0">
            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                <p>San Francisco, CA 94126, USA</p>
            </li>

            <li><i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
            </li>

            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@mdbootstrap.com</p>
            </li>
        </ul>
    </div>
    

</div>

</section>
        </div>
    );
};

export default Contact;