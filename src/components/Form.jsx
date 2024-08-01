import styles from "./Form.module.css";

function Form() {
  return (
    <div className={styles.formContainer}>
      <h2>Form</h2>
      <form>
        <div className={styles.formGroup}>
          <div className={styles.formLabel}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <div className={styles.formLabel}>
            <label htmlFor="company" className={styles.label}>
              Company
            </label>
          </div>
          <input
            type="text"
            id="company"
            name="company"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <div className={styles.formLabel}>
            <label htmlFor="email" className={styles.label}>
              E-mail
            </label>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <div className={styles.formLabel}>
            <label htmlFor="select" className={styles.label}>
              Select Field
            </label>
          </div>
          <select id="select" name="select" className={styles.select}>
            <option value=""></option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.formLabel}>
            <label className={styles.label}>Radio Field</label>
          </div>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input type="radio" name="radio" value="selection1" /> Selection 1
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" name="radio" value="selection2" /> Selection 2
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" name="radio" value="selection3" /> Selection 3
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" name="radio" value="selection4" /> Selection 4
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.formLabel}>
            <label className={styles.label}>Checkbox Field</label>
          </div>
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" name="checkbox" value="selection1" />{" "}
              Selection 1
            </label>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" name="checkbox" value="selection2" />{" "}
              Selection 2
            </label>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" name="checkbox" value="selection3" />{" "}
              Selection 3
            </label>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" name="checkbox" value="selection4" />{" "}
              Selection 4
            </label>
          </div>
        </div>
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
