// Simple unique id generator (stable for session)
export function generateId() {
  // timestamp + random, stringified
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`;
}