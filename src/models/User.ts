export type UserRole = "user" | "superuser" | "admin";

export interface User {
  name: string;
  email: string;
  role: UserRole;
}

export interface RoleUpgradeRequest {
  userId: string;
  currentRole: UserRole;
  requestedRole: UserRole;
  timestamp: Date;
  status: "pending" | "approved" | "rejected";
}
