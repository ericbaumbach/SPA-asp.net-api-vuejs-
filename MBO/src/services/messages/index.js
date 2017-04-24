export {
  getAllContacts,
  getContacts,
  getMessages,
  postMessage,
  markReadMessage,
  deleteMessage
}

import api from 'api'
import axios from 'utilities/axios'

const path = '/api/Messages'

function getAllContacts () {
  return axios.get(api.url + path + '/getAllContacts')
}

function getContacts () {
  return axios.get(api.url + path + '/getContacts')
}

function getMessages (obj) {
  return axios.get(api.url + path + '?folder=' + obj.folder + objToQuery(obj))
}

function postMessage (obj) {
  return axios.post(api.url + path, obj)
}

function deleteMessage (obj) {
  console.log(api.url + path + '/Delete?Id=' + obj)
  return axios.post(api.url + path + '/Delete?Id=' + obj)
}

function markReadMessage (obj) {
  return axios.post(api.url + path + '/Read?Id=' + obj)
}

function objToQuery (obj) {
  let query = ''
  let val = ''
  for (const prop in obj) {
    val = obj[prop]
    if (val && (val.trim && val.trim() !== '') || val > 0) {
      query += `&${prop}=${val}`
    }
  }
  return query
}
