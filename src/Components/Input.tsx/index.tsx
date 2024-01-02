const Input = (props: any) => {
  const { value, onInputChange } = props;
  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };
  return (
    <>
      <input value={value} onChange={getValue}></input>
    </>
  );
};

export default Input;
