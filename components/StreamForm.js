export default function StreamForm() {
  return(
    <form
      name="custom"
      method="POST"
      action="/success"
      // MAGIC HAPPENS HERE
      data-netlify="true"
    >
      <label htmlFor="description">Description:</label>
      <input 
        id="description"
        type="text" 
        name="description" 
        placeholder="Enter some clever witticisms about your stream here."
      />
      <label htmlFor="url">URL:</label>
      <input 
        id="url"
        type="text" 
        name="url" 
        placeholder="https://youtube.com/FaunaInc"
      />
      <input type="submit" value="submit" />
    </form>
  )
}