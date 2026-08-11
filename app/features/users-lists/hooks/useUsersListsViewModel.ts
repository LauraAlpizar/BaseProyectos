import { useCallback, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { UsersListsViewModel } from "../models/UsersListsViewModel.interface";

type InputChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

export const useUsersListsViewModel = (): UsersListsViewModel => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState<string[]>([]);

  const normalizedUsername = useMemo(
    () => username.trim(),
    [username]
  );

  const isAddDisabled = normalizedUsername.length === 0;

  const handleChange = useCallback(
    (event: InputChangeEvent) => {
      setUsername(event.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (normalizedUsername.length === 0) {
        return;
      }

      setUsers((previousUsers) => [
        ...previousUsers,
        normalizedUsername,
      ]);
      setUsername("");
    },
    [normalizedUsername]
  );

  const handleRemoveUser = useCallback((userIndex: number) => {
    setUsers((previousUsers) =>
      previousUsers.filter((_, index) => index !== userIndex)
    );
  }, []);

  return {
    username,
    users,
    isAddDisabled,
    handleChange,
    handleSubmit,
    handleRemoveUser,
  };
};
