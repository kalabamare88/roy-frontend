import React from 'react';
import { Link } from 'react-router-dom';
import { support } from '../../../constants/links';

const Footer = () => {
  return (
    <footer className="bg-main-dark-bg">
      <div className="mx-auto w-full  max-w-screen-2xl px-3 md:px-5 py-5 lg:py-7">
        <p className="font-semibold text-bermuda">
          Need help? For our support page&nbsp;
          <Link to={support} className="underline ">
            click here
          </Link>{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
