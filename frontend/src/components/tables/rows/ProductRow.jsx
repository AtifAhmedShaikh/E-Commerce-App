import Button from "../../Button";

const ProductRow = () => {
  return (
    <tr className=" border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        Google Pixel Phone
      </th>
      <td className="px-6 py-1">Gray</td>
      <td className="px-6 py-1">Phone</td>
      <td className="px-6 py-1">$799</td>
      <td className="px-6 py-1">21</td>
      <td className="px-6 py-1">19</td>
      <td className="px-6 py-1">
        <Button className="bg-green-600 rounded-sm px-2  text-gray-100 py-1 text-sm hover:bg-green-500">
         Update
        </Button>
        <Button className="bg-red-500 rounded-sm px-2  text-gray-100 py-1 text-sm ml-2 hover:bg-red-400">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ProductRow;
