export interface VehiclesProps {
  name: string;
  model: string;
  manufacturer: string;
}

const Vehicles = (props: VehiclesProps) => {
  const { name, model, manufacturer } = props;

  return (
    <div>
      <div>{name}</div>
      <div>{model}</div>
      <div>{manufacturer}</div>
    </div>
  );
};

export default Vehicles;
