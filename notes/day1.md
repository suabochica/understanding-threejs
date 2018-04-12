# Day 1

## What is React?

_React is a library for building user interfaces_

## What makes React special?

- Composition
- Unidirectional Dataflow
- Explicit Mutations
- Just JavaScript

### Composition

Imagine that you have the next components to build a calendar:

```javascript
<Container />	<Navbar />	
<DataPicker />	<Calendar />
<Header />
``` 

Basically, the composition feature of React answer the question _How do you build a large app?_. The answer is: By building a bunch of small apps. Now you have the next composition:

```javascript
<Container />
	<Navbar />
	<Header />
	<DataPicker />
		<Calendar />
	</DataPicker />
</Container />
``` 

One of the purposes of composition is reducing complexity. When you start to build a component into React you have to consider two aspects:

1. What state will manage the component
2. How the User Interface will looks like

To diving in composition, lets check the next code:

```javascript
function getProfilePic (username) {
	return 'https://photo.fb.com/' + username;
}

function getProfileLink (username) {
	return 'https://www.fb.com/'' + username;
}

function getAvatarInfo (username) {
	return {
		pic: getProfilePic(username),
		link: getProfileLink(username)
	}
}

getAvatarInfor('sergiobenitez')
```

In the code above, we construct our desired data structure in the our parent function `getAvatarInfor(username)` consuming the `getProfilePic(username)` and the `getProfilePic(username)` functions. The bet of React is use functions that allow us to build UI. The next code is an example of the las code in terms of react:

```javascript
function ProfilePic(props) {
	return (
		<img src={'https://photo.fb.com/' + props.username} />
	)
}

function ProfileLink(props) {
	return (
		<a href={'https://www.fb.com/' + props.username}>
			{props.username}
		</a>
	)
}

functionAvatar(props) {
	return (
		<div>
			<ProfilePic username={props.username} />
			<ProfileLink username={props.username} />
		</div>
	)
}

<Avatar username="sergiobenitez">
```