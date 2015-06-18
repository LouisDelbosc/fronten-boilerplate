#Done:

- directories
- routes
- webpack config for js/jsx with babel and jsx loader
- script for dev and prod in package.json
- make transition working
- make the userPage
 - 3 parts: 
  - user form
  - machine list available
  - membership
 - loading the machinelist 
- letting the upper hand from the userpage to the userstore
- login page complete (miss only the right transition with the router)

#Need to be done:

- making the loginsubmit do the outside request
- make logout related stuff
- check the actions to see if it's the same
- making the action + store for the userPage
- finishing the store with calling the API
- making the Login page the default page + redirect
- put a willTransitionTo in login
 - bool isLogged
 - bool hasFailedToLoggedIn
 - when fail to log, put a warning
