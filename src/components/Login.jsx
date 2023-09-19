import {
  Flex,
  Text,
  chakra,
  Button,
  Input,
  Checkbox,
  Image,
  useToast,
} from "@chakra-ui/react";

import { Wix_Madefor_Display } from "next/font/google";
const wix_madefor_display = Wix_Madefor_Display({
  subsets: ["latin"],
});

import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/router";
import { useState } from "react";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const Login = () => {
  const router = useRouter();

  const toast = useToast(); // Initialize useToast

  // useState hooks for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Validation function
  const handleLogin = () => {
    if (email === "lian@metahug.org" && password === "admin") {
      router.push("/adminDashboard");
    } else {
      toast({
        title: "Invalid Login",
        description: "Incorrect email or password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      padding="8px 8px"
      flexDirection="column"
      alignItems="center"
      gap="2px"
      background="#f0ff96"
      h={"100vh"}
    >
      <Image src="metahug.webp" alt="logo" />
      <Flex
        width="592px"
        padding="32px"
        flexDirection="column"
        alignItems="center"
        gap="32px"
        borderRadius="16px"
        background=" #FFF"
        boxShadow="0px 4px 16px 0px rgba(0, 0, 0, 0.08)"
        mb={"10px"}
      >
        <Text
          color="#5e17eb"
          textAlign="center"
          className={wix_madefor_display?.className}
          fontSize="36px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="44px"
        >
          Admin Login
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="48px"
          alignSelf="stretch"
        >
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            gap="24px"
            alignSelf="stretch"
          >
            <Input
              placeholder={"Enter the email"}
              height="48px"
              padding="0px 16px"
              alignItems="center"
              gap="12px"
              alignSelf="stretch"
              color=" #787878"
              className={wix_madefor_display?.className}
              fontSize="16px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
              letterSpacing="0.15px"
              value={email} // Bind value to state
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              value={password} // Bind value to state
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder={"Enter the password"}
              height="48px"
              padding="0px 16px"
              alignItems="center"
              gap="12px"
              alignSelf="stretch"
              color="var(--Input-Text-In-Active, #787878)"
              className={wix_madefor_display?.className}
              fontSize="16px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
              letterSpacing="0.15px"
            />
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            alignSelf="stretch"
          >
            <Text
              color="#5e17eb"
              className={wix_madefor_display?.className}
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
              letterSpacing="0.15px"
            >
              Forgot Password?
            </Text>
          </Flex>
          <Flex
            height="48px"
            padding="8px 24px"
            justifyContent="center"
            alignItems="center"
            gap="12px"
            alignSelf="stretch"
          >
            <Button
              w="100%"
              background="#5e17eb"
              color="#fff"
              className={wix_madefor_display?.className}
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
              letterSpacing="0.15px"
              onClick={handleLogin}
              _hover={{ bg: "#9363f1" }}
            >
              Log in
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Login;
