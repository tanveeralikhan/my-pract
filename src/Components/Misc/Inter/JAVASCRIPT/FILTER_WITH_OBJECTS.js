export const filterData = (customer) => {
  customer.filter((customer) => {
    let display = false;
    Object.values(customer).forEach((propValue) => {
      if (propValue.toString().toLowerCase().startsWith("text") && !display) {
        display = true;
      }
    });
  });
};
