// src/mockData.ts
import { Location } from "@/types/Location";
import { Flight } from "@/types/Flight";
import { Customer } from "@/types/Customer";
import { Employee } from "@/types/Employee";
import { Booking } from "@/types/Booking";

// Locations data
export const mockLocations: Location[] = [
  { id: "LOC1", name: "New York", country: "USA", airportCode: "JFK" },
  { id: "LOC2", name: "London", country: "UK", airportCode: "LHR" },
  { id: "LOC3", name: "Paris", country: "France", airportCode: "CDG" },
  { id: "LOC4", name: "Tokyo", country: "Japan", airportCode: "HND" },
  { id: "LOC5", name: "Sydney", country: "Australia", airportCode: "SYD" },
  { id: "LOC6", name: "Rome", country: "Italy", airportCode: "FCO" },
];

// Flights data (with expanded location data)
export const mockFlights: Flight[] = [
  {
    id: "FL001",
    flightNumber: "FA101",
    departureLocationId: "LOC1",
    arrivalLocationId: "LOC2",
    departureTime: new Date("2025-06-15T09:00:00Z"),
    arrivalTime: new Date("2025-06-15T21:00:00Z"),
    aircraftId: "AC001",
    basePrice: 500,
    status: "Scheduled",
    departureLocation: mockLocations[0],
    arrivalLocation: mockLocations[1],
  },
  // Add other flights following the same pattern
];

// Customers data
export const mockCustomers: Customer[] = [
  {
    CustomerID: "CUST001",
    UserID: "U001",
    FirstName: "Alice",
    LastName: "Smith",
    Email: "alice.s@example.com",
    PasswordHash: "hashed_password_1",
    UserType: "Customer",
    Phone: "123-456-7890",
    PassportNumber: "AB123456",
    LoyaltyPoints: 1500,
  },
  // Add other customers
];

// Employees data
export const mockEmployees: Employee[] = [
  {
    EmployeeID: "EMP001",
    UserID: "U006",
    FirstName: "Sarah",
    LastName: "Jones",
    Email: "sarah.j@example.com",
    PasswordHash: "hashed_password_6",
    UserType: "Employee",
    Position: "Booking Agent",
    Department: "Sales",
    HireDate: "2022-01-15",
  },
  // Add other employees
];

// Bookings data (with expanded relations)
export const mockBookings: Booking[] = [
  {
    BookingID: "B001",
    CustomerID: "CUST001",
    FlightID: "FL001",
    BookingDate: "2025-05-20T10:30:00Z",
    Status: "Confirmed",
    AgentID: "EMP001",
    // Expanded relations for mock data
    Customer: mockCustomers.find(c => c.CustomerID === "CUST001"),
    Flight: mockFlights.find(f => f.id === "FL001"),
    Agent: mockEmployees.find(e => e.EmployeeID === "EMP001"),
  },
  // Add other bookings
];

// Export all mock data in a single object if needed
export const mockData = {
  locations: mockLocations,
  flights: mockFlights,
  customers: mockCustomers,
  employees: mockEmployees,
  bookings: mockBookings,
};
