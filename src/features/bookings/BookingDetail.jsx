import React from "react";
import Row from "../../ui/Row";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import ButtonText from "../../ui/ButtonText";
import useBooking from "./useBooking";
import Spinner from "../../ui/Spinner";
import BookingDataBox from "./BookingDataBox";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import useCheckout from "../check-in-out/useCheckout";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
`;

export default function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const navigate = useNavigate();
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  if (isLoading) return <Spinner />;

  const { status, id: bookingId } = booking;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={() => navigate(-1)}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      <ButtonGroup>
        {status === "checked-in" && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(bookingId)}
            disabled={isCheckingOut}
          >
            Check out
          </Button>
        )}

        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`checkin/${bookingId}`)}>
            Check in
          </Button>
        )}
        <Button variation="secondary" onClick={() => navigate(-1)}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}
