import Debug "mo:base/Debug";
import Text "mo:base/Text";
import Array "mo:base/Array";
import Order "mo:base/Order";
 import Int "mo:base/Int";
import List "mo:base/List" ;

actor {

  type Customer = {
    id : Text;
    TaskName : Text;
    name : Text;
    Category : Text;
    Time : Text;
    Date : Text;
    Priority : Text;
  };
 

  stable var idCount = 0;

  stable var customers: List.List<Customer> = List.nil<Customer>();
   
  public func addCustomer( TaskNameI : Text, nameI : Text, CategoryI: Text,TimeI: Text, DateI : Text,PriorityI: Text) {
    idCount := idCount + 1;

    var custNew : Customer ={

      id = Int.toText(idCount);
      TaskName = TaskNameI;
      name = nameI;
      Category = CategoryI;
      Time = TimeI;
      Date = DateI;
      Priority = PriorityI;

    };
    customers := List.push(custNew, customers);
    Debug.print(debug_show (customers))
  };
  

  public query func getCustomers() : async [Customer] {
    return List.toArray(customers);
  };


  func compareCustomerByName(a : Customer, b : Customer) : Order.Order {
    return Text.compare(a.name, b.name)
  };
  stable var currentValue : Nat = 0;

  public func increment() : async () {
    currentValue += 1
  };

  public query func getValue() : async Nat {
    currentValue
  };


  public func addUser(TaskNameI : Text, nameI : Text, CategoryI: Text, TimeI: Text, DateI : Text, PriorityI: Text) {
    
    idCount := idCount +1;
    var userNew : Customer = {
      id = Int.toText(idCount);
      TaskName = TaskNameI;
      name = nameI;
      Category = CategoryI;
      Time = TimeI;
      Date = DateI;
      Priority = PriorityI;
    };
  
    customers := List.push(userNew, customers);
    Debug.print(debug_show (customers));
  };

}
