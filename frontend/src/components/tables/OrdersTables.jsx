import OrderRow from "./rows/OrderRow"

const OrdersTables = () => {
  return (


<div className="relative overflow-x-hidden overflow-y-scroll w-[85%] mb-10 h-[55vh] border">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
    <thead className="text-xs border-b bg-gray-100 text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          User Email
        </th>
        <th scope="col" className="px-6 py-3">
          Status
        </th>
        <th scope="col" className="px-6 py-3">
          Time
        </th>
        <th scope="col" className="px-6 py-3">
          Total Items
        </th>
        <th scope="col" className="px-6 py-3">
          Shipping Charges
        </th>
        <th scope="col" className="px-6 py-3">
          Total Amount 
        </th>
      </tr>
    </thead>
    <tbody>
        <OrderRow/>
        <OrderRow/>
        <OrderRow/>
        <OrderRow/>
        <OrderRow/>
        <OrderRow/>
        <OrderRow/>
        <OrderRow/>
        <OrderRow/>
        <OrderRow/>
        <OrderRow/>
        <OrderRow/>
        <OrderRow/>
    </tbody>
  </table>
</div>

  )
}

export default OrdersTables