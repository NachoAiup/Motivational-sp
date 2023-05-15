import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGoal, selectGoals, removeGoal, completeGoal } from "./goalsSlice";
import { v4 as uuidv4 } from "uuid";
import styles from "./goals.module.css";

export default function Goals() {
  const [goal, setGoal] = useState("");
  const goals = useSelector(selectGoals);
  const dispatch = useDispatch();
  console.log(goals);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (goal.length === 0) {
      return;
    }

    let cardId = uuidv4();
    dispatch(addGoal({ id: cardId, goal, complete: false }));
    setGoal("");
  };

  const handleDelete = (id) => {
    dispatch(removeGoal(id));
  };

  const handleDone = (id) => {
    dispatch(completeGoal(id));
  };

  return (
    <main className={styles.sectionStyle}>
      <div className={styles.goalsStyles}>
        <h1 className={styles.titleStyles}>What's on your mind today?</h1>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.inputStyles}
            id="quiz-name"
            value={goal}
            onChange={(e) => setGoal(e.currentTarget.value)}
          />
        </form>
      </div>
      <div className={styles.goalsStyles}>
        <ul className={styles.listStyles}>
          {goals.map((goal) => (
            <li
              className={`${styles.liStyles} ${goal.complete && styles.done}`}
              key={goal.id}
            >
              <div className={styles.liContainerStyles}>
                <div className={styles.actionDiv}>
                  <button
                    className={`${styles.removeButton} ${styles.actionButton}`}
                    onClick={() => handleDelete(goal.id)}
                  >
                    Remove
                  </button>
                  <button
                    className={`${styles.doneButton} ${styles.actionButton}`}
                    onClick={() => handleDone(goal.id)}
                  >
                    Done
                  </button>
                </div>
                {goal.goal}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
