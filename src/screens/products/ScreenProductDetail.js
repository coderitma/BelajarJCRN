import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";

const ScreenProductDetail = () => {
  const [product, setProduct] = useState();
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setComplete(false);
    axios
      .get("https://fakestoreapi.com/products/1")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {})
      .finally(() => {
        setComplete(true);
      });
  }, []);
};

export default ScreenProductDetail;
