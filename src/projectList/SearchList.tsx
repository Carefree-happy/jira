import { Form, Input, Select } from "antd";
import { User } from "common/commonType";

interface SearchPanelProps {
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
  users: User[];
}

const Option = Select.Option;
const Item = Form.Item;

const SearchList = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <Form style={{ marginBottom: "2rem" }} layout={"inline"}>
      <Item>
        {/* setParam(Object.assign({}, param, {name: evt.target.value})) */}
        <Input
          type="text"
          value={param.name}
          onChange={(evt) => {
            setParam({
              ...param,
              name: evt.target.value,
            });
          }}
        />
      </Item>
      <Item>
        <Select
          value={param.personId}
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt,
            })
          }
        >
          <Option value="">负责人</Option>
          {users.map((user) => (
            <Option key={user.id} value={user.id}>
              {user.name}
            </Option>
          ))}
        </Select>
      </Item>
    </Form>
  );
};

export default SearchList;
