export const filterCustomerPhoneNumbers = (
  phoneNumbers: string[] | object[]
): object[] => {
  return (phoneNumbers as Array<object>).filter(
    (phoneNumberItem) =>
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
        phoneNumberItem.toString()
      ) && phoneNumberItem
  );
};
