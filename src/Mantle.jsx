import OuterCore from "./OuterCore";

const Mantle = (props) => {
  return (
    <>
      <div>{props.name}
      <OuterCore name="Outer Core"/>
      </div>
    </>
  );
}

export default Mantle;