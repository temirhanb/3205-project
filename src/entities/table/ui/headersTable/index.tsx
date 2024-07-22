import React from "react";

export const HeadersTable: React.FC = () => {

  return (
    <tr className={'h-12 flex justify-between'}>
      <th className={'text-left'}>Email</th>
      <th className={'text-right'}>Number</th>
    </tr>
  );
};
