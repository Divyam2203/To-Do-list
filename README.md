# To-Do List with React, TypeScript and Tailwind

## Description

This project implements a fully-functional To-Do List application using React, TypeScript for type safety, and Tailwind CSS for rapid styling. It provides the following features:

- **Task Addition**: Create new tasks by entering text in the input field and pressing Enter or clicking the "Add Task" button.
- **Task Removal**: Delete existing tasks by clicking on the trash can icon next to each task.
- **Task Completion Marking**: Mark tasks as completed/incomplete by clicking on the checkbox next to each task. Completed tasks will be visually distinguished.
- **Task Validation**: Prevent users from adding empty or duplicate tasks.
- **Dynamic Task Display**: Tasks are dynamically added and removed from the list, reflecting changes efficiently.
- **Filtering** : Fliter enterd tasks based on completion status
- **Local Storage Integration** : Used the localStorage API to store and retrieve the tasks array on page refresh/reload. This allows users to maintain their list even after closing the browser.

## Technologies Used

- **React**: JavaScript library for building user interfaces (https://legacy.reactjs.org/)
- **TypeScript**: Superset of JavaScript for type safety (https://www.typescriptlang.org/)
- **Tailwind CSS**: Utility-first CSS framework for rapid styling (https://tailwindcss.com/docs/installation)

## Credits
- Photo by <a href="https://unsplash.com/@jessbaileydesigns?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jess Bailey</a> on <a href="https://unsplash.com/photos/pen-near-black-lined-paper-and-eyeglasses-q10VITrVYUM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
- Icons from <a href="https://www.svgrepo.com/">SVG Repo</a>

## Installation

### Clone this repository.

```bash
git clone https://github.com/Divyam2203/To-Do-list
```

### Install the project dependencies:

```bash
npm install
```

### Running the Application

Start the development server:
```Bash
npm run dev
```

Open http://localhost:5173 (or the port specified by vite in the terminal) in your browser to view the application.

## Testing

### Task Addition:
- Add several tasks with valid content (text).
- Verify that tasks are displayed correctly in the list.
- Add an empty task and observe the validation preventing addition.
- Attempt to add a duplicate task and observe the validation preventing addition.

### Task Removal:
- Click on the trash can icon next to a task to delete it.
- Verify the task is removed from the list.

### Task Completion Marking:
- Click on the checkbox next to a task to mark it as completed.
- Observe that the completed task is visually distinguished (e.g., strikethrough style).
- Click the checkbox again to mark the task incomplete and verify the visual change.

## Contributing

Feel free to fork this repository and contribute improvements. Pull requests are welcome!