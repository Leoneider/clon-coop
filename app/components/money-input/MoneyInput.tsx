import { TextInput } from "flowbite-react";
import { NumericFormat } from "react-number-format";

function MoneyInput(props: any) {
  return (
    <NumericFormat
      {...props}
      thousandSeparator="."
      decimalSeparator=","
      customInput={TextInput}
      prefix={"$"}
      sizing={"lg"}
    />
  );
}

export default MoneyInput;
