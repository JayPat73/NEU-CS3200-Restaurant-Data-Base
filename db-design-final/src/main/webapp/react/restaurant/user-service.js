// TODO: declare URL where server listens for HTTP requests
const USERS_URL = "http://localhost:8080/api/users"

// TODO: retrieve all users from the server
export const findAllUsers = () =>
    fetch(`${USERS_URL}`).then(response => response.json())

// TODO: retrieve a single User by their ID
export const findUserById = (id) =>
    fetch(`${USERS_URL}/${id}`).then(response => response.json())

// TODO: delete a User by their ID
export const deleteUser = (id) =>
    fetch(`${USERS_URL}/${id}`, {
      method: "DELETE"
    })

// TODO: create a new User
export const createUser = (user) =>
    fetch(`${USERS_URL}`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {'content-type': 'application/json'}}).then(response => response.json())

// TODO: update a user by their ID
export const updateUser = (id, user) =>
    fetch(`${USERS_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {'content-type': 'application/json'}}).then(response => response.json())

// TODO: find all orders for a user
export const userOrders = (id) =>
    fetch(`${USERS_URL}/orders/users/${id}`).then(response => response.json())

// TODO: export all functions as the API to this service
export default {
  findAllUsers,
  findUserById,
  deleteUser,
  createUser,
  updateUser,
  userOrders
}