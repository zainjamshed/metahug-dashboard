import {
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  chakra,
  Image,
} from "@chakra-ui/react";

import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});

const AdminDash = () => {
  return (
    <Flex>
      <Flex
        width="20%"
        height="100vh"
        padding="24px 16px"
        flexDirection="column"
        alignItems="flex-start"
        gap="32px"
        flexShrink="0"
        background="#F0FF96"
        overflow={"hidden"}
      >
        <Flex
          padding="24px"
          alignItems="center"
          gap="8px"
          alignSelf="stretch"
          borderBottom="1px solid #5E17EB"
        >
          <Image src="metahug.webp" />
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="16px"
          alignSelf="stretch"
        >
          <Flex
            padding="12px 0px"
            justifyContent="flex-end"
            alignItems="center"
            gap="8px"
            alignSelf="stretch"
            borderRadius="8px"
            background="#5E17EB"
          >
            <Flex
              padding="0px 8px"
              alignItems="center"
              gap="8px"
              flex="1 0 0"
              borderLeft="2px solid var(--Primary, #277DE3)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="17"
                viewBox="0 0 14 17"
                fill="none"
              >
                <path
                  d="M6.57348 8.24534C7.63229 8.24534 8.54916 7.86556 9.29831 7.11628C10.0475 6.36716 10.4272 5.45054 10.4272 4.3916C10.4272 3.33298 10.0475 2.41627 9.29819 1.66686C8.54891 0.917834 7.63216 0.538086 6.57348 0.538086C5.51451 0.538086 4.59786 0.917834 3.84874 1.66699C3.09962 2.41614 2.71971 3.33289 2.71971 4.3916C2.71971 5.45054 3.09958 6.36728 3.84886 7.11644C4.59814 7.86546 5.51489 8.24534 6.57348 8.24534ZM13.3165 12.8413C13.2949 12.5295 13.2512 12.1894 13.1868 11.8303C13.1219 11.4684 13.0383 11.1264 12.9382 10.8138C12.8348 10.4907 12.6942 10.1716 12.5204 9.8658C12.3399 9.54843 12.128 9.27205 11.8902 9.04465C11.6416 8.80674 11.3371 8.61546 10.9851 8.4759C10.6342 8.33715 10.2454 8.26684 9.82956 8.26684C9.66621 8.26684 9.50828 8.33384 9.20322 8.53246C8.98637 8.67366 8.76888 8.81387 8.55075 8.95308C8.34116 9.08665 8.05722 9.21177 7.7065 9.32505C7.36435 9.43577 7.01694 9.49193 6.67404 9.49193C6.33117 9.49193 5.98385 9.43577 5.64132 9.32505C5.29101 9.21186 5.00708 9.08677 4.7977 8.95321C4.55489 8.79805 4.3352 8.65646 4.14464 8.5323C3.83996 8.33371 3.68186 8.26668 3.51855 8.26668C3.10252 8.26668 2.71387 8.33712 2.36315 8.47606C2.01134 8.61534 1.70678 8.80662 1.45787 9.04477C1.22022 9.2723 1.00819 9.54852 0.828 9.8658C0.654313 10.1716 0.513688 10.4905 0.410158 10.8139C0.310158 11.1265 0.226565 11.4684 0.161627 11.8303C0.0972838 12.1889 0.0535965 12.5291 0.0319715 12.8416C0.0104598 13.1561 -0.000202754 13.4712 2.91917e-06 13.7864C2.91917e-06 14.6217 0.265502 15.2978 0.789062 15.7964C1.30615 16.2885 1.99034 16.5381 2.82237 16.5381H10.5265C11.3585 16.5381 12.0424 16.2886 12.5596 15.7965C13.0833 15.2982 13.3488 14.6219 13.3488 13.7863C13.3487 13.4639 13.3379 13.1459 13.3165 12.8413Z"
                  fill="#A0A5B9"
                />
              </svg>
              <Text
                color=" #fff"
                className={plus_jakarta?.className}
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
              >
                Accept/Rejection
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex flexDir={"column"} w={"80%"}>
        <Flex
          width="100%"
          padding="16px 24px"
          justifyContent="flex-end"
          alignItems="center"
          gap="16px"
          background="#5e17eb"
        >
          <Flex
            padding="10px 14px"
            alignItems="center"
            gap="8px"
            alignSelf="stretch"
            borderRadius="8px"
            border="1px solid var(--gray-300px, #D0D5DD)"
            background="var(--base-white, #FFF)"
            boxShadow="0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
            w={"292px"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
                stroke="#667085"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <Text
              color=" #667085"
              className={plus_jakarta?.className}
              fontSize="16px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
            >
              Search
            </Text>
          </Flex>
          <Flex alignItems="flex-start" gap="20px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.497 9.21614 21.3898 6.54715 19.4213 4.57867C17.4528 2.61018 14.7839 1.50298 12 1.5ZM12.75 16.5C12.75 16.6989 12.671 16.8897 12.5303 17.0303C12.3897 17.171 12.1989 17.25 12 17.25C11.8011 17.25 11.6103 17.171 11.4697 17.0303C11.329 16.8897 11.25 16.6989 11.25 16.5V15.75C11.25 15.5511 11.329 15.3603 11.4697 15.2197C11.6103 15.079 11.8011 15 12 15C12.1989 15 12.3897 15.079 12.5303 15.2197C12.671 15.3603 12.75 15.5511 12.75 15.75V16.5ZM13.1475 12.5205C13.0241 12.5808 12.9209 12.6756 12.8503 12.7934C12.7798 12.9112 12.7449 13.047 12.75 13.1842V13.5C12.75 13.6989 12.671 13.8897 12.5303 14.0303C12.3897 14.171 12.1989 14.25 12 14.25C11.8011 14.25 11.6103 14.171 11.4697 14.0303C11.329 13.8897 11.25 13.6989 11.25 13.5V13.185C11.243 12.7507 11.3651 12.3241 11.6007 11.9592C11.8364 11.5943 12.175 11.3075 12.5738 11.1353C12.8918 11.0044 13.155 10.7678 13.319 10.4655C13.4829 10.1631 13.5376 9.81347 13.4738 9.4755C13.4136 9.15059 13.2478 8.85464 13.0021 8.63363C12.7565 8.41261 12.4447 8.27889 12.1153 8.25324C11.7858 8.22759 11.4572 8.31144 11.1803 8.49177C10.9034 8.6721 10.6938 8.93882 10.584 9.2505C10.5525 9.34516 10.5024 9.43258 10.4367 9.50765C10.3709 9.58271 10.2909 9.6439 10.2012 9.68765C10.1116 9.73139 10.0141 9.7568 9.91446 9.7624C9.81484 9.76799 9.71511 9.75365 9.62111 9.72022C9.52711 9.68679 9.44072 9.63494 9.367 9.56771C9.29329 9.50047 9.23373 9.41921 9.19181 9.32867C9.14989 9.23813 9.12646 9.14014 9.12289 9.04043C9.11932 8.94072 9.13568 8.84131 9.171 8.748C9.33776 8.27651 9.61974 7.85418 9.9913 7.51943C10.3629 7.18469 10.8122 6.94814 11.2985 6.83131C11.7848 6.71447 12.2925 6.72106 12.7756 6.85047C13.2587 6.97987 13.7017 7.228 14.0645 7.57227C14.4272 7.91654 14.6982 8.34604 14.8526 8.8217C15.0071 9.29736 15.0402 9.80409 14.9489 10.2958C14.8577 10.7875 14.6449 11.2486 14.33 11.6371C14.0152 12.0257 13.6081 12.3293 13.146 12.5205H13.1475Z"
                fill="#fff"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_494_10066)">
                <path
                  d="M22.683 9.394L20.803 9.155C20.6497 8.68276 20.4595 8.22334 20.234 7.781L21.395 6.286C21.6218 5.99897 21.7348 5.63834 21.7123 5.27318C21.6898 4.90802 21.5334 4.564 21.273 4.307L19.698 2.732C19.4409 2.47005 19.0961 2.31222 18.7298 2.28879C18.3635 2.26535 18.0014 2.37795 17.713 2.605L16.22 3.766C15.7774 3.54036 15.3176 3.3501 14.845 3.197L14.606 1.32C14.5625 0.956364 14.3873 0.621267 14.1135 0.378048C13.8397 0.134829 13.4862 0.000339105 13.12 0L10.88 0C10.123 0 9.484 0.567 9.394 1.317L9.155 3.197C8.68221 3.34966 8.22241 3.53994 7.78 3.766L6.286 2.605C5.99879 2.37858 5.63825 2.26586 5.27322 2.28836C4.90819 2.31087 4.56422 2.46702 4.307 2.727L2.732 4.301C2.46977 4.55818 2.31178 4.90315 2.28834 5.26969C2.2649 5.63623 2.37767 5.99852 2.605 6.287L3.766 7.781C3.54011 8.22315 3.34984 8.6826 3.197 9.155L1.32 9.394C0.567 9.484 0 10.123 0 10.88V13.12C0 13.877 0.567 14.516 1.317 14.606L3.197 14.845C3.352 15.322 3.543 15.782 3.766 16.219L2.605 17.714C2.37816 18.001 2.26517 18.3617 2.28768 18.7268C2.31019 19.092 2.46662 19.436 2.727 19.693L4.302 21.268C4.55948 21.5294 4.90426 21.6868 5.27044 21.71C5.63662 21.7333 5.99853 21.6208 6.287 21.394L7.781 20.233C8.218 20.457 8.678 20.648 9.155 20.802L9.394 22.678C9.484 23.433 10.123 24 10.88 24H13.12C13.877 24 14.516 23.433 14.606 22.683L14.845 20.803C15.3172 20.6497 15.7767 20.4595 16.219 20.234L17.714 21.395C18.319 21.865 19.173 21.81 19.693 21.273L21.268 19.698C21.53 19.4409 21.6878 19.0961 21.7112 18.7298C21.7346 18.3635 21.622 18.0014 21.395 17.713L20.234 16.219C20.458 15.782 20.649 15.322 20.803 14.845L22.679 14.606C23.0426 14.5625 23.3777 14.3873 23.621 14.1135C23.8642 13.8397 23.9987 13.4862 23.999 13.12V10.88C23.9992 10.5143 23.8654 10.1611 23.623 9.8873C23.3805 9.6135 23.0461 9.43801 22.683 9.394ZM12 17C9.243 17 7 14.757 7 12C7 9.243 9.243 7 12 7C14.757 7 17 9.243 17 12C17 14.757 14.757 17 12 17Z"
                  fill="#fff"
                />
              </g>
              <defs>
                <clipPath id="clip0_494_10066">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <Flex gap={"12px"} alignItems={"center"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_494_10066)">
                  <path
                    d="M22.683 9.394L20.803 9.155C20.6497 8.68276 20.4595 8.22334 20.234 7.781L21.395 6.286C21.6218 5.99897 21.7348 5.63834 21.7123 5.27318C21.6898 4.90802 21.5334 4.564 21.273 4.307L19.698 2.732C19.4409 2.47005 19.0961 2.31222 18.7298 2.28879C18.3635 2.26535 18.0014 2.37795 17.713 2.605L16.22 3.766C15.7774 3.54036 15.3176 3.3501 14.845 3.197L14.606 1.32C14.5625 0.956364 14.3873 0.621267 14.1135 0.378048C13.8397 0.134829 13.4862 0.000339105 13.12 0L10.88 0C10.123 0 9.484 0.567 9.394 1.317L9.155 3.197C8.68221 3.34966 8.22241 3.53994 7.78 3.766L6.286 2.605C5.99879 2.37858 5.63825 2.26586 5.27322 2.28836C4.90819 2.31087 4.56422 2.46702 4.307 2.727L2.732 4.301C2.46977 4.55818 2.31178 4.90315 2.28834 5.26969C2.2649 5.63623 2.37767 5.99852 2.605 6.287L3.766 7.781C3.54011 8.22315 3.34984 8.6826 3.197 9.155L1.32 9.394C0.567 9.484 0 10.123 0 10.88V13.12C0 13.877 0.567 14.516 1.317 14.606L3.197 14.845C3.352 15.322 3.543 15.782 3.766 16.219L2.605 17.714C2.37816 18.001 2.26517 18.3617 2.28768 18.7268C2.31019 19.092 2.46662 19.436 2.727 19.693L4.302 21.268C4.55948 21.5294 4.90426 21.6868 5.27044 21.71C5.63662 21.7333 5.99853 21.6208 6.287 21.394L7.781 20.233C8.218 20.457 8.678 20.648 9.155 20.802L9.394 22.678C9.484 23.433 10.123 24 10.88 24H13.12C13.877 24 14.516 23.433 14.606 22.683L14.845 20.803C15.3172 20.6497 15.7767 20.4595 16.219 20.234L17.714 21.395C18.319 21.865 19.173 21.81 19.693 21.273L21.268 19.698C21.53 19.4409 21.6878 19.0961 21.7112 18.7298C21.7346 18.3635 21.622 18.0014 21.395 17.713L20.234 16.219C20.458 15.782 20.649 15.322 20.803 14.845L22.679 14.606C23.0426 14.5625 23.3777 14.3873 23.621 14.1135C23.8642 13.8397 23.9987 13.4862 23.999 13.12V10.88C23.9992 10.5143 23.8654 10.1611 23.623 9.8873C23.3805 9.6135 23.0461 9.43801 22.683 9.394ZM12 17C9.243 17 7 14.757 7 12C7 9.243 9.243 7 12 7C14.757 7 17 9.243 17 12C17 14.757 14.757 17 12 17Z"
                    fill="#fff"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_494_10066">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <Text
                color="#fff"
                textAlign="center"
                className={plus_jakarta?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
              >
                John
              </Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M11.7166 5.23204C11.858 5.08339 12.049 5 12.248 5C12.4471 5 12.6381 5.08339 12.7795 5.23204C12.8493 5.30503 12.9048 5.39204 12.9427 5.48799C12.9805 5.58395 13 5.68694 13 5.79097C13 5.895 12.9805 5.99799 12.9427 6.09395C12.9048 6.18991 12.8493 6.27691 12.7795 6.34991L8.53202 10.7683C8.39026 10.9168 8.19913 11 8 11C7.80087 11 7.60974 10.9168 7.46798 10.7683L3.22049 6.34991C3.15065 6.27691 3.0952 6.18991 3.05735 6.09395C3.01949 5.99799 3 5.895 3 5.79097C3 5.68694 3.01949 5.58395 3.05735 5.48799C3.0952 5.39204 3.15065 5.30503 3.22049 5.23204C3.36192 5.08339 3.55292 5 3.75197 5C3.95101 5 4.14201 5.08339 4.28345 5.23204L8.00163 8.8556L11.7166 5.23204Z"
                  fill="#fff"
                />
              </svg>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          width="1440px"
          height="87vh"
          background="#F5F6FA"
          overflow={"hidden"}
        >
          <Flex flexDirection="column" alignItems="flex-start" gap="4px">
            <Flex
              width="95%"
              padding="16px"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              gap="8px"
              borderRadius="16px"
              background="#FFF"
              h={"126px"}
              ml={"24px"}
              mr={"24px"}
              mt={"34px"}
            >
              <Flex
                gap="8px"
                alignItems={"flex-start"}
                borderRadius="6px"
                flexDir={"column"}
              >
                <Flex gap={"8px"} alignItems={"center"}>
                  <Text
                    color="#5E17EB"
                    className={plus_jakarta?.className}
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="100%"
                  >
                    Home
                  </Text>
                  <Text
                    color="#5E17EB"
                    className={plus_jakarta?.className}
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="100%"
                  >
                    /
                  </Text>
                  <Text
                    color=" #5E17EB"
                    className={plus_jakarta?.className}
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="100%"
                  >
                    Users
                  </Text>
                </Flex>
                <Flex>
                  <Text
                    color="#5E17EB"
                    className={plus_jakarta?.className}
                    fontSize="24px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="150%"
                    letterSpacing="-0.24px"
                  >
                    Users
                  </Text>
                </Flex>
              </Flex>
            </Flex>
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
                          Description
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>1</Td>
                        <Td>Sonic</Td>
                        <Td>
                          <Image src="metahug.webp" boxSize={"40%"} />
                        </Td>
                        <Td>Sonic is a game created by....</Td>
                      </Tr>
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
                    Page <chakra.span fontWeight="500">1</chakra.span> of{" "}
                    <chakra.span fontWeight="500">10</chakra.span>
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
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default AdminDash;
