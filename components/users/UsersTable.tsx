import { User } from "@/types/user";
import Trash from "../ui/icons/Trash";

interface UsersTableProps {
  users: User[];
  onDelete: (id: string) => void;
}
export default function UsersTable({ users, onDelete }: UsersTableProps) {
  return (
    <div className="w-full border border-border-muted overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-border-muted text-sm">
            <th className=" py-7 px-9 font-bold font-karla">Full Name</th>
            <th className=" py-7 px-9 font-bold font-karla">Department</th>
            <th className=" py-7 px-9 font-bold font-karla">Country</th>
            <th className=" py-7 px-9 font-bold font-karla">Status</th>
            <th className=" py-7 px-9 w-12 text-right"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-transparent text-sm">
          {users.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="py-12 text-center text-muted font-light"
              >
                No users found
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id} className="transition-colors">
                <td className="py-6 px-9 ">{user.name}</td>
                <td className="py-6 px-9 font-light text-muted">
                  {user.department.name}
                </td>
                <td className="py-6 px-9 font-light text-muted">
                  {user.country.name}
                </td>
                <td className="py-6 px-9 font-light text-muted">
                  {user.status.name}
                </td>
                <td className="py-6 px-9 text-right">
                  <button
                    type="button"
                    onClick={() => onDelete(user.id)}
                    className="text-muted hover:text-red-500 transition-colors p-1 cursor-pointer"
                    title="Delete user"
                  >
                    <Trash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
