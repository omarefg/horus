export const getAll = ({ user: { users } }) => users;

export const getUserDetails = ({ user: { userDetails } }) => {
  const {
    name,
    username,
    phone,
    website,
    company: { name: companyName },
  } = userDetails;

  return [
    {
      label: 'Nombre',
      value: name,
    },
    {
      label: 'Nombre de usuario',
      value: username,
    },
    {
      label: 'Teléfono',
      value: phone,
    },
    {
      label: 'Página web',
      value: website,
    },
    {
      label: 'Compañía',
      value: companyName,
    },
  ];
};
