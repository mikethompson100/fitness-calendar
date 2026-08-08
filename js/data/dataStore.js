// dataStore.js - gatekeeper for localStorage read/write activities

const STORAGE_KEY = "appData";
// Default schema of our data, in case nothing has been saved yet
const DEFAULT_DATA = {
  "appData": 
  {
    "users":
    [
              {
                "profile": {
                  "user": {
                    "userId": "0",
                    "name": "Mike",
                    "overallGoal": "Weight training",
                    "createdAtDate": ""
                  },
                  "currentWeekId": 0,
                  "lastWeekId": 0
                },
                "weeklyLogs": [
                  {
                    "weekId": 0, 
                    "weekFirstDayOfWeek": "",                  
                    "weeklyTargetCount": 0,
                    "days": [
                      {
                        "dayIdentifier": null,             
                        "scheduled": false,                 
                        "day": null,                      
                        "scheduledTime": null,              
                        "activity": {
                          "activityType": "Chest press",        
                          "workoutRoutineSpecifics": null,  
                          "postWorkoutComments": null,      
                          "feelingTags": null              
                        },          
                        "isCompleted": false,               
                        "completedAt": null          
                      }
                    ]
                  },
                   {
                    "weekId": 1, 
                    "weekFirstDayOfWeek": "",                  
                    "weeklyTargetCount": 0,
                    "days": [
                      {
                        "dayIdentifier": null,             
                        "scheduled": false,                 
                        "day": null,                      
                        "scheduledTime": null,              
                        "activity": {
                          "activityType": "Back press",        
                          "workoutRoutineSpecifics": null,  
                          "postWorkoutComments": null,      
                          "feelingTags": null              
                        },          
                        "isCompleted": false,               
                        "completedAt": null          
                      }
                    ]
                  }
                ]
              },
                            {
                "profile": {
                  "user": {
                    "userId": "1",
                    "name": "Mary",
                    "overallGoal": "Cardiovascular health",
                    "createdAtDate": ""
                  },
                  "currentWeekId": 0,
                  "lastWeekId": 0
                },
                "weeklyLogs": [
                  {
                    "weekId": 0, 
                    "weekFirstDayOfWeek": "",                  
                    "weeklyTargetCount": 0,
                    "days": [
                      {
                        "dayIdentifier": null,             
                        "scheduled": false,                 
                        "day": null,                      
                        "scheduledTime": null,              
                        "activity": {
                          "activityType": "Walking",        
                          "workoutRoutineSpecifics": null,  
                          "postWorkoutComments": null,      
                          "feelingTags": null              
                        },          
                        "isCompleted": false,               
                        "completedAt": null          
                      }
                    ]
                  }
                ]
              }
            ]
  }
}

// Reads the current data from localStorage and returns it as a real JS object
function getData() {
  const raw = localStorage.getItem(STORAGE_KEY); // pull the raw string out of storage (or null if nothing's there)
  return raw ? JSON.parse(raw) : structuredClone(DEFAULT_DATA); // if something exists, parse it into an object; otherwise hand back a fresh default copy
}

// Overwrites the ENTIRE data object in localStorage for the uses cases of initial setup or setting the data back to defaults
function setData(newData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newData)); // convert the object back into a string and save it
}

// Helper for partial updates
function updateData(partialUpdate) {
  const current = getData(); // first, get what's already there
  const merged = { ...current, ...partialUpdate }; 
  setData(merged);
  return merged;
}

export { getData, setData, updateData };
