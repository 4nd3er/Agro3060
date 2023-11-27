import axios from "./axios.js";

//* Create Response
export const getCodeResponseRequest = async (id, email) => axios.get(`/forms/v/${id}?email=${email}`)



//* Responses
export const ResponsesRequest = async () => axios.get("/responses")
export const getResponseRequest = async (id) => axios.get(`/responses/${id}`)
export const getResponsesInstructorRequest = async (id) => axios.get(`/responses/${id}/instructor`)
export const getResponsesFormRequest = async (id) => axios.get(`/responses/${id}`)
