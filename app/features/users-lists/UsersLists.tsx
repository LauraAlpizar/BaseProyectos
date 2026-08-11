"use client";

import { BUTTON, INPUT_TYPES, STRING } from "@/app/constants";
import {
  Button,
  FormField,
  SectionTitle,
  Text,
} from "@/app/components";
import { useUsersListsViewModel } from "./hooks/useUsersListsViewModel";

const UsersLists = () => {
  const {
    username,
    users,
    isAddDisabled,
    handleChange,
    handleSubmit,
    handleRemoveUser,
  } = useUsersListsViewModel();

  return (
    <main className="min-h-screen bg-zinc-50 text-dark-blue px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <SectionTitle
          text="Users Lists"
          className="text-left"
        />

        <form
          onSubmit={handleSubmit}
          className="grid gap-4"
        >
          <div className="grid gap-3 sm:grid-cols-[1fr_auto] items-end">
            <FormField
              id="users-list-input"
              name="username"
              label="Nuevo usuario"
              labelSuffix={STRING.Empty}
              value={username}
              onChange={handleChange}
              type={INPUT_TYPES.TEXT}
              placeholder="Escribe un nombre"
              classNameField="rounded-xl border border-slate-300 bg-slate-50 px-3 py-2"
            />
            <Button
              type="submit"
              variant={BUTTON.PRIMARY}
              disabled={isAddDisabled}
              className="min-w-[112px] rounded-xl bg-sky-600 px-5 py-2 text-sm font-medium text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Agregar
            </Button>
          </div>
        </form>

        <div className="mt-8">
          {users.length === 0 ? (
            <Text className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 text-sm text-slate-600">
              No hay usuarios agregados.
            </Text>
          ) : (
            <ul className="space-y-3">
              {users.map((user, index) => (
                <li
                  key={`${user}-${index}`}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <Text className="font-medium">{user}</Text>
                  <Button
                    type="button"
                    variant={BUTTON.DANGER}
                    onClick={() => handleRemoveUser(index)}
                    className="rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                  >
                    Eliminar
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
};

export default UsersLists;
