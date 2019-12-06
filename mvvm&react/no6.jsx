function InputNumber(props) {
  const { value, defaultValue } = props;
  const controlled = !!value;
  const [cValue, setCValue] = useState(value || defaultValue);

  console.log("controlled", controlled);
  return controlled ? (
    <input
      value={cValue}
      onChange={e => {
        console.log("changed", e.target.value);
        setCValue(e.target.value);
      }}
    />
  ) : (
    <input
      defaultValue={cValue}
      onChange={e => {
        console.log("changed", e.target.value);
        setCValue(e.target.value);
      }}
    />
  );
}