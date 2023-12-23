import { format } from "date-fns";
import Table from "../../ui/Table";
import styled from "styled-components";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import { HiPencil, HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteUser from "./useDeleteUser";
import SignUpForm from "../authentication/SignupForm";

const Name = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
`;

const CreateDate = styled.div`
  color: var(--color-grey-500);
`;

export default function UserRow({ user }) {
  console.log(user);
  const { deleteUser, isDeleting } = useDeleteUser();
  const {
    id: userId,
    email,
    created_at,
    user_metadata: { fullName },
  } = user;

  return (
    <Table.Row>
      <Name>{fullName}</Name>
      <div>{email}</div>
      <CreateDate>{format(new Date(created_at), "MMM dd yyyy")}</CreateDate>
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={userId} />
          <Menus.List id={userId}>
            <Modal.Open opens="edit-user">
              <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
            </Modal.Open>

            <Modal.Open opens="delete-row">
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>

          <Modal.Window name="edit-user">
            <SignUpForm />
          </Modal.Window>

          <Modal.Window name="delete-row">
            <ConfirmDelete
              disabled={isDeleting}
              onConfirm={() => deleteUser(userId)}
            />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}
