import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text } from "react-native";

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
        console.log("hehehe");
      });
  }, []);

  return (
    <>
      {complete && (
        <>
          <Text style={{ marginTop: 30 }}>{product.title}</Text>
          <Text style={{ marginTop: 30 }}>{product.price}</Text>
          <Text style={{ marginTop: 30 }}>{product.description}</Text>
          <Image
            source={{ uri: product.image }}
            style={{ width: 100, height: 100 }}
          />
        </>
      )}
    </>
  );
};

export default ScreenProductDetail;
