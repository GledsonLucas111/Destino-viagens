import { useEffect, useState } from "react";
import axios from "axios";
import { Alert, AlertIcon } from "@chakra-ui/react";

const UseRequestData = (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => {
        <Alert status="error">
          <AlertIcon />
          {e.message}
        </Alert>;
      });
  }, [url]);

  return [data];
};
export default UseRequestData;
