export const idlFactory = ({ IDL }) => {
  const Customer = IDL.Record({
    'id' : IDL.Text,
    'Date' : IDL.Text,
    'Time' : IDL.Text,
    'name' : IDL.Text,
    'TaskName' : IDL.Text,
    'Category' : IDL.Text,
    'Priority' : IDL.Text,
  });
  return IDL.Service({
    'addCustomer' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [],
        ['oneway'],
      ),
    'addUser' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [],
        ['oneway'],
      ),
    'getCustomers' : IDL.Func([], [IDL.Vec(Customer)], ['query']),
    'getValue' : IDL.Func([], [IDL.Nat], ['query']),
    'increment' : IDL.Func([], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
