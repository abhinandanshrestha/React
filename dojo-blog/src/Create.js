import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
	const [title,setTitle] = useState('');
	const [body,setBody] = useState('');
	const [author,setAuthor] = useState('mario');
	const [isPending,setIsPending] = useState(false);
	const history = useHistory();

	const handleSubmit= (e)=>{
		e.preventDefault(); //prevents refreshing on clicking the "Add Blog" button
		const blog = { title, body, author }; //from JSON file

		setIsPending(true);

		fetch('http://localhost:8000/blogs',{
			method: 'POST',
			headers: { "Content-Type" : "application/json"},
			body: JSON.stringify(blog)
		}).then(() => {
			console.log('new blog added');
			setIsPending(false);
			// history.go(-1); // go back by 1 
			history.push('/'); //redirects to Home
		})


	}

	return (
		<div className="create">
			<h2>Add a new blog</h2>
			<form onSubmit={ handleSubmit }>
				<label>Blog title:</label>
				<input type="text"
				 required
				 value={ title }
				 onChange ={ (e) => setTitle(e.target.value) }/>

				<label>Blog body:</label>
				<textarea
				 required 
				 value = {body}
				 onChange={(e) => setBody(e.target.value)}/>

				<label>Blog author:</label>
				<select
				 value={author}
				 onChange={(e)=>setAuthor(e.target.value)}
				>
					<option value="mario">mario</option>
					<option value="luigi">luigi</option>
				</select>
				{ !isPending && <button>Add Blog</button> }
				{ isPending && <button disabled>Adding... Blog</button> }
			</form>
		</div>
	);
}

export default Create;