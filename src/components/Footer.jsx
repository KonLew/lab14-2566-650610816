import { Text } from "@mantine/core";

export const Footer = ({ years, name, id }) => {
  return (
    <div>
      <Text align="center" color="dimmed" my="sm">
        Copyright © {years} {name} {id}
      </Text>
    </div>
  );
};
