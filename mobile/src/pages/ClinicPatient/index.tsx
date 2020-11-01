import React, { useState, useEffect } from "react";
import { View } from "react-native";
import styles from "./styles";
import Profile from "../../components/Profile";
import Historic from "../../components/Historic";
import ProfileForm from "../../components/ProfileForm";
import { firebaseDataService } from "./../../services/data/index";

const ClinicPatient = (props: any) => {
  const patient_uuid = props.route.params.patient;
  const userInfo = props.route.params.data;
  const [isFetching, setIsFetching] = useState(false);
  const [patient_data, setPatientData] = useState({});

  console.log(props);
  useEffect(() => {
    props.navigation.setOptions({
      title: userInfo,
    });

    firebaseDataService.getPatient(patient_uuid).then(async (data: any) => {
      await setPatientData(data.data());
      setIsFetching(true);
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        {isFetching && <Profile patient_data={patient_data} />}
        <View style={styles.containerDataAndHistory}>
          {isFetching && (
            <>
              <ProfileForm uuid={patient_uuid} alimentation={patient_data} />
              <Historic uuid={patient_uuid} patientData={patient_data} />
            </>
          )}
        </View>
      </View>
    </>
  );
};

export default ClinicPatient;
