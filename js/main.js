
import { setup } from "./data/initData.js";
import { getData, setData, updateData } from "./data/dataStore.js";
import { getAppData, getUser, getWeekLog, getDay, patchAppData, updateUserProfile, updateUserProfileMeta, updateDay, updateDayActivity, markDayComplete } from "./data/helpers/appDataHelpers.js";
import { getAtPath, setAtPath, updateAtPath, mergeAtPath, updateArrayItem, updateArrayItemWhere} from "./data/helpers/immutableUtils.js";
//import { render_UI } from "./ui/render-calendar.js";

const returned = getData();

document.getElementById("myButton").addEventListener("click", () => {
  const current = getData();
// updateUserProfile(0, { userId: 3 });
// const a = getAtPath(getAppData(), ["users", 0, "weeklyLogs", 0, "days", 0, "activity", "activityType"]);
const a = patchAppData((appData) => setAtPath(appData, ["users", 1, "weeklyLogs", 0, "days", 0, "activity", "activityType"], "Sprinting"));

console.log("A:", a);

  // immutability.js
/* getAtPath(getAppData(), ["users", 0, "profile", "user", "name"]);
//Verifies you can read a nested value from the current app data without changing anything. verified

patchAppData((appData) => setAtPath(appData, ["users", 0, "profile", "user", "name"], "Vicky"));
//Verifies you can replace a single nested field and save the result to localStorage.

patchAppData((appData) => updateAtPath(appData, ["users", 0, "profile", "currentWeekId"], (id) => id + 1));
//Verifies you can change a value using its current value, such as incrementing a week ID.

patchAppData((appData) => mergeAtPath(appData, ["users", 0, "profile", "user"], { name: "Vicky", overallGoal: "Run a 5K" }));
//Verifies you can update multiple fields on one nested object in a single call.

patchAppData((appData) => ({ ...appData, users: updateArrayItem(appData.users, 0, (user) => ({ ...user, profile: { ...user.profile, lastWeekId: 1 } })) }));
//Verifies you can update one item in an array by index without changing the other items.

patchAppData((appData) => ({ ...appData, users: updateArrayItemWhere(appData.users, (user) => user.profile.user.name === "Mike", (user) => mergeAtPath(user, ["profile", "user"], { name: "Vicky" })) })); */
  

/* 
//appDataHelpers.js
//Read helpers
//getAppData();
Verifies you can read the full appData object from localStorage.

//getUser(0);
Verifies you can read the first user record from stored app data.

//getWeekLog(0, 0);
Verifies you can read the first week log for the first user.

getDay(0, 0, 0);
//Verifies you can read the first day entry from the first week log.

//Write helpers
patchAppData((appData) => setAtPath(appData, ["users", 0, "profile", "user", "userId"], "user-001"));
//Verifies the main write entry point can apply any custom update function and save it.

updateUserProfile(0, { name: "Vicky" });
//Verifies you can update fields on a user's profile.user object.

updateUserProfileMeta(0, { currentWeekId: 1, lastWeekId: 0 });
//Verifies you can update top-level profile fields like week tracking IDs.

updateDay(0, 0, 0, { scheduled: true, day: "Monday", scheduledTime: "07:00" });
//Verifies you can update multiple fields on a specific day entry.

updateDayActivity(0, 0, 0, { activityType: "Cycling" });
//Verifies you can update only the activity block for a specific day.

markDayComplete(0, 0, 0);
//Verifies you can mark a day as completed and automatically set completedAt.
 */

  //updateData({ appData: updatedAppData });
});