export const Filter = () => {

  return (
    <div className={"flex flex-row  items-center justify-between mt-10 w-[320px] sm:w-[520px] md:w-[720px]"}>
      <div className={"flex items-start"}>
        <label htmlFor="">Email:</label>
        <input type="text" className={'ml-5 rounded border-cyan-700 border-2 p-2'}/>
      </div>
      <div className={"ml-10 flex items-start"}>
        <label htmlFor="">Number</label>
        <input type="number" className={'ml-5 rounded border-cyan-700 border-2 p-2'}/>
      </div>
      <button className={"ml-10 rounded-md border-cyan-700 border-2 py-2 px-5 hover:border-cyan-500"}>
        <span>Submit</span>
      </button>
    </div>);
};