# Access Modifiers in TypeScript OOP

#### Access Modifiers in OOP help us when we design a class blueprint. Access modifiers indicate which properties we should use where and how. They improve readability, accessibility, and maintainability.

###### TypeScript provides three visibility levels for class properties:

1. `public`: accessible from anywhere.
2. `private`: accessible only within the defining class.
3. `protected`: accessible only within the defining class and child classes.

## Example_of_Public_Properties:

```ts
class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("Rashed");
person.name = "Rashed alam"; // name property accessable outside the class because it's public
```

Public properties can be accessed anywhere from inside/outside the class.

## Example_of_Private_Properties:

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}
```

Private properties cannot be accessed directly from outside the class. Use public methods to interact with them.

## Example_of_Protected_Properties:

```ts
class User {
  protected email: string;

  constructor(email: string) {
    this.email = email;
  }
}

class Admin extends User {
  showEmail(): string {
    return this.email; // Child class can access protected property
  }
}
```

Protected properties can be accessed by child classes that extend the parent class.


### TypeScript provides a powerful property modifier, which is the `readonly` modifier. It can only be assigned/initialized once and cannot be modified afterward.

If you use it in a class, you can use it with the visibility `(private, protected)` modifier. First of all, you can type the `private/protected` visibility modifier. Then you can type the `readonly` modifier. Then, the property name, like `private readonly ID: number`.

## Example_of_readonly_Properties:

```ts
class User {
  public readonly id: string;
  constructor(id: string) {
    this.id = id;
  }
}

const user = new User("U001");
user.id; // U001
user.id = "U002"; // Error:because it is readonly
```

Readonly properties are ideal for values that should remain constant throughout an object's lifetime.
