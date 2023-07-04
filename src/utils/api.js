import axios from "axios"
export const apiUrl = "http://localhost:8080/api/"
export const api = axios.create({baseUrl: apiUrl})
export const endpoints = {
    read_equipos: "equipos/read",
    sign_in: "auth/signin",
  chapter_form: "chapter-form",
}