import React from "react";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";

export default function Users() {
  return (
    <Row type="vertical">
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </Row>
  );
}
