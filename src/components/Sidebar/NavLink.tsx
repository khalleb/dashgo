
import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import { ElementType } from 'react';
import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';

type NavLinkProps = ChakraLinkProps & {
  icon: ElementType;
  href: string;
  children: string;
};

export function NavLink({
  icon,
  href,
  children,
  ...rest
}: NavLinkProps) {
  return (
    <ActiveLink
      href={href}
      passHref
    >
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text marginLeft="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}