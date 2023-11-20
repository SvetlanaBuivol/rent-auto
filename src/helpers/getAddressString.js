export const getAddressString = address => {
  const addressParts = address.split(',').map(item => item.trim());
  const city = addressParts[1];
  const country = addressParts[2];
  return `${city} | ${country}`;
};
