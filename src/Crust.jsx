import Mantle from "./Mantle";

const Crust = (props) => {
  return (
    <>
      <div>{props.name}
        <Mantle name="Mantle" />
      </div>
    </>


  );
}

export default Crust;

