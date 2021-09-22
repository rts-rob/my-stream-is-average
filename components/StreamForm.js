export default function StreamForm() {
  return(
    <form
      name="StreamForm"
      method="POST"
      action="/success"
      // MAGIC HAPPENS HERE
      data-netlify="true"
    >
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
        <input type="submit" value="submit" />
      </p>
    </form>
  )
}