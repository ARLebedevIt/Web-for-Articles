export interface User {
  id: StringConstructor
  username: string
}

export interface UserSchema {
  authData?: User
}
