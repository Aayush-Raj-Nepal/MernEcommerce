import React, { useEffect } from "react";
import swal from "sweetalert2";
import { useHistory } from "react-router-dom";

function PFailure() {
  let history = useHistory();
  useEffect(() => {
    swal
      .fire({ title: "Payment failed", icon: "warning" })
      .then(history.push("/"));
  }, []);
  return <div></div>;
}

export default PFailure;
