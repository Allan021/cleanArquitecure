import { filterCustomerPhoneNumbers } from "./filterCustomerPhoneNumbers";

export const parseCustomerPhoneNumbers = (
  phoneNumbers: string[] | object[]
): string[] => {
  return filterCustomerPhoneNumbers(phoneNumbers).map((phoneNumbers) =>
    phoneNumbers.toString().startsWith("+")
      ? phoneNumbers.toString()
      : "+" + phoneNumbers
  );
};
