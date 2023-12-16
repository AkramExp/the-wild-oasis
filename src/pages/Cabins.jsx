import CabinTable from "../features/cabins/CabinTable";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import AddCabin from "../features/cabins/AddCabin";

export default function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Cabins</Heading>
        <p>sort/filter</p>
      </Row>
      <Row type="vertical">
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}
