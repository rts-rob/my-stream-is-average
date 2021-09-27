export default function StreamForm() {
  return(
    <form
      name="StreamForm"
      method="POST"
      action="/success"
      // MAGIC HAPPENS HERE
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="StreamForm" />
      <p>
        <label htmlFor="description">Description:</label>
      </p>
      <p>
        <input 
          id="description"
          type="text" 
          name="description"
          placeholder="Enter some clever witticisms about your stream here."
        />
      </p>
      <p>
        <label htmlFor="url">URL:</label>
      </p>
      <p>
        <input 
          id="url"
          type="text" 
          name="url" 
          placeholder="https://youtube.com/FaunaInc"
        />
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}