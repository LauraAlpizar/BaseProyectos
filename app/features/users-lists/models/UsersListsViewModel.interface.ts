import type {
  ChangeEvent,
  FormEvent,
} from "react";

export type UsersListsChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

export interface UsersListsViewModel {
  username: string;
  users: string[];
  isAddDisabled: boolean;
  handleChange: (event: UsersListsChangeEvent) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleRemoveUser: (userIndex: number) => void;
}
