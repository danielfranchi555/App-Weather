import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import img from "../../img/fondo-app-weather.jpg";
import "./Main.scss";
import { Box, Center, Stack, Text } from "@chakra-ui/react";
const Main = () => {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");

  const apiKey = "66989ed4a88d043add999a66ea38409b";

  const getApi = async () => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const resp = await data.json();
    setData(resp);
    console.log(resp);
  };

  useEffect(() => {
    getApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getApi();
    setCity("");
  };
 

  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
     
      <Stack justify='center' align='center' h="100px">
        <Form
          getApi={getApi}
          setCity={setCity}
          city={city}
          handleSubmit={handleSubmit}
        /> 
      </Stack>

      {!data.name ? <Center> <Text fontSize='30px'>Ingresa una ciudad</Text></Center> :
      <>
        <Stack h="30px" justifyContent="center" align="center">
       <Box>
         <Text fontWeight='900' color='white.600' fontSize="30px">{data.name}</Text>
       </Box>
     </Stack>
     <Stack justify="center" align="center">
       <Text  fontSize="40px"> {data.main ? data.main.temp : null}°</Text>
     </Stack>
     <Center>
       <Stack
         h="120px"
         borderRadius="20px"
         align="center"
         width="500px"
         m="auto"
         bg="rgba(30,0,43,0.12)"
         direction={["row", "row"]}
         justify="center"
         spacing="70px"
       >
         <Box h='auto' w="auto" >
          <Stack flexDirection='column' spacing={0}>
            <Text fontWeight='700'  fontSize='30px' color='white'>   Max  </Text>
            <Center>
            <Text color='white'> {data.main ? data.main.temp_max : null}° </Text>
            </Center>
          </Stack>
           
         </Box>
         <Box  h='auto' w="auto" >
         <Stack flexDirection='column' justify='center' align='center' spacing={0}>
            <Text fontWeight='700' fontSize='30px' color='white'>   Min  </Text>
            <Center>
            <Text color='white'> {data.main ? data.main.temp_min: null}° </Text>
            </Center>
          </Stack>
         </Box>
         <Box  h='auto' w="auto" >
         <Stack flexDirection='column'  justify='center' align='center' spacing={0} >
            <Text fontWeight='700' fontSize='30px' color='white'>   Humidity  </Text>
            <Center>
            <Text color='white'> {data.main ? data.main.humidity : null}% </Text>
            </Center>
          
          </Stack>
         </Box>
       </Stack>
     </Center>
      </>
     
      }

    </div>
  );
};

export default Main;
