*Lychee* (working title) is a web application that helps students organize
their academic work.

# Milestones

## Version 0.1

- track courses and attendances
  - add new course
  - edit course (type, title, credits, hours)
    - track attendances (date, grade)
    - assign tags
  - delete course and associated attendance
- list all courses
  - switch between active semester
    - display completion state (none, planned, in progress, grade)
  - calculate statistics
    - number of courses (passed, all)
    - average grade (passed, all)
    - sum of credits (passed, all)
  - sort by
    - title (ascending)
    - credits (descending)
    - grade (descending)
  - filter by
    - search query
    - completion state
    - type
    - tags
- manage profile
  - define name
  - store data
    - local storage
    - JSON file
  - load data
    - local storage
    - JSON file
- list courses by time interval (semester, year)
  - calculate statistics
    - number of courses (passed, all)
    - average grade (passed, all)
    - sum of credits (passed, all)
  - render diagrams
    - bar chart of credits
    - bar chart of hours
    - line chart of average grade
    - custom, named limit indicators
