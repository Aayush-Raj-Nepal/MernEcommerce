import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert2";
function PSuccess() {
  let history = useHistory();
  useEffect(() => {
    swal
      .fire({ title: "Payment Success", icon: "success" })
      .then(history.push("/"));
  }, []);
  return <div></div>;
}

export default PSuccess;
