import React, { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Row from "../ui/Row";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

export default function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Cabins</Heading>
        <p>sort/filter</p>
      </Row>
      <Row type="vertical">
        <CabinTable />
        <Button onClick={() => setShowForm((show) => !show)}>
          Add new cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}
