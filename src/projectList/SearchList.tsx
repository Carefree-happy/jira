import { User } from "common/commonType";

interface SearchPanelProps {
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
  users: User[];
}

const SearchList = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <form>
      <div>
        {/* setParam(Object.assign({}, param, {name: evt.target.value})) */}
        <input
          type="text"
          value={param.name}
          onChange={(evt) => {
            setParam({
              ...param,
              name: evt.target.value,
            });
          }}
        />

        <select
          name=""
          id=""
          value={param.personId}
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
        >
          <option value="">负责人</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SearchList;