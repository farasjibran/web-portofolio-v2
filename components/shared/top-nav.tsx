import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import { MotionBox } from 'components/shared/animations/motion';
import { useLinkColor } from 'components/theme';
import { AccentPicker } from 'components/theme/Accent';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ColorModeSwitcher } from '../theme/ColorModeSwitcher';

const webLinks = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Tech Stack', path: '/tech-stack' }
];

interface NavLinkProps {
  index?: number;
  name: string;
  path: string;
  linkColor: string;
  onClose: () => void;
}

const NavLink = (props: NavLinkProps) => {
  const router = useRouter();
  const link = {
    bg: useColorModeValue('gray.200', 'gray.700'),
    color: useColorModeValue('blue.500', 'blue.200')
  };

  return (
    <NextLink href={props.path} passHref>
      <Link
        px={3}
        py={1}
        lineHeight="inherit"
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: link.bg,
          color: props.linkColor
        }}
        bg={router.pathname === props.path ? link.bg : 'transparent'}
        color={router.pathname === props.path ? props.linkColor : 'inherit'}
        onClick={() => props.onClose()}
      >
        {props.name}
      </Link>
    </NextLink>
  );
};

export default function TopNav() {
  const linkColor = useLinkColor();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        px={4}
        boxShadow={'lg'}
        position="fixed"
        width="100%"
        zIndex="55"
        css={{
          backdropFilter: 'saturate(180%) blur(5px)',
          backgroundColor: useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')
        }}
      >
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          w={['90%', '85%', '80%']}
          maxW={800}
          mx="auto"
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={'Open Menu'}
            display={['inherit', 'inherit', 'none']}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <MotionBox whileHover={{ scale: 1.2 }} shadow="md" rounded="full">
              <NextLink href={'/'} passHref>
                <Avatar
                  as={Link}
                  size={'sm'}
                  showBorder={true}
                  borderColor={linkColor}
                  src="assets/images/jibran.webp"
                />
              </NextLink>
            </MotionBox>
            <HStack as={'nav'} spacing={3} display={{ base: 'none', md: 'flex' }}>
              {webLinks.map((link, index) => (
                <NavLink
                  key={index}
                  name={link.name}
                  path={link.path}
                  linkColor={linkColor}
                  onClose={onClose}
                />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <AccentPicker
              aria-label="Accent Color Picker"
              variant="ghost"
              zIndex={1}
              color={linkColor}
              mr={2}
            />
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
