const [drop1, setDrop1] = useState(false);
	const [drop2, setDrop2] = useState(false);
	const showDropdown = (e,id)=>{
		switch (id) {
			case 1:
				setDrop1(!drop1)
				break;
			case 2:
				setDrop2(!drop2)
				break;
			
			default:
				break;
		}