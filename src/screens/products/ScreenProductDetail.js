import axios from "axios";
import { useEffect, useState } from "react";
import { Appbar } from "react-native-paper";

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
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
    </>
  );
};

export default ScreenProductDetail;
