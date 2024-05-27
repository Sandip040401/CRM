import React from 'react';

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.865088153603!2d91.7890911755547!3d26.135941493039674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5923d1707a65%3A0xcfc831143bb72ae9!2sXEOTEC%20E-SERVICES!5e0!3m2!1sen!2sin!4v1713950978479!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0}}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    
  );
};

export default GoogleMap;
