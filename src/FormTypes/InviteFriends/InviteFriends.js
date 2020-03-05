import React from 'react';
import {Formik} from "formik";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../InviteFriends/InviteFriendsStyle.css'
const initialValues = {
    friends: [
        {
            name: '',
            email: '',
        },
    ],
};


const Invitation = () => (
    <div className="wrap w-100 vh-100">
        <div className="My_content rounded">
            <h1>Invite Friends</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={values => {
                    setTimeout(() =>{
                        alert(JSON.stringify(values, null, 2));
                    }, 500);
                }}
            >
                {() => <div>Foo</div>}
            </Formik>
        </div>
    </div>
);
export default Invitation;