# Practical example of combining Union (|) and Intersection (&) types in TypeScript.

## Union Types ('|')

Union types allow a variable to be one of several specified types using the pipe character (|):

#### Example:

```ts
let userId: string | number;

userId = "user123";
userId = 42;
userId = true; // Error - boolean not allowed

type Status = "pending" | "complete";
let uploadStatus: Status = "complete";
```

Union types work with function parameters to accept multiple input formats:

#### Example:

```ts
type Email = string;
type PhoneNo = number;

function getContact(contact: Email | PhoneNo): string {
  if (typeof contact === "string") {
    return "Contact Email: " + contact;
  } else {
    return "Contact No: " + contact;
  }
}
getContact("test@gmail.com");
getContact(999);
```

Union types provide type safety while maintaining flexibility, ensuring you only use values that match one of the specified types.

# Intersection Types ('&')

Intersection types combine multiple types into a single type. They have all the properties of the combined types using the ampersand (&) operator:

#### Example:

```ts
type HasName = { name: string };
type HasAge = { age: number };

type Person = HasName & HasAge;

// Person now has both name AND age properties
let user: Person = {
  name: "Alice",
  age: 30,
};
```

The resulting type must satisfy all requirements of the intersected types - every property from every type in the intersection is required.

### Union (|) and Intersection (&) types combination is very useful in TypeScript. This promotes code reusability and maintainability. Combine union types and intersection types to create flexible data structures.

#### Example:

```ts
type FaceMatch = string;
type PinCode = number;
type LoginMethod = FaceMatch | PinCode;

type UserProfile = {
  id: number;
  displayName: string;
  preferredLogin: LoginMethod;
};

type AdminProfile = UserProfile & {
  permissions: string;
  faceDetection: FaceMatch;
};

// Create variables regularUser and systemAdmin
const regularUser: UserProfile = {
  id: 1,
  displayName: "john_doe",
  preferredLogin: "Face Matching",
};

const systemAdmin: AdminProfile = {
  id: 2,
  displayName: "admin",
  preferredLogin: 1356,
  permissions: "full_access",
  faceDetection: "Face Matched",
};

function getLoginInfo(login: LoginMethod): string {
  if (typeof login === "string") {
    return `Logged in by: ${login}`;
  } else {
    return `Logged in by: ${login}`;
  }
}

getLoginInfo(regularUser.preferredLogin);
getLoginInfo(systemAdmin.preferredLogin);
```
