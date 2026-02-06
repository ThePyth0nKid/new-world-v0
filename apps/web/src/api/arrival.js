/**
 * Arrival API — all 8 endpoints for the character creation flow.
 *
 * Each function returns the parsed JSON response.
 * On error the promise rejects with an Error whose .status and .body
 * carry the HTTP details (see client.js).
 */

import { apiGet, apiPost } from './client'

const BASE = '/api/v1/nw/arrival'

export function startSession() {
  return apiPost(`${BASE}/start/`)
}

export function sendMessage(sessionId, message) {
  return apiPost(`${BASE}/chat/`, {
    session_id: sessionId,
    message,
  })
}

export function triggerGenerate(sessionId) {
  return apiPost(`${BASE}/generate/`, {
    session_id: sessionId,
  })
}

export function getProgress(sessionId) {
  return apiGet(`${BASE}/progress/${sessionId}/`)
}

export function selectPortrait(sessionId, imageIndex) {
  return apiPost(`${BASE}/select/`, {
    session_id: sessionId,
    image_index: imageIndex,
  })
}

export function sendRefine(sessionId, feedback) {
  return apiPost(`${BASE}/refine/`, {
    session_id: sessionId,
    feedback,
  })
}

export function getNames(sessionId) {
  return apiPost(`${BASE}/names/`, {
    session_id: sessionId,
  })
}

export function finalize(sessionId, name) {
  return apiPost(`${BASE}/finalize/`, {
    session_id: sessionId,
    name,
  })
}
