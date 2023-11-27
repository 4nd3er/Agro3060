import axios from "./axios.js";

//* Create Response
export const getCodeResponseRequest = async (id, email) => axios.get(`/forms/v/${id}?email=${email}`)
export const codeValidationResponseRequest = async (id, code) => axios.post(`/forms/v/${id}`, { code })


//* Responses
export const ResponsesRequest = async () => axios.get("/responses")
export const getResponseRequest = async (id) => axios.get(`/responses/${id}`)
export const getResponsesInstructor = async (id) => axios.get(`/responses/${id}/instructor`)
export const getResponsesForm = async (id) => axios.get(`/responses/${id}`)
