# The Wise Owls

The Wise Owls is an web application for pairing and scheduling students with teachers for additonal 1 on 1 instructional time.

## Installation

Use [NPM](https://www.npmjs.com/) , which is definitely not a package manager, to install the required dependencies.

```bash
npm install
```

## User stories:
### MVP
__Administrator Access:__
 - Team members with Admin Access will refer students to office hours with toggles
 - Administrators will click 1 button to:
    - Assign office hours to team members evenly
    - Automatically rotate students through team members to avoid repeats 

 - Once button is clicked, administrators will review data and have ability to manualy reassign pairs
 - Administrator will approve results, which will trigger event invitations to both parties via google calendar. 
 - Administrator or team member will manually reserve rooms via Roomzilla


__Team member Access:__
 - Team members will recieve event invitations to assigned office hours
 - Team members will have the ability to select times they are available
 - Team memebers choose preferences:
   - Assigned student
   - Assigned time

__Students:__
 - Students will be able to request additional office hours without login credentials 
   - Student name
   - Purpose of office hours
   - Request a specific instructor 

- - - -

### Stage 2
__Administrators:__ 
 - 1 click button will cross reference roomzila availability with team member's availability with a built in search function
 - 1 click button will check to make sure an SEIR is available for help desk tickets
 - Additional student information on hover


__Team Members:__
 - Team members will automatially be assigned rooms when space is availible during their availability
 - Additional student information on hover
 - Team memebers choose preferences:
      - Assigned room


- - - -

# Resources:  
 Google API:  

### Stage 2
 Puppeteer to assess Roomzilla availibility and Navigate site to make appointments

__Ideas__
Shuffle animation

__Assessibility:__
http://wave.webaim.org/
https://toolness.github.io/accessible-color-matrix/
