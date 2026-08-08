// ─── LAYER 2: Domain-specific helpers ─────────────────────────

import { getData, updateData } from "../dataStore.js";
import { mergeAtPath, updateArrayItem } from "./immutableUtils.js";

// ── Read helpers ──

/** Get the full stored root object */
export function getAppData() {
  return getData().appData;
}

/** Get one user by index (default: first user) */
export function getUser(userIndex = 0) {
  return getAppData().users[userIndex];
}

/** Get a specific week log for a user */
export function getWeekLog(userIndex = 0, weekIndex = 0) {
  return getUser(userIndex).weeklyLogs[weekIndex];
}

/** Get a specific day within a week */
export function getDay(userIndex = 0, weekIndex = 0, dayIndex = 0) {
  return getWeekLog(userIndex, weekIndex).days[dayIndex];
}

// ── Write helpers (all save to localStorage) ──

/**
 * Master write function: pass in a function that receives
 * current appData and returns the new appData.
 *
 * This is the single front door for all updates.
 */
export function patchAppData(updaterFn) {
  const current = getData();
  const newAppData = updaterFn(current.appData);
  return updateData({ appData: newAppData });
}

/** Update fields on a user's profile.user object */
export function updateUserProfile(userIndex, updates) {
  return patchAppData((appData) =>
    mergeAtPath(appData, ["users", userIndex, "profile", "user"], updates)
  );
}

/** Update top-level profile fields (currentWeekId, lastWeekId) */
export function updateUserProfileMeta(userIndex, updates) {
  return patchAppData((appData) =>
    mergeAtPath(appData, ["users", userIndex, "profile"], updates)
  );
}

/** Update one day in a week log */
export function updateDay(userIndex, weekIndex, dayIndex, updates) {
  return patchAppData((appData) => {
    const users = updateArrayItem(appData.users, userIndex, (user) => {
      const weeklyLogs = updateArrayItem(user.weeklyLogs, weekIndex, (week) => {
        const days = updateArrayItem(week.days, dayIndex, (day) => ({
          ...day,
          ...updates,
        }));
        return { ...week, days };
      });
      return { ...user, weeklyLogs };
    });
    return { ...appData, users };
  });
}

/** Update just the activity block on a day */
export function updateDayActivity(userIndex, weekIndex, dayIndex, activityUpdates) {
  return patchAppData((appData) =>
    mergeAtPath(
      appData,
      ["users", userIndex, "weeklyLogs", weekIndex, "days", dayIndex, "activity"],
      activityUpdates
    )
  );
}

/** Mark a day as completed */
export function markDayComplete(userIndex, weekIndex, dayIndex) {
  return updateDay(userIndex, weekIndex, dayIndex, {
    isCompleted: true,
    completedAt: new Date().toISOString(),
  });
}