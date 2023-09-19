import {
  Button,
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  chakra,
} from "@chakra-ui/react";
import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import instance from "../../instance";
import { useRouter } from "next/router";

const inter = Inter({
  subsets: ["latin"],
});
const AdminTable = () => {
  const router = useRouter();
  const [allData, setAllData] = useState([]); // This will store all the data.
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4;

  // Calculate the number of total pages.
  const totalPages = Math.ceil(allData.length / perPage);

  useEffect(() => {
    const handleFetch = async () => {
      const response = await instance.post(`/users/unapproved`);
      setAllData(response.data);
    };
    handleFetch();
  }, []);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const getDisplayedData = () => {
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    return allData.slice(start, end);
  };

  return (
    <Flex
      width="1000px"
      padding="16px"
      flexDirection="column"
      alignItems="flex-start"
      gap="24px"
      borderRadius="16px"
      background="#FFF"
      ml={"24px"}
      mr={"24px"}
      mt={"34px"}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        alignSelf="stretch"
      >
        <Text
          color="#5E17EB"
          className={plus_jakarta?.className}
          fontSize="18px"
          fontStyle="normal"
          fontWeight="600"
          lineHeight="150%"
          letterSpacing="-0.18px"
          w={"746px"}
        >
          Accept/Reject
        </Text>
      </Flex>

      <Flex>
        <TableContainer w={"970px"} borderRadius={"8px"}>
          <Table size="md">
            <Thead>
              <Tr>
                <Th
                  className={plus_jakarta?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="150%"
                  background="#F0FF96"
                  boxShadow="0px 3px 2px 0px rgba(0, 0, 0, 0.08)"
                >
                  ID
                </Th>
                <Th
                  className={plus_jakarta?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="150%"
                  background="#F0FF96"
                  boxShadow="0px 3px 2px 0px rgba(0, 0, 0, 0.08)"
                >
                  Game
                </Th>
                <Th
                  className={plus_jakarta?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="150%"
                  background="#F0FF96"
                  boxShadow="0px 3px 2px 0px rgba(0, 0, 0, 0.08)"
                >
                  Image
                </Th>
                <Th
                  className={plus_jakarta?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="150%"
                  background="#F0FF96"
                  boxShadow="0px 3px 2px 0px rgba(0, 0, 0, 0.08)"
                >
                  Average Rating
                </Th>
                <Th
                  background="#F0FF96"
                  boxShadow="0px 3px 2px 0px rgba(0, 0, 0, 0.08)"
                ></Th>
              </Tr>
            </Thead>
            <Tbody fontWeight={"700"}>
              {getDisplayedData().map((item, index) => (
                <Tr key={index}>
                  <Td>{item.userId}</Td>
                  <Td>{item.which_game}</Td>
                  <Td>
                    <Image
                      src={item.image_url}
                      alt={item.which_game}
                      w="3rem"
                    />
                  </Td>
                  <Td>{item.average_rating.toFixed(2)}</Td>
                  <Td>
                    <Button onClick={() => router?.push("/project")}>
                      Details
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>

      <Flex
        justifyContent="flex-end"
        alignItems="center"
        gap="16px"
        alignSelf="stretch"
      >
        <Flex
          padding="12px 0px"
          alignItems="center"
          gap="11px"
          borderTop="1px solid  #EAECF0"
        >
          <Flex
            padding="10px 8px"
            justifyContent="center"
            alignItems="center"
            gap="8px"
            borderRadius="8px"
            border="1px solid #D0D5DD"
            background=" #FFF"
            boxShadow="0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
            onClick={goToPreviousPage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15.8327 10.0001H4.16602M4.16602 10.0001L9.99935 15.8334M4.16602 10.0001L9.99935 4.16675"
                stroke="#344054"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Flex>
          <Text
            color="#344054)"
            className={inter?.className}
            fontSize="14px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="20px"
          >
            Page <chakra.span fontWeight="500">{currentPage}</chakra.span> of{" "}
            <chakra.span fontWeight="500">{totalPages}</chakra.span>
          </Text>

          <Flex
            padding="10px 8px"
            justifyContent="center"
            alignItems="center"
            gap="8px"
            borderRadius="8px"
            border="1px solid #D0D5DD"
            background=" #FFF"
            boxShadow="0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
            onClick={goToNextPage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.1673 10.0001H15.833M15.833 10.0001L10.0007 15.8334M15.833 10.0001L10.0007 4.16675"
                stroke="#344054"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AdminTable;
