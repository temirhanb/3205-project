import React from "react";
import {TableWidget} from "../../widgets";
import {Filter} from "../../widgets/filter";

export const MainPage: React.FC = () => {
  // const dispatch = useAppDispatch();

  return (
    <div className={"flex items-center justify-center h-[100%] flex-col"}>
      <Filter/>
      <TableWidget/>
    </div>
  );
};
