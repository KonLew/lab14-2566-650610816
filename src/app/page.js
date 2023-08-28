"use client";
import {
  Button,
  Center,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

import { Footer } from "@/components/Footer";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} /*size in Mantine*/ mt="sm">
        Your rating
        <Rating size="lg"></Rating>
      </Title>

      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        minRows={3}
      ></Textarea>

      <Button mt="xs" color="orange">
        Submit Review
      </Button>

      <Divider mt="sm"></Divider>

      <Group position="center">
        <Title order={4} mt="sm">
          Elon Musk
        </Title>
        <Rating size="sm" mt="sm" readOnly defaultValue={5}></Rating>
      </Group>
      <Text c="dimmed" align="center">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider mt="sm"></Divider>

      <Group position="center">
        <Title order={4} mt="sm">
          Mark Zuck
        </Title>
        <Rating size="sm" mt="sm" readOnly defaultValue={4}></Rating>
      </Group>
      <Text c="dimmed" align="center">
        My favourite part is pepperoni
      </Text>

      <Pagination
        total={20}
        position="center"
        mt="md"
        color="orange"
      ></Pagination>

      <Footer years="2023" id="650610816" name="Surangrat Teymeesak"></Footer>
    </Container>
  );
}
