![Studienplaner](docs/logo.png)

# Studienplaner

> Web app for managing university courses and grades.

*Note: Currently this app is only available in German and uses the Austrian
grading system (1 to 5, 1 is best, 5 is failing).*

## Demo

See Studienplaner in action on the [official website](http://studienplaner.at).

# Features

- Manage courses, attendances, and grades.
- Filter courses by type, title, or grade.
- Tagging system to model complex dependencies.
- Calculation of gained credits and average grade.
- Semester view with credit bar-chart.
- Import university programs from a [public database](https://github.com/lukas-eibensteiner/studienplaner-data).
- Automatic saving to and loading from local-storage.
- JSON import and export.

## Ideas for future extensions

- Offline mode.
- Internationalization (first and foremost an English translation).
- Multiple grading systems.
- Time-intervals other than semester (year, trimester, etc.).
- Line-chart of average grade across time-intervals.
- Tasks and deadlines for individual attendances.
- Group courses into modules with complex completion criteria.

# Related Repositories

- [lukas-eibensteiner/studienplaner-data](https://github.com/lukas-eibensteiner/studienplaner-data) 
(serves as public database for the app)

- [lukas-eibensteiner/studienplaner-web](https://github.com/lukas-eibensteiner/studienplaner-web)
(official website)
