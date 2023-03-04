const url = require('url')
const express = require('express')
const router = express.Router()
const needle = require('needle')

const API_BASE_URL = process.env.API_BASE_URL
const API_OPTIONS_STRING = process.env.API_OPTIONS_STRING

router.get('/', async (req, res) => {
  try {
    const params = url.parse(req.url, true).query
    const apiRes = await needle('get', `${API_BASE_URL}${params.q}${API_OPTIONS_STRING}`)
    const data = apiRes.body
    res.status(200).json(data)

  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router