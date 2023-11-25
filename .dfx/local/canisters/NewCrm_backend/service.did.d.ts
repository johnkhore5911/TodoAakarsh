import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Customer {
  'id' : string,
  'Date' : string,
  'Time' : string,
  'name' : string,
  'TaskName' : string,
  'Category' : string,
  'Priority' : string,
}
export interface _SERVICE {
  'addCustomer' : ActorMethod<
    [string, string, string, string, string, string],
    undefined
  >,
  'addUser' : ActorMethod<
    [string, string, string, string, string, string],
    undefined
  >,
  'getCustomers' : ActorMethod<[], Array<Customer>>,
  'getValue' : ActorMethod<[], bigint>,
  'increment' : ActorMethod<[], undefined>,
}
