# Commit Log UI

- Create a UI which polls for new commit messages and compiles them into a
  streaming, scrollable log.

  - Log should warn when a commit message was unable to be polled for.

  - Log should show commit messages in a monospace font.

  - Log should use a divider to show separate commit messages.

  - Log should not allow XSS attacks when displaying commit messages.

  - Log should allow scrolling back and then clicking a button to follow stream
    again.

- Create a UI to search through the log for each instance of a string.

  - Add a search box for entering a string to search and show how many instances
    of the string are found and highlight every instance in the log. The
    instances can be point-in-time and do not need to update as new messages
    stream in.

  - Add buttons next to the search box to go backwards and forwards through the
    instances of the string found and scroll the instance into view in the log.

  - Add a drop down next to the search box to allow searching normally,
    case-insensitive, and with a regex.
