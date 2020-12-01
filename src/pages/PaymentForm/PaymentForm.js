import React from 'react';
import MultistepForm from '../../components/MultistepForm/MultistepForm';
import PaymentInformation from '../../components/PaymentInformation/PaymentInformation';
import './PaymentForm.css';

const PaymentForm = () => {
    return (
        <div className="paymentForm">
            <div className="container-fluid">
                <div className="row">
                    
                    <div className="paymentInfo-top col-lg-4 col-md-12">
                       <PaymentInformation />
                    </div>

                    <div className="col-lg-8 col-md-12">
                        <div className="multistepForm">
                            <MultistepForm />
                        </div>
                    </div>

                    <div className="paymentInfo-bottom col-lg-4 col-md-12">
                       <PaymentInformation />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PaymentForm;