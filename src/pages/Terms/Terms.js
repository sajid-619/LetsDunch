import React from 'react';
import '../Privacy/Privacy.css';
import Pressum from '../../img/pressumBackground.svg';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="privacy">
      <div className="row d-flex">
        <div className="col-md-4">
          <div className="text-center">
            <Link className="back" to="/">
              Back
            </Link>
            <h3 className="my-4">Terms of Service</h3>
            <p className="company-details-text">
              Lets Dunch is committed to protecting and respecting your privacy.
            </p>
            <div>
              <img src={Pressum} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="important-details">
            <h3>TERMS OF USE </h3>
            <br />
            Unless otherwise specified, the terms of use detailed in this
            section apply generally when using this Website.
            <br /> <br />
            Single or additional conditions of use or access may apply in
            specific scenarios and in such cases are additionally indicated
            within this document.
            <br /> <br />
            By using this Website, Users confirm to meet the following
            requirements: <br /> There are no restrictions for Users in terms of
            being Consumers or Business Users;
            <br />
            <br />
            <br />
            <h5>Account registration </h5>
            <br />
            To use the Service Users may register or create a User account,
            providing all required data or information in a complete and
            truthful manner.
            <br /> <br />
            Users may also use the Service without registering or creating a
            User account, however, this may cause limited availability of
            certain features or functions.
            <br /> <br />
            Users are responsible for keeping their login credentials
            confidential and safe. For this reason, Users are also required to
            choose passwords that meet the highest standards of strength
            permitted by this Website.
            <br /> <br />
            By registering, Users agree to be fully responsible for all
            activities that occur under their username and password.
            <br /> <br />
            Users are required to immediately and unambiguously inform the Owner
            via the contact details indicated in this document, if they think
            their personal information, including but not limited to User
            accounts, access credentials or personal data, have been violated,
            unduly disclosed or stolen.
            <br />
            <br />
            <br />
            <h5>Account termination </h5>
            <br />
            Users can terminate their account and stop using the Service at any
            time by doing the following: <br /> By directly contacting the Owner
            at the contact details provided in this document.
            <br />
            Account suspension and deletion The Owner reserves the right, at its
            sole discretion, to suspend or delete at any time and without
            notice, User accounts which it deems inappropriate, offensive or in
            violation of these Terms.
            <br /> <br />
            The suspension or deletion of User accounts shall not entitle Users
            to any claims for compensation, damages or reimbursement.
            <br /> <br />
            The suspension or deletion of accounts due to causes attributable to
            the User does not exempt the User from paying any applicable fees or
            prices.
            <br /> <br /> <br />
            <h5>Content on this Website</h5>
            <br />
            Unless where otherwise specified or clearly recognizable, all
            content available on this Website is owned or provided by the Owner
            or its licensors. The Owner undertakes its utmost effort to ensure
            that the content provided on this Website infringes no applicable
            legal provisions or third-party rights. However, it may not always
            be possible to achieve such a result. In such cases, without
            prejudice to any legal prerogatives of Users to enforce their
            rights, Users are kindly asked to preferably report related
            complaints using the contact details provided in this document.
            <br /> <br />
            <br />
            <h5>
              Rights regarding content on this Website - All rights reserved{' '}
            </h5>
            <br />
            The Owner holds and reserves all intellectual property rights for
            any such content. Users may not therefore use such content in any
            way that is not necessary or implicit in the proper use of the
            Service. In particular, but without limitation, Users may not copy,
            download, share (beyond the limits set forth below), modify,
            translate, transform, publish, transmit, sell, sublicense, edit,
            transfer/assign to third parties or create derivative works from the
            content available on this Website, nor allow any third party to do
            so through the User or their device, even without the User's
            knowledge. Where explicitly stated on this Website, the User may
            download, copy and/or share some content available through this
            Website for its sole personal and non-commercial use and provided
            that the copyright attributions and all the other attributions
            requested by the Owner are correctly implemented. Any applicable
            statutory limitation or exception to copyright shall stay
            unaffected.
            <br /> <br /> <br />
            <h5>Content provided by Users </h5>
            <br />
            The Owner allows Users to upload, share or provide their own content
            to this Website. By providing content to this Website, Users confirm
            that they are legally allowed to do so and that they are not
            infringing any statutory provisions and/or third-party rights.
            <br /> <br /> <br />
            <h5>Rights regarding content provided by Users </h5>
            <br />
            Users acknowledge and accept that by providing their own content on
            this Website they grant the Owner a non-exclusive, fully paid-up and
            royalty-free license to process such content solely for the
            operation and maintenance of this Website as contractually required.
            To the extent permitted by applicable law, Users waive any moral
            rights in connection with content they provide to this Website.
            Users acknowledge, accept and confirm that all content they provide
            through this Website is provided subject to the same general
            conditions set forth for content on this Website.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
