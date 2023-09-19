import {
  Flex,
  Text,
  chakra,
  Button,
  Input,
  Checkbox,
  Image,
} from "@chakra-ui/react";

import { Wix_Madefor_Display } from "next/font/google";
const wix_madefor_display = Wix_Madefor_Display({
  subsets: ["latin"],
});
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const OpenProject = () => {
  const router = useRouter();
  return (
    <Flex
      width={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
      bg="#fff"
      color="white"
    >
      <Image
        src="metahug.webp"
        p={2}
        width={["90%", , , "80%", "70%"]}
        alt="logo"
      />
      <Flex px="4rem" gap={20} h="100%">
        <Flex w={"35%"}>
          <Image src="robbyy.png" alt="rob" maxH="25rem" />
        </Flex>
        <Flex
          borderRadius="lg"
          fontSize="24px"
          className={wix_madefor_display?.className}
          fontWeight="200"
          flexDirection={"column"}
          w={"65%"}
        >
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Text
              textAlign={"left"}
              color="#5E17EB"
              fontSize="64px"
              fontWeight="700"
              letterSpacing="-0.01rem"
              lineHeight="1.2"
              className={wix_madefor_display?.className}
            >
              Sonic Mario
            </Text>
            <Button onClick={() => router?.push("adminDashboard")}>
              Back to Dahboard
            </Button>
          </Flex>
          <Flex mt="1rem">
            <Text
              width="100%"
              color="#5E17EB"
              fontSize={["12px", , , "20px", "20px"]}
              fontWeight="300"
              fontStyle={"normal"}
              marginRight="theme.space[8]"
              overflowWrap="break-word"
              wordWrap="break-word"
              WebkitLineClamp="2"
              WebkitBoxOrient="vertical"
              textAlign={"left"}
            >
              In recent years, advancements in technology have transformed the
              way we live and work. From the rise of artificial intelligence to
              the proliferation of smartphones, these changes have reshaped our
              daily routines and interactions. As we continue to embrace these
              innovations, it's crucial to consider their potential impact on
              society and the need for responsible and ethical use of
              technology.
            </Text>
          </Flex>
          <Flex
            flexDir={"column"}
            alignItems={"start"}
            justifyContent={"start"}
            gap={15}
          >
            <Flex alignItems={"left"} direction={"column"} mt="1.5rem">
              <Flex>
                <Text
                  width="100%"
                  color="#5E17EB"
                  fontSize={["12px", , , "20px", "20px"]}
                  fontWeight="200"
                  fontStyle={"normal"}
                  marginRight="theme.space[8]"
                  overflowWrap="break-word"
                  wordWrap="break-word"
                  WebkitLineClamp="2"
                  WebkitBoxOrient="vertical"
                >
                  Gender : Male
                </Text>
              </Flex>
              <Flex>
                <Text
                  width="100%"
                  color="#5E17EB"
                  fontSize={["12px", , , "20px", "20px"]}
                  fontWeight="200"
                  fontStyle={"normal"}
                  marginRight="theme.space[8]"
                  overflowWrap="break-word"
                  wordWrap="break-word"
                  WebkitLineClamp="2"
                  WebkitBoxOrient="vertical"
                >
                  Age : 20
                </Text>
              </Flex>
              <Flex>
                <Text
                  width="100%"
                  color="#5E17EB"
                  fontSize={["12px", , , "20px", "20px"]}
                  fontWeight="200"
                  fontStyle={"normal"}
                  marginRight="theme.space[8]"
                  overflowWrap="break-word"
                  wordWrap="break-word"
                  WebkitLineClamp="2"
                  WebkitBoxOrient="vertical"
                >
                  Country : England
                </Text>
              </Flex>
              <Flex>
                <Text
                  width="100%"
                  color="#5E17EB"
                  fontSize={["12px", , , "20px", "20px"]}
                  fontWeight="200"
                  fontStyle={"normal"}
                  marginRight="theme.space[8]"
                  overflowWrap="break-word"
                  wordWrap="break-word"
                  WebkitLineClamp="2"
                  WebkitBoxOrient="vertical"
                >
                  Discord : abc
                </Text>
              </Flex>
              <Flex>
                <Text
                  width="100%"
                  color="#5E17EB"
                  fontSize={["12px", , , "20px", "20px"]}
                  fontWeight="200"
                  fontStyle={"normal"}
                  marginRight="theme.space[8]"
                  overflowWrap="break-word"
                  wordWrap="break-word"
                  WebkitLineClamp="2"
                  WebkitBoxOrient="vertical"
                >
                  Experience : 12 years
                </Text>
              </Flex>
            </Flex>
            <Flex
              justifyContent="flex-end"
              alignItems="center"
              gap="16px"
              pb="3rem"
            >
              <Flex
                padding="8px 24px"
                justifyContent="center"
                alignItems="center"
                gap="12px"
                borderRadius="12px"
                background="#EFE3E3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_747_675)">
                    <path
                      d="M22.8 4H19.08C18.8015 2.87141 18.0646 1.85735 16.9935 1.12872C15.9224 0.40009 14.5826 0.00145452 13.2 0L10.8 0C9.41735 0.00145452 8.07758 0.40009 7.0065 1.12872C5.93542 1.85735 5.19852 2.87141 4.92 4H1.2C0.88174 4 0.576515 4.10536 0.351472 4.29289C0.126428 4.48043 0 4.73478 0 5C0 5.26522 0.126428 5.51957 0.351472 5.70711C0.576515 5.89464 0.88174 6 1.2 6H2.4V19C2.40191 20.3256 3.03466 21.5964 4.15946 22.5338C5.28427 23.4711 6.80929 23.9984 8.4 24H15.6C17.1907 23.9984 18.7157 23.4711 19.8405 22.5338C20.9653 21.5964 21.5981 20.3256 21.6 19V6H22.8C23.1183 6 23.4235 5.89464 23.6485 5.70711C23.8736 5.51957 24 5.26522 24 5C24 4.73478 23.8736 4.48043 23.6485 4.29289C23.4235 4.10536 23.1183 4 22.8 4ZM10.8 2H13.2C13.9443 2.00076 14.6702 2.19338 15.2779 2.55144C15.8857 2.90951 16.3457 3.41549 16.5948 4H7.4052C7.6543 3.41549 8.11428 2.90951 8.72206 2.55144C9.32985 2.19338 10.0557 2.00076 10.8 2ZM19.2 19C19.2 19.7956 18.8207 20.5587 18.1456 21.1213C17.4705 21.6839 16.5548 22 15.6 22H8.4C7.44522 22 6.52955 21.6839 5.85442 21.1213C5.17929 20.5587 4.8 19.7956 4.8 19V6H19.2V19Z"
                      fill="#E76161"
                    />
                    <path
                      d="M10 17.9995C10.2652 17.9995 10.5196 17.8942 10.7071 17.7066C10.8946 17.5191 11 17.2647 11 16.9995V10.9995C11 10.7343 10.8946 10.4799 10.7071 10.2924C10.5196 10.1049 10.2652 9.99951 10 9.99951C9.73478 9.99951 9.48043 10.1049 9.29289 10.2924C9.10536 10.4799 9 10.7343 9 10.9995V16.9995C9 17.2647 9.10536 17.5191 9.29289 17.7066C9.48043 17.8942 9.73478 17.9995 10 17.9995Z"
                      fill="#E76161"
                    />
                    <path
                      d="M14 17.9995C14.2652 17.9995 14.5196 17.8942 14.7071 17.7066C14.8946 17.5191 15 17.2647 15 16.9995V10.9995C15 10.7343 14.8946 10.4799 14.7071 10.2924C14.5196 10.1049 14.2652 9.99951 14 9.99951C13.7348 9.99951 13.4804 10.1049 13.2929 10.2924C13.1054 10.4799 13 10.7343 13 10.9995V16.9995C13 17.2647 13.1054 17.5191 13.2929 17.7066C13.4804 17.8942 13.7348 17.9995 14 17.9995Z"
                      fill="#E76161"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_747_675">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Text
                  color="#E76161"
                  className={wix_madefor_display?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="24px"
                  letterSpacing="0.15px"
                >
                  Reject
                </Text>
              </Flex>

              <Flex
                padding="8px 24px"
                justifyContent="center"
                alignItems="center"
                gap="12px"
                borderRadius="12px"
                background="green.400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 19.0002H12.5M4 15.8522V18.8002C4 18.9106 4.08954 19.0002 4.2 19.0002H7.14793C7.20097 19.0002 7.25184 18.9791 7.28935 18.9416L17.8586 8.37236C17.9367 8.29425 17.9367 8.16762 17.8586 8.08951L14.9107 5.14159C14.8325 5.06348 14.7059 5.06348 14.6278 5.14159L4.05858 15.7108C4.02107 15.7483 4 15.7992 4 15.8522Z"
                    stroke="#F9FBFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <Text
                  color="#fff"
                  className={wix_madefor_display?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="24px"
                  letterSpacing="0.15px"
                >
                  Approve
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default OpenProject;
