import React, { useEffect } from "react";

const Webmail = () => {
  useEffect(() => {
    window != undefined && window.open("https://srv84.prodns.com.br/webmail");
  }, []);

  return <div />;
};

export default Webmail;
