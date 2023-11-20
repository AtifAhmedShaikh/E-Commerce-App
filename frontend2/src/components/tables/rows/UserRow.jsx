import Button from "../../Button";

const UserRow = () => {
  return (
    <tr className=" border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        Atif Ahmed Shaikh
      </th>
      <td className="px-6 py-1">atifahmed2219@gmail.com</td>
      <td className="px-6 py-1">$9520</td>
      <td className="px-6 py-1">3</td>
      <td className="px-6 py-1">
        <Button className="bg-green-400 rounded-sm px-2  text-gray-100 py-1 text-sm">
          Chat with Email
        </Button>
        <Button className="bg-blue-400 rounded-sm px-2  text-gray-100 py-1 text-sm ml-2">
          Order Details
        </Button>
      </td>
    </tr>
  );
};

export default UserRow;
