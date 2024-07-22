import React, {useState} from "react";
import {IUser} from "../../../../store/slices/userList";
import {useAppDispatch} from "../../../../store/hook";

interface IProps {
  item: IUser;
}

export const ContentTable: React.FC<IProps> = ({item}) => {

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
        {item.number}
      </td>
    </tr>
  );
};
