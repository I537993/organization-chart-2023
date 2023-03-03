Start entity and type names with capital letters
Use plural form for entities - for example, Authors
Use singular form for types - for example, Genre
Start elements with a lowercase letter - for example, name

An enumeration is a complete, ordered listing of all the items in a collection. 

For to-many associations specify an on condition following the canonical expression pattern <assoc>.<backlink> = $self as in this example:

entity Employees {
  key ID : Integer;
  addresses : Association to many Addresses
    on addresses.owner = $self;
}
