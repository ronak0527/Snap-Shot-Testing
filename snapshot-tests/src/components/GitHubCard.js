import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react'

function BasicExample() {

 const [gitHubName, setGitHubName] = useState('')
 const [gitHubBio, setGitHubBio] = useState('')
 const [gitHubImg, setGitHubImg] = useState('')
 const [gitHubLink, setGitHubLink] = useState('')

 useEffect(() => {
  fetch('https://api.github.com/users/Angeltheesoto')
  .then(res => res.json())
  .then(data => {
   setGitHubName(data.name)
   setGitHubBio(data.bio)
   setGitHubImg(data.avatar_url)
   setGitHubLink(data.html_url)
  })
 }, [])

  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={gitHubImg} />
      <Card.Body>
        <Card.Title>{gitHubName}</Card.Title>
        <Card.Text>
          {gitHubBio}
        </Card.Text>
        <a href={gitHubLink} target='Blank'>
         <Button variant="primary">My GitHub</Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;