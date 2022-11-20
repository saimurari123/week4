const listdo = () => {
  all = [];
  const add1 = (todoItem) => {
    all.push(todoItem);
  };
  const markdone = (index) => {
    all[index].completed = true;
  };

  let day_present = new Date().toLocaleDateString("en-CA");

  const due = () => {
    return all.filter((todo) => {
      return todo.dueDate < day_present;
    });
  };

  const day_duenow = () => {
    return all.filter((todo) => {
      return todo.dueDate === day_present;
    });
  };

  const duelater = () => {
    return all.filter((todo) => {
      return todo.dueDate > day_present;
    });
  };

  const todisplay = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == day_present ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add1,
    markdone,
    due,
    day_duenow,
    duelater,
    todisplay,
  };
};

module.exports = listdo;

