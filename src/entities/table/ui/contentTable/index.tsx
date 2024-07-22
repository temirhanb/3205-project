import React from "react";
import {IUser} from "../../../../store/slices/userList";

interface IProps {
  item: IUser;
}

export const ContentTable: React.FC<IProps> = ({item}) => {

  const numberMusk = String(item.number).replace(/.{1,2}/g, "$&-").slice(0, -1);
  return (
    <tr
      className={
        `h-14 border-t-2 
         flex items-center  hover:opacity-70 cursor-pointer`
      }
    >
      <td className={"text-slate-800 grow"}>
        {item.email}
      </td>
      <td>
        {numberMusk}
      </td>
    </tr>
  );
};
