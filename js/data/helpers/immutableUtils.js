// ─── LAYER 1: Generic immutable helpers ───────────────────────

/**
 * Safely read a nested value using a path array.
 * Example: getAtPath(obj, ['users', 0, 'profile', 'user', 'name'])
 * Returns undefined if any step along the path is missing.
 * 
 * Verifies you can read a nested value from the current app data without changing anything.
 */
export function getAtPath(obj, path) {
  return path.reduce((current, key) => {
    if (current == null) return undefined;
    return current[key];
  }, obj);
}

/**
 * Return a NEW object/array with `value` set at `path`.
 * Does NOT mutate the original.
 *
 * path = ['users', 0, 'profile', 'user', 'name']
 * value = 'Vicky'
 * 
 * Verifies you can replace a single nested field and save the result to localStorage.
 */
export function setAtPath(obj, path, value) {
  if (path.length === 0) return value;

  const [head, ...rest] = path;

  if (Array.isArray(obj)) {
    const copy = [...obj];
    copy[head] = setAtPath(obj[head], rest, value);
    return copy;
  }

  return {
    ...obj,
    [head]: setAtPath(obj[head], rest, value),
  };
}

/**
 * Update a value at `path` using an updater function.
 * The updater receives the current value and returns the new value.
 *
 * Example: updateAtPath(data, ['users', 0, 'profile', 'currentWeekId'],
 *   (current) => current + 1
 * )
 */
export function updateAtPath(obj, path, updaterFn) {
  const currentValue = getAtPath(obj, path);
  const newValue = updaterFn(currentValue);
  return setAtPath(obj, path, newValue);
}

/**
 * Shallow-merge `updates` into the object found at `path`.
 * Perfect for updating several fields at once without listing each one.
 *
 * Example: mergeAtPath(data, ['users', 0, 'profile', 'user'],
 *   { name: 'Vicky', overallGoal: 'Run a 5K' }
 * )
 */
export function mergeAtPath(obj, path, updates) {
  const current = getAtPath(obj, path) ?? {};
  return setAtPath(obj, path, { ...current, ...updates });
}





/**
 * Update ONE item in an array by index (immutable).
 * Other items in the array are untouched.
 */
export function updateArrayItem(arr, index, updaterFn) {
  return arr.map((item, i) => (i === index ? updaterFn(item) : item));
}

/**
 * Update ONE item in an array that matches a condition.
 * Example: find the week where weekId === 3
 */
export function updateArrayItemWhere(arr, predicate, updaterFn) {
  return arr.map((item) => (predicate(item) ? updaterFn(item) : item));
}