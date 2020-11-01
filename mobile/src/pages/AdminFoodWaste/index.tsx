import React, { useEffect } from "react";

const AdminFoodWaste = ({ route, navigation }: any) => {
  const userInfo = route.params.data;
  useEffect(() => {
    navigation.setOptions({
      title: userInfo,
    });
  }, []);
  return <h1>a</h1>;
};

export default AdminFoodWaste;
