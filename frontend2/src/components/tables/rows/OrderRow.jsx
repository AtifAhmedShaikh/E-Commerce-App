const OrderRow = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        atifahmed2219@gmail.com
      </th>
      <td className="px-6 py-1">
        <span className="bg-bue-200 rounded-md text-sm">pending</span>
      </td>
      <td className="px-6 py-1">1 day ago</td>
      <td className="px-6 py-1">9</td>
      <td className="px-6 py-1">2600</td>
      <td className="px-6 py-1">16500</td>
    </tr>
  );
};

export default OrderRow;
