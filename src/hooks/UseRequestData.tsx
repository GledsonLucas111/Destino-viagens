import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UseRequestData = (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          iconColor: "#fff",
          background: "#dd1b35",
          html: `<h3> ${e.message} </h3>`,
          color: "#fff",
          showConfirmButton: false,
          timer: 1500,
          toast: true,
        });
      });
  }, [url]);

  return [data];
};
export default UseRequestData;
