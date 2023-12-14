import React from "react";
import CabinTable from "../features/cabins/CabinTable";
import Row from "../ui/Row";
import Heading from "../ui/Heading";

export default function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Cabins</Heading>
        <p>sort/filter</p>
      </Row>
      <Row type="vertical">
        <CabinTable />
      </Row>
    </>
  );
}
