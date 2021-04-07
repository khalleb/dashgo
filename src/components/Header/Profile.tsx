import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Khalleb Ribeiro</Text>
          <Text color="gray.300" fontSize="small">khallebw@gmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Khalleb Ribeiro" src="https://github.com/khalleb.png" />
    </Flex>
  )
}