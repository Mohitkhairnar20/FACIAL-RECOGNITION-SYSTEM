import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [image, setImage] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [uploadResultMessage, setUploadResultMessage] = useState('Please enter an image to authenticate');
  const [isAuth, setAuth] = useState(false);

  async function sendImage(e) {
	e.preventDefault();
  
	if (!image) {
	  setUploadResultMessage("Please select an image to upload.");
	  return;
	}
  
	setImageURL(URL.createObjectURL(image));
	const visitorImageName = uuidv4();
  
	try {
		const res = await fetch(
			`https://93ks26lk3d.execute-api.ap-south-1.amazonaws.com/dev/bucket/visitor-image-vault/${visitorImageName}.jpeg`,
			{
				method: "PUT",
				headers: {
				"Content-Type": image.type || "image/jpeg",
				},
				body: image,
			}
			);		  

		if (!res.ok) {
			const text = await res.text();
			throw new Error(`Upload failed: ${res.status} ${text}`);
		}

		const response = await authenticate(visitorImageName);
		if (response.Message === "Success") {
			setAuth(true);
			setUploadResultMessage(
			`Hi ${response["firstName"]} ${response["lastName"]}, welcome to work`
			);
		} else {
			setAuth(false);
			setUploadResultMessage(`Authentication Failed`);
		}
	} catch (error) {
	  setAuth(false);
	  setUploadResultMessage(
		`There is an error in the authentication process, try again later.`
	  );
	  console.error(error);
	}
  }  

  async function authenticate(visitorImageName) {
    const requestUrl = 'https://93ks26lk3d.execute-api.ap-south-1.amazonaws.com/dev/employee?' + new URLSearchParams({
      objectKey: `${visitorImageName}.jpeg`
    });

    try {
      const response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return { Message: 'Error' };
    }
  }

  return (
    <div className="App">
      <h2>FACIAL RECOGNITION SYSTEM</h2>
      <form onSubmit={sendImage}>
        <input type='file' name='image' onChange={e => setImage(e.target.files[0])} />
        <button type='submit'>Authenticate</button>
      </form>

      <div className={isAuth ? 'success' : 'failure'}>{uploadResultMessage}</div>
      <img src={imageURL} alt='Visitor' height={250} width={250} />
    </div>
  );
}

export default App;